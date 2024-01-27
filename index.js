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
    .setURL('https://www.twitch.tv/tsireyaaa') //Must be a youtube video link 
    .setState('𝔠𝔞𝔯𝔫𝔞𝔤𝔢')
    .setName('star')
    .setDetails(`༺♰༻ [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1182401896066060299/1191036470039937114/jotchua-christmas.gif?ex=65bfa9a6&is=65ad34a6&hm=eabcc7161eabbd3bebeaefbfef03fcbe79742150ae3d9cba340e891f8783e222&=&width=265&height=306') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('lover') //Text when you hover the Large image
    .setAssetsSmallImage('mp:attachments/1078599543693787266/1184442280111779880/1129575327291682866.gif?ex=658bfcd5&is=657987d5&hm=d323fb67bcd0e005580a6bab&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('lost') //Text when you hover the Small image
    .addButton('♱', 'https://discord.gg/UKpgfW5J')
    .addButton('glory', 'https://open.spotify.com/track/1NZs6n6hl8UuMaX0UC0YTz?si=5fcc5244c9ae4d8e');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `murder`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
