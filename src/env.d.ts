interface ImportMetaEnv {
  readonly VITE_TEST_ENV: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
