const { MessageEmbed } = require('discord.js')
const kisses = [
    'https://media.giphy.com/media/gTLfgIRwAiWOc/giphy.gif',
    'https://media.giphy.com/media/l3NSaLw58Bx16/giphy.gif',
    'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
    'https://media.giphy.com/media/JFmIDQodMScJW/giphy.gif',
    'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
    'https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif',
    'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
    'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
    'https://media.giphy.com/media/AZSjToDmW19WU/giphy.gif',
    'https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif',
    'https://media.giphy.com/media/NhuUvzNdoHA0o6F5fP/giphy.gif',
    'https://images-ext-2.discordapp.net/external/fu5fwqE3EBaQYUVI9TE6QRMyATAm_R2CH-nwfyoHcio/https/cdn.weeb.sh/images/HJ5khTOP-.gif',
    'https://cdn.weeb.sh/images/SJ3dXCKtW.gif',
];
module.exports = {
    name: "kiss",
    category: "utilites",
    aliases: ["cium"],
    timeout: 10000,
    run: async(client, message, args) => {
    const user = message.mentions.users.first();

    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setImage(kisses[Math.floor(Math.random() * kisses.length)])
    .setDescription(`${message.author.username} ***kissed*** ${client.user.username}!`)

    if (!user) return message.channel.send(embed);

    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setImage(kisses[Math.floor(Math.random() * kisses.length)])
        .setDescription(`${message.author.username} ***kissed*** ${user.username}!`)
    return message.channel.send(kiss)

}
}