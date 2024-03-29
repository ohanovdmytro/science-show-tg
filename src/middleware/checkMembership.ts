import { Composer, InlineKeyboard } from "grammy";
import {
  followText,
  takeQuiz,
  noCommand,
  socialNetworks,
} from "../static/text";

export const checkMembership = new Composer();

const keyboard = new InlineKeyboard().url(
  "Розпочати квіз 🚀",
  "https://forms.gle/6gutsLpkVqWgjpCf8"
);

checkMembership.on("message", async (ctx) => {
  const isMember = await ctx.api.getChatMember("@evrika_museum", ctx.chat.id);

  if (ctx.msg.text === "Пройти квіз 🤓") {
    if (isMember.status === "left") {
      await ctx.reply(`${followText}`);
    } else {
      await ctx.reply(`${takeQuiz}`, { reply_markup: keyboard });
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
