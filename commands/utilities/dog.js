const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "dog",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        const url = 'https://some-random-api.ml/img/dog';
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
            .setTitle('Dog')
            .setDescription('This is Dog For You')
            .setImage(data.link)
            .setFooter(`Requested by ${message.author.username}`);

        await message.channel.send(embed)
    }
}