declare global {
    namespace NodeJS {
        interface ProcessEnv {
            FRONTEND_URL: string,
            SERVER_PORT: string
        }
    }
}

export {};
