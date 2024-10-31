// auth.d.ts
declare module '#auth-utils' {
    interface User {
        id: string;
        email: string;
        role: 'USER' | 'ADMIN';
        name: string;
        avatarUrl: string | null;
    }

    interface UserSession {
    }

    interface SecureSessionData {
    }
}

export { }