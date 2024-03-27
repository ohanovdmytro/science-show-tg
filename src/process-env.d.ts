declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN_TEST: string;
      BOT_TOKEN: string;
    }
  }
}

export {};
