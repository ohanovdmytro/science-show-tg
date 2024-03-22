import { Composer } from "grammy";

export const checkMembership = new Composer();

checkMembership.on("message", async (ctx) => {
    const isMember = await ctx.api.getChatMember(
      "@evrika_museum",
      ctx.message.from.id
    );
  
    console.log(isMember);
  
    if (isMember.status === "left") {
      await ctx.reply("Subscribe to use bot! @evrika_museum");
    } else {
      await ctx.reply(`Your message: ${ctx.msg.text}`);
    }
  });
