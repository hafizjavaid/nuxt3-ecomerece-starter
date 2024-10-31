export default defineNuxtRouteMiddleware(async () => {
    const { user } = useUserSession();
    if (!user.value) return navigateTo("/auth/login");
});