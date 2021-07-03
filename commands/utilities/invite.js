const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "invite",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`Want to add ${client.user.username} to your Server?\n\n\n[Click Here](https://discord.com/api/oauth2/authorize?client_id=775207976318664714&permissions=8&scope=bot)`)
    return message.channel.send(embed)

}
}