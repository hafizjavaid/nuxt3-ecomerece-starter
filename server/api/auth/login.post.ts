import { authSchema } from "~/utils/validations";
import { sanitizeUser } from "~/server/utils/auth";
import db from '~/utils/db'

export default defineEventHandler(async (event) => {
    try {
        const { email, password } = await readValidatedBody(event, (body) =>
            authSchema.parse(body),
        );
        const existingUser = await db.user.findUnique({
            where: {
                email
            }
        });
        if (!existingUser) {
            throw createError({
                statusCode: 400,
                statusMessage: "User not found",
            });
        }

        if (!existingUser.hashedPassword) {
            const connectedOauthAccount = await db.oauthAccount.findFirst({
                where: {
                    userId: existingUser.id
                }
            })
            if (connectedOauthAccount) {
                const oAuthProvider = connectedOauthAccount.providerId;
                throw createError({
                    statusCode: 400,
                    statusMessage: `Account connected with ${oAuthProvider}. Please continue with ${oAuthProvider} to login.`,
                });
            }
        }
        if (existingUser.hashedPassword) {
            const isPasswordCorrect = await verifyPassword(existingUser.hashedPassword, password);
            if (!isPasswordCorrect) {
                throw createError({
                    statusCode: 400,
                    statusMessage: "Invalid credentials",
                });
            }
        }

        const transformedUser = sanitizeUser(existingUser);

        if (transformedUser) {

            await setUserSession(event, { user: transformedUser });
        }
        return sendRedirect(event, "/");
    } catch (error) {
        console.log(error);
        // @ts-ignore
        throw error.statusCode
            ? error
            : createError({
                statusCode: 500,
                statusMessage: "Internal Server Error",
            });
    }
});
