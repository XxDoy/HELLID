const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "serverinfo",
    category: "info",
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('RANDOM')
            .setTitle(`${message.guild.name} server stats`)
            .addFields({
                name: "**Owner**",
                value: '<@637533978982612992>',
                inline: true
            }, {
                name: "**Members**",
                value: `There are ${message.guild.memberCount} users!`,
                inline: true
            }, {
                name: "**Members Online**",
                value: `There are ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online!`,
                inline: true
            }, {
                name: "**Total Bots**",
                value: `There are ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                inline: true
            }, {
                name: "**Creation Date**",
                value: message.guild.createdAt.toLocaleDateString("en-us"),
                inline: true
            }, {
                name: "**Roles Count**",
                value: `There are ${message.guild.roles.cache.size} roles in this server.`,
                inline: true,
            }, {
                name: `**Region**`,
                value: region,
                inline: true
            }, {
                name: '**Boosters**',
                value: message.guild.premiumSubscriptionCount >= 1 ? `There are ${message.guild.premiumSubscriptionCount} Boosters` : `There are no boosters`,
                inline: true
            }, {
                name: "**Emojis**",
                value: message.guild.emojis.cache.size >= 1 ? `There are ${message.guild.emojis.cache.size} emojis!` : 'There are no emojis',
                inline: true
            })
        await message.channel.send(embed)
    }
}