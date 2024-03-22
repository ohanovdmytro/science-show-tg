import { Composer } from "grammy";

export const sendForm = new Composer();

sendForm.command("start", async (ctx) => {
  await ctx.reply("Welcome! Up and running.");
});
