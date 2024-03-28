import { Composer } from "grammy";

export const checkMembership = new Composer();

checkMembership.on("message", async (ctx) => {
  const isMember = await ctx.api.getChatMember("@evrika_museum", ctx.chat.id);

  if (isMember.status === "left") {
    await ctx.reply(
      "Для того, аби пройти квіз, потрібно підписатися на канал: @evrika_museum",
    );
  } else {
    await ctx.api.sendMessage(
      ctx.chat.id,
      `Для того, аби пройти квіз - перейдіть у <a href="https://forms.gle/6gutsLpkVqWgjpCf8"><b>Google Форму</b></a>`,
      { parse_mode: "HTML" }
    );
  }
});
