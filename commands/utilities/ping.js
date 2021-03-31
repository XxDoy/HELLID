const MessageEmbed = require('discord.js')

module.exports = {
    name: "ping",
    category: "info",
    description: "Returns Latency and API Pings",
    run: async(client, message, args) => {
        const msg = await message.channel.send('Pinging...');

        const latency = msg.createdTimestamp - message.createdTimestamp;
        const choices = ['Is this really my ping?', 'Is this okay? I can\'t look!', 'I hope it isn\'t bad!'];
        const response = choices[Math.floor(Math.random() * choices.length)];

        const embed = new MessageEmbed
        .setTitle(`${message.author.username} Ping`)
        .setDescription(`${response} - Bot Latency: \`${latency}ms\``)
        .setColor("RANDOM")
        .setTimestamp()
        
        msg.edit(embed)
    }
}