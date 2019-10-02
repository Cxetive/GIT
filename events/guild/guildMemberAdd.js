const { prefix, roles, channels } = require("../../botconfig.json");
const { RichEmbed } = require("discord.js")
const { resolve } = require("../../function")
const fs = require("fs")
const talkedRecently = new Set();


module.exports = async (bot, member) => {
    const role = await resolve("role", roles.member, member.guild);
    await member.addRole(role);
     resolve("channel", channels.welcome_goodbye, member.guild).send(new RichEmbed().setColor('GREEN').setDescription(`${member.user.username} just joined!`));
    member.send(new RichEmbed().setColor('BLUE').setDescription(`Welcome to ${member.guild.name}`));

}