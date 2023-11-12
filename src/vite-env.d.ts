/// <reference types="vite/client" />

interface ImportMetaEnv {
  [key: string]: unknown;
  BASE_URL: string;
  MODE: string;
  DEV: boolean;
  PROD: boolean;
  SSR: boolean;
}
interface ImportMeta {
  url: string;

  readonly hot?: import("./hot").ViteHotContext;

  readonly env: ImportMetaEnv;

  glob: import("./importGlob").ImportGlobFunction;
  /**
   * @deprecated Use `import.meta.glob('*', { eager: true })` instead
   */
  globEager: import("./importGlob").ImportGlobEagerFunction;
}
