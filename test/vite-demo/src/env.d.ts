/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TEST_ENV_VARIABLE: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}