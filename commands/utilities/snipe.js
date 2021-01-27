const { Discord, MessageEmbed } = require('discord.js')

module.exports = {
    name: "snipe",
    category: "utilites",
    run: async(client, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

        const msg = client.snipes.cache.get(message.channel.id);
        if (!msg) return message.reply("no recently deleted messages!");

        const embed = new MessageEmbed()
        .setAuthor(msg.author, avatar)
        .setDescript(msg.content)
        .setFooter('Get Snipe')
        .setTimestamp();

        if (msg.image) embed.setImage(msg.image);

        message.channel.send(embed);
    }
}