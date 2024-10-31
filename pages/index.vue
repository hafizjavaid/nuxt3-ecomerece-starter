<template>
    <div>
        <pre>
            {{ user }}
        </pre>
        <Button @click="logout" :disabled="isLoading" type="button"> Logout </Button>

    </div>
</template>

<script setup lang="ts">
const { user, clear } = useUserSession();
const { toggleLoading, showError, showMessage, isLoading } = useStore();

const logout = async () => {
    try {
        toggleLoading(true);
        await clear();
        await navigateTo('/auth/login');
    } catch (error) {
        const err = handleError(error);
        showError(err);
    } finally {
        toggleLoading(false);
    }
}

definePageMeta({
    middleware: 'auth'
})
</script>

<style scoped></style>