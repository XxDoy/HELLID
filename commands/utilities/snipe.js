const { MessageEmbed } = require('discord.js')
const db = require("quick.db");

module.exports = {
    name: "snipe",
    category: "utilites",
    run: async(client, message, args) => {

        message.delete(5000)
        const msg = client.snipes.get(message.channel.id)
        if (!msg) return message.channel.send("no recently deleted messages!")
        const embed = new MessageEmbed()
            .setAuthor(msg.author)
            .setColor("Random")
            .setDescription(msg.content)
            .setTimestamp()
        if (msg.image) embed.setImage(msg.image)

        message.channel.send(embed)
    }
}