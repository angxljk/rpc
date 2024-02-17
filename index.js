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
    .setState('a ver al barcelona')
    .setName('𝟚𝟘𝟘𝟟')
    .setDetails(`17y [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1188998771359629422/1208184673495425144/e9bcb2739609c302effaf0d8801da355.png?ex=65e25ca9&is=65cfe7a9&hm=a860b20895f0140f967d91c37827050a42d33340f514ab2fa7f7248f40ff4b30&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝟏𝟒/𝟎𝟐/𝟐𝟎𝟐𝟒') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1188998771359629422/1208186096362721300/8065c9e0231029e8fda40e7eaeb0d933.png?ex=65e25dfc&is=65cfe8fc&hm=e213209240db975d4fe64438d36646dfaa22423a43eea520ae469eef9d12d434&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('17y') //Text when you hover the Small image
    .addButton('BlackParty♱', 'https://discord.gg/kMzbwgDwcP')
    .addButton('Legacys♱', 'https://discord.gg/HvsYb4kK');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Puro pinche Barcelona 🔵🔴`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
