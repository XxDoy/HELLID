const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "ping",
    category: "info",
    description: "Returns Latency and API Pings",
    run: async(client, message, args) => {

        const latency = msg.createdTimestamp - message.createdTimestamp;

        const embed = new MessageEmbed()
        .setTitle(`Ping`)
        .setDescription(`Bot Latency: \`${latency}ms\``)
        .setColor("RANDOM")
        .setTimestamp()
        
        return message.channel.send(embed)
    }
}