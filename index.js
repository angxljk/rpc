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
    .setState('a cumplir años')
    .setName('𝟚𝟘𝟘𝟟')
    .setDetails(`𝟏𝟒/𝟎𝟐/𝟐𝟎𝟐𝟒 [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1188998771359629422/1205972735407427634/71821fa420e0599842fd1d8fda97f889.jpg?ex=65da50a2&is=65c7dba2&hm=4c06e7400206d762a0ba2ea5314b9c0fa11d253e913cba053ad27c5a645c9931&=&format=webp&width=306&height=409') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝟏𝟒/𝟎𝟐/𝟐𝟎𝟐𝟒') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1188998771359629422/1205972735629721650/daa55441c0c85b74a2602aefb7b1da33.jpg?ex=65da50a2&is=65c7dba2&hm=26fa0c7feacc7748117f4927d3b6b3904e210dea1b66c358decdab5656c4510d&=&format=webp&width=230&height=408') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('17y') //Text when you hover the Small image
    .addButton('BlackParty♱', 'https://discord.gg/UKpgfW5J')
    .addButton('Legacys♱', 'https://discord.gg/HvsYb4kK');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Se viene mi cumple`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
