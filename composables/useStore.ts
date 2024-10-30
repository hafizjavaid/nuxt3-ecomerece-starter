import type { APIError } from "~/types";
import { toast } from '@/components/ui/toast'

interface StateProps {
    isLoading: boolean
    appError: null | APIError
}

const state = reactive<StateProps>({
    isLoading: false,
    appError: null,
})

export default () => {
    const { isLoading, appError } = toRefs(state);

    const toggleLoading = (value: boolean) => {
        state.isLoading = value
    }
    const toggleError = (error: null | APIError) => {
        state.appError = error
    }
    const showError = (error: APIError) => {
        console.log(error);
        toast({
            title: `${error.statusCode}`,
            description: error.statusMessage ? error.statusMessage : error.message
        })
    }
    const showMessage = (title: string) => {
        toast({
            title: `${title}`,
        })
    }

    return {
        toggleLoading,
        isLoading,
        appError,
        toggleError,
        showError,
        showMessage,
    }
}