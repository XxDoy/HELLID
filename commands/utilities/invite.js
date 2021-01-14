const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "invite",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
    
    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://media.discordapp.net/attachments/798569406149820426/798647266776055828/20210113_031900.jpg?width=1176&height=676')
        .setDescription(`Want to add ${client.user.username} to your Server?\n\n\n[Click Here](https://discord.com/api/oauth2/authorize?client_id=775207976318664714&permissions=8&scope=bot)`)
    return message.channel.send(kiss)

}
}