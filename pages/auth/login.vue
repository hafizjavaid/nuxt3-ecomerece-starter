<script setup lang="ts">
type PAYLOAD = {
    password: string;
    email: string;

};
const form = ref<PAYLOAD>({
    password: '',
    email: '',
});

const { toggleLoading, showError, showMessage, isLoading } = useStore();
const { fetch: refreshSession } = useUserSession();

const onSubmit = async () => {
    try {
        toggleLoading(true);
        await $fetch('/api/auth/login', {
            body: form.value,
            method: 'POST'
        })
        await refreshSession();
        showMessage("Logged in");
        navigateTo(`/`);
    } catch (error) {
        const err = handleError(error);
        showError(err);

    } finally {
        toggleLoading(false);
    }
};
</script>

<template>
    <div class="flex flex-col justify-center items-center min-h-screen">
        <div class="mx-auto w-full max-w-md">
            <form @submit.prevent="onSubmit">
                <Card class="overflow-y-auto">
                    <CardHeader class="space-y-1">
                        <CardTitle class="text-2xl"> Welcom Back </CardTitle>
                        <CardDescription> Enter your details below to login </CardDescription>
                    </CardHeader>
                    <CardContent class="grid gap-4">
                        <div class="grid gap-2">
                            <Label for="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@gmail.com" v-model="form.email" />
                        </div>
                        <div class="grid gap-2">
                            <Label for="password">Password</Label>
                            <Input id="password" type="password" v-model="form.password" />
                        </div>
                        <div class="grid grid-cols-1">
                            <AuthSocialButton label="Github" icon="radix-icons:github-logo" path="/api/auth/github">
                            </AuthSocialButton>
                        </div>
                    </CardContent>
                    <CardFooter class="flex-col space-y-2">
                        <Button :disabled="isLoading" class="w-full" type="submit"> Login </Button>
                        <p>
                            Don't have an account?
                            <NuxtLink to="/auth/register"
                                class="border-b border-gray-500 text-muted-foreground hover:text-primary">
                                Register
                            </NuxtLink>
                        </p>
                    </CardFooter>
                </Card>
            </form>
        </div>
    </div>
</template>
