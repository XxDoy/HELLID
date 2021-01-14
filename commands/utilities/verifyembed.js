const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "verifyembed",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
    
    const kiss = new MessageEmbed()
        .setColor('Black')
        .setTitle('How To Access All Channel?')
        .setDescription('***Type : b?verify***')
        .setFooter(`${client.user.username}`)
        .setTimestamp()
    return message.channel.send(kiss)

}
}