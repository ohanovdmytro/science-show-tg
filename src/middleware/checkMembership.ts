import { Composer, Context } from "grammy";
import type { ParseModeFlavor } from "@grammyjs/parse-mode";

export const checkMembership = new Composer<ParseModeFlavor<Context>>();

checkMembership.on("message", async (ctx) => {
  const isMember = await ctx.api.getChatMember("@evrika_museum", ctx.chat.id);

  if (isMember.status === "left") {
    await ctx.reply(
      "Для того, аби пройти квіз, потрібно підписатися на канал: @evrika_museum"
    );
  } else {
    await ctx.replyWithMarkdownV2(
      `Для того, аби пройти квіз, перейдіть у *[Google Форму](https://forms.gle/6gutsLpkVqWgjpCf8)*`
    );
  }
});
