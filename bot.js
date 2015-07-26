var TelegramBot = require('node-telegram-bot-api');
var token = '90538524:AAFhmMhNTtFj1bp4d8CUUtgFIsr_TGdilUs';
var bot = new TelegramBot(token, {polling: true});
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Smart Near-Infrared Control (Control Cercano Infrarrojo Inteligente)');
});