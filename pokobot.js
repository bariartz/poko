const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'process.env.BOT_TOKEN';

const PREFIX = 'p-';

bot.on('ready', () =>{
    console.log('Poko sedang Online!');
});

bot.on('message', message=>{

    if(message.author.id === bot.user.id) return;

    msg = message.content.toLowerCase();
    if(msg.startsWith("Ampaz".toLocaleLowerCase())) {
      message.channel.send('HAHAHA Ampaz, Semangat terus bro!');
  }

  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
    case 'ping':
    message.reply('Apa Cuy?');
    break;

    case 'status':
    message.reply('Jomblo terus');
    break;
}
});

bot.on('guildMemberAdd', member=> {
    const channel = member.guild.channels.find(channel => channel.name === "new-member");
    if(!channel) return;

    channel.send(`Selamat datang ${member}! Jangan lupa perkenalkan dirimu di #perkenalan-member`);
});

bot.login(token);
