const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "pat",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        const url = 'https://some-random-api.ml/animu/pat';
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

        if (!args[0]) return message.channel.send('hmm... i think you gotta provide a valid user to pat');

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`hmm... i think you gotta provide a valid user to pat`)
        }

        const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} Pated ${message.mentions.users.first().username || message.mentions.members.first()}`, avatar)
            .setImage(data.link)

        await message.channel.send(embed)
    }
}