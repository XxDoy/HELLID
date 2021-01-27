const { Discord, MessageEmbed } = require('discord.js')

module.exports = {
    name: "snipe",
    category: "utilites",
    cooldown: 20,
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

        const msg = client.snipes.get(message.channel.id)

        const embed = new MessageEmbed()
        .setAuthor(msg,author, avatar)
        .setDescript(msg.content)
        .setFooter('Get Snipe')
        .setTimestamp();
        message.channel.send(embed)
    }
}