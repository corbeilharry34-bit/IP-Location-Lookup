const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const MINI_APP_URL = process.env.MINI_APP_URL;

bot.start((ctx) => {
  ctx.reply(
    'Check your IP address and location, or look up any IP/domain — right here in Telegram.',
    {
      reply_markup: {
        inline_keyboard: [[
          { text: '🌍 Open IP Lookup', web_app: { url: https://serene-gelato-7538ee.netlify.app/} }
        ]]
      }
    }
  );
});

// Keep a command version too, in case someone messages after /start
bot.command('lookup', (ctx) => {
  ctx.reply('Tap below to open the tool:', {
    reply_markup: {
      inline_keyboard: [[
        { text: '🌍 Open IP Lookup', web_app: { url: https://serene-gelato-7538ee.netlify.app/ } }
      ]]
    }
  });
});

bot.launch();
console.log('IP Lookup bot is running.');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
