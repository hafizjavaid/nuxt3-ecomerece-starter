<template>
    <Button @click="open" type="button" :disabled="isLoading" variant="outline">
        <div class="flex items-center">
            <Icon :name="icon" class="mr-2 h-4 w-4" />
            {{ label }}
        </div>
    </Button>
</template>

<script lang="ts" setup>
const { toggleLoading, isLoading } = useStore();
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
});

function open() {
    toggleLoading(true);
    window.location.href = props.path;
}
</script>