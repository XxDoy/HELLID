const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "card",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        if (message.deletable) message.delete();
        
        const url = 'https://cdn.discordapp.com/attachments/778787172563812353/778872799544606720/name.png' ;
        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setColor('#B12600')
            .setTitle(`[Mitsuki Nase Tier: 6](https://google.com)`)
            .setDescription('To claim, use: `claim [captcha code]`')
            .setDescription(`[See your collected cards here.](https://animesoul.com/)`)
            .setImage('https://media.discordapp.net/attachments/770126915167322152/777659544926945310/name.png?width=209&height=300')

        await message.channel.send(embed)
    }
}