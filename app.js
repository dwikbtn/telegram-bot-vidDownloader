import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome"));

//get the text
// bot.on("text", async (ctx) => {
//   ctx.reply("HI YOU JUST TYPE " + ctx.message.text);
// });

bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
