const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "bird",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        const url = 'https://some-random-api.ml/img/birb';
        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setColor('#FF6BA3')
            .setTitle('Bird')
            .setDescription('This is Bird For You')
            .setImage(data.link)
            .setFooter(`Requested by ${message.author.username}`);

        await message.channel.send(embed)
    }
}