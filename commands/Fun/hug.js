const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "hug",
    category: "utilites",
    aliases: ["peluk"],
    timeout: 10000,
    run: async(client, message, args) => {
        const url = 'https://some-random-api.ml/animu/hug';
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setAuthor(`${message.author.username} hugs ${client.user.username}`)
        .setImage(data.link)

        if (!args[0]) return message.channel.send(embed);

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const hug = new MessageEmbed()
            .setAuthor(`${message.author.username} hugs ${message.mentions.users.first().username}`)
            .setImage(data.link)

        await message.channel.send(hug)
    }
}