import { Composer, Keyboard } from "grammy";
import { startText } from "../static/text";

export const startCommand = new Composer();

const keyboard = new Keyboard()
  .text("Пройти квіз 🤓")
  .text("Соц мережі 📊")
  .resized();

startCommand.command("start", async (ctx) => {
  await ctx.reply(`${startText}`, {
    reply_markup: keyboard,
  });
});
