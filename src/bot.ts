import { Bot, Context, GrammyError, HttpError } from "grammy";
import { startCommand } from "./middleware/startCommand";
import { checkMembership } from "./middleware/checkMembership";
import { hydrateReply, parseMode } from "@grammyjs/parse-mode";
import type { ParseModeFlavor } from "@grammyjs/parse-mode";

import dotenv from "dotenv";
dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new Bot<ParseModeFlavor<Context>>(BOT_TOKEN);

bot.api.config.use(parseMode("HTML"));

bot.use(hydrateReply);
bot.use(startCommand);
bot.use(checkMembership);

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e.message);
  } else {
    console.error("Unknown error:", e);
  }
});

bot.start();
