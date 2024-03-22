import { Composer } from "grammy";

export const startCommand = new Composer();

startCommand.command("start", async (ctx) => {
  await ctx.reply("Send a message to get it back!");
});
