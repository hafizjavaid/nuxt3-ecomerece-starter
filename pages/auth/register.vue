<script setup lang="ts">
type PAYLOAD = {
    password: string;
    name: string;
    email: string;

};
const form = ref<PAYLOAD>({
    password: '',
    name: '',
    email: '',
});

const { toggleLoading, showError, showMessage, isLoading } = useStore();

const onSubmit = async () => {
    try {
        toggleLoading(true);
        await $fetch('/api/auth/register', {
            body: form.value,
            method: 'POST'
        })
        showMessage("Account created");
        return navigateTo(`/auth/login`);
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
                        <CardTitle class="text-2xl"> Sign Up</CardTitle>
                        <CardDescription> Enter your information to create an account </CardDescription>
                    </CardHeader>
                    <CardContent class="grid gap-4">
                        <div class="grid gap-2">
                            <Label for="name">Name</Label>
                            <Input id="name" type="text" placeholder="name" v-model="form.name" />
                        </div>
                        <div class="grid gap-2">
                            <Label for="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@gmail.com" v-model="form.email" />
                        </div>
                        <div class="grid gap-2">
                            <Label for="password">Password</Label>
                            <Input id="password" type="password" v-model="form.password" />
                        </div>
                        <div class="grid grid-cols-1">
                            <div class="grid grid-cols-1">
                                <AuthSocialButton label="Github" icon="radix-icons:github-logo" path="/api/auth/github">
                                </AuthSocialButton>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter class="flex-col space-y-2">
                        <Button :disabled="isLoading" class="w-full" type="submit"> Register </Button>
                        <p>
                            Already have an account?
                            <NuxtLink to="/auth/login"
                                class="border-b border-gray-500 text-muted-foreground hover:text-primary">
                                Login
                            </NuxtLink>
                        </p>
                    </CardFooter>
                </Card>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>