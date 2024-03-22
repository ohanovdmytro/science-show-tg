import { Composer } from "grammy";

export const checkMembership = new Composer();

checkMembership.on("message", async (ctx) => {
  await ctx.reply(`Your message: ${ctx.message}`);
});
