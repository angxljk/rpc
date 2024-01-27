const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1088543137544278087')
    .setType('STREAMING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('Visca Barça')
    .setName('Visca Barça')
    .setDetails(`Visca Barça [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1087454871743103087/1195801248155316336/2e50f6f50929e17f888312ed69c38608.jpg?ex=65b54fb2&is=65a2dab2&hm=f1058125509a62bea8c6761055b0f0f81fa65d5c4273fceca879f0b375184e2b&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('GANA BARCELONA') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1087454871743103087/1195801247668781118/e4ca369d5b95ae6953a469b5726f967d.jpg?ex=65b54fb2&is=65a2dab2&hm=2e544434a97660d8ca4edacdd7d2eb9e4a9e421bae06c244f54965e377bc716c&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('GANA EL BARCELONA') //Text when you hover the Small image
    .addButton('Nitro & Robux', 'https://discord.gg/Ax4vWwk3Ta')
    .addButton('Black Party is SHIT', 'https://media.discordapp.net/attachments/1087452850411540603/1196140694272753756/image.png?ex=65b68bd4&is=65a416d4&hm=a9c62a242ef2ec0a9f414f82c581b84e8e0804cec4a82d622763e7bd115d40e4&=&format=webp&quality=lossless&width=335&height=116')
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `VIENDO EL CLASICO`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
