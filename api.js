const { token, version, prefix } = require("./botconfig.json");
const { Client, Collection, RichEmbed} = require("discord.js");
const bot = new Client();
// Listener Event: Bot Launched: Check if member is added

["commands", "aliases"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));



bot.login(token);


