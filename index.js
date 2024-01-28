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
    timeZone: 'Asia/Manila', //https://www.zeitverschiebung.net/en/ and find your city and enter here
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
    .setApplicationId('1087940913348743189')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/losfutbolitos') //Must be a youtube video link 
    .setState('😞😞')
    .setName('😞😞')
    .setDetails(`😞😞 [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1127012472025522287/1200926451000692746/d3e797ca094054a1ba0c1ff20ab00b52.jpg?ex=65c7f4ea&is=65b57fea&hm=ef7e046f0eae84d3a5d661d7f36f3a2f18b83e08a571f5ca438a91f3874e3abf&=&format=webp&width=261&height=409') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Crying') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1127012472025522287/1200929423722037300/448101099b44089b0169c5cd30fe0106.jpg?ex=65c7f7ae&is=65b582ae&hm=2f92f8b539983d15cee13abd89b69053e0409eb97e2e664fe1a6ba1da22b8d08&=&format=webp&width=184&height=409') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('y ahora¿?') //Text when you hover the Small image
    .addButton('BlackParty♱', 'https://discord.gg/UKpgfW5J')
    .addButton('Legacys♱', 'https://discord.gg/HvsYb4kK');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Llorando por Xavi`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
