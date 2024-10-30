import { authSchema } from "~/utils/validations";
import { sanitizeUser } from "~/server/utils/auth";
import db from '~/utils/db'



export default defineEventHandler(async (event) => {
    const { email, password, name } = await readValidatedBody(event, (body) =>
        authSchema.parse(body),
    );

    const existingUser = await db.user.findUnique({
        where: {
            email
        }
    });

    if (existingUser) {
        throw createError({
            statusCode: 400,
            statusMessage: "User already exists",
        });
    }

    const hashedPassword = await hashPassword(password);

    const user = await db.user.create({
        data: {
            email,
            hashedPassword,
            name,
        }
    })

    setResponseStatus(event, 201);
    return sanitizeUser(user);
});
