import { Composer } from "grammy";
import {
  followText,
  takeQuiz,
  noCommand,
  socialNetworks,
} from "../static/text";

export const checkMembership = new Composer();

checkMembership.on("message", async (ctx) => {
  const isMember = await ctx.api.getChatMember("@evrika_museum", ctx.chat.id);

  if (ctx.msg.text === "Пройти квіз 🤓") {
    if (isMember.status === "left") {
      await ctx.reply(`${followText}`);
    } else {
      await ctx.reply(`${takeQuiz}`);
      setTimeout(() => {
        ctx.api.sendMessage(ctx.chat.id, `${socialNetworks}`);
      }, 1000 * 60);
    }
  } else if (ctx.msg.text === "Соц мережі 📊") {
    await ctx.reply(`${socialNetworks}`);
  } else {
    await ctx.reply(`${noCommand}`);
  }
});
