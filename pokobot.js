const Discord = require('discord.js');
const bot = new Discord.Client();

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
    if(msg.startsWith("Gas".toLocaleLowerCase())) {
      message.channel.send('Mulai Gacha!');
  }

  let args = message.content.substring(PREFIX.length).split(" ");
  let statusArray = [
        "Jomblo Abadi",
        "Habis Diputusin",
        "Ditinggal Pas Lagi Sayang-sayangnya",
        "Fuckboy",
        "Lolicon",
        "WIBU Tingkat Dewa",
        "Playboy",
        "Sedang diintel Malaikat Maut"
  ];
  let status = statusArray[Math.floor(Math.random()*statusArray.length)];

  switch(args[0]){
    case 'ping':
    message.reply('Apa Cuy?');
    break;

    case 'status':
    message.reply(status);
    break;
          
    case 'admin':
    const EmbedAdmin = new Discord.MessageEmbed()
    .setColor('#fd8f2a')
    .setTitle('Daftar Admin Pokonime')
    .addFields(
        { name: 'Poko Chan | All', value: 'Zulki' },
        { name: 'Makhluk | FB & Discord', value: 'Juhend' },
        { name: 'San | Discord', value: 'Sandi' },
        { name: 'Pencari Waifu | Discord', value: 'Andrean' },
        { name: 'R. | Discord', value: 'Rafi' },
        );
          
    message.channel.send(EmbedAdmin);
    break;
}
});

bot.on('guildMemberAdd', member=> {
    const channel = member.guild.channels.find(channel => channel.name === "new-member");
    if(!channel) return;

    channel.send(`Selamat datang ${member}! Jangan lupa perkenalkan dirimu di #perkenalan-member`);
});

bot.login(process.env.TOKEN);
