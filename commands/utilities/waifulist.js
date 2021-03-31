const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "verifyembed",
    category: "utilites",
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('WAIFU LIST')
        .setColor('Random')
        .setDescription('➤`| Kurumi`\n➤`| Miku`\n➤`| Tohka `\n➤`| Yumeko `\n➤`| ZeroTwo `\n')
        .setFooter(`${message.author.username}`)

    }
    }