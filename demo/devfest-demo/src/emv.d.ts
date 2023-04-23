/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TITLE_APP: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}