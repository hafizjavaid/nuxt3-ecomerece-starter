export type APIError = {
    statusCode: number,
    statusMessage: string,
    message: string,
    data?: Record<string, string[]>
}