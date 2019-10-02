
module.exports = {
    resolve: (type, value, guild) => {
        switch(type.toLowerCase()) {
            case 'guildmember':
                return guild.members.find(m => m.displayName === value || m.user.tag === value || m.user.username === value || m.id === value.replace(/^<@!?(\d+)>$/, '$1'));
            case 'user':
                return bot.users.find(u => u.tag === value || u.username === value || u.id === value.replace(/^<@!?(\d+)>$/, '$1'));
            case 'channel':
                return guild.channels.find(c => c.name === value || c.id === value.replace(/^<#(\d+)>$/, '$1'));
            case 'role':
                return guild.roles.find(c => c.name === value || c.id === value.replace(/^<&(\d+)>$/, '$1'));
            default:
                return false;
        }
    },
};