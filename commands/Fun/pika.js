const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "pikachu",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        const url = 'https://some-random-api.ml/img/pikachu';
        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setColor('#fdff00')
            .setTitle('PIKACHU')
            .setDescription('This is Pikachu For You')
            .setImage(data.link)
            .setFooter(`Requested by ${message.author.username}`);

        await message.channel.send(embed)
    }
}