const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('deleteAll', async (ctx) => {
    let res = await ctx.reply('deleting');
    for(let i = res.message_id; i >= 0; i--) {
        try {
            let res = await ctx.telegram.deleteMessage(ctx.chat.id, i);
        } catch (e) {
            console.error(e);
        }
    }
});

bot.launch();
