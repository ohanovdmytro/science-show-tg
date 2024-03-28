import { Composer, Context, Keyboard } from "grammy";
import { hydrateReply } from "@grammyjs/parse-mode";
import type { ParseModeFlavor } from "@grammyjs/parse-mode";

export const startCommand = new Composer<ParseModeFlavor<Context>>();

const keyboard = new Keyboard().text("Пройти квіз 🤓").row().resized();

startCommand.use(hydrateReply);

startCommand.command("start", async (ctx) => {
  await ctx.replyWithMarkdownV2("Натисніть *Пройти квіз 🤓* для того, щоб зареєструватися", {
    reply_markup: keyboard,
  });
});
