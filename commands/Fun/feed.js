const { MessageEmbed } = require('discord.js')
const kisses = [
    'https://images-ext-1.discordapp.net/external/WsbU3k-bqQVS8OQt3q2S9xinUDLeB4jjOeXKYjensV0/https/cdn.nekos.life/feed/feed_010.gif',
    'https://images-ext-1.discordapp.net/external/EXCeATaurEsrH2AmgcuOqCFCDnvhgk5SKVw5qrJ6On4/https/cdn.nekos.life/feed/feed_015.gif',
    'https://images-ext-1.discordapp.net/external/thL2udnBUClTQQdL6js4Qb3THR8lb4A0hJG_jj3edz0/https/cdn.nekos.life/feed/feed_003.gif',
    'https://images-ext-1.discordapp.net/external/9-jk08uNYiGV457N84CrrSViVFn7Q04R-_Y-MV4WfJE/https/cdn.nekos.life/feed/feed_002.gif',
    'https://images-ext-2.discordapp.net/external/AVFiEzqVWWryI7nRAjUWNXqylnYhAykvuDwhVSCrHdI/https/cdn.nekos.life/feed/feed_007.gif',
    'https://images-ext-2.discordapp.net/external/tYHu5qu789hJU7it4TTFWawhLypQz6tL1q-T-5Ob1tw/https/cdn.nekos.life/feed/feed_006.gif',
    'https://images-ext-1.discordapp.net/external/zFb9-5aVV72nrgYGtgGqcvWazgVvzsxqxAVsmJ7P_JY/https/cdn.nekos.life/feed/feed_016.gif',
    'https://media1.tenor.com/images/6a69689b0b485b01b6395193f1490ceb/tenor.gif?itemid=15085210'
];

module.exports = {
    name: "feed",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
    const user = message.mentions.users.first();
    if (!user) return message.channel.send('Hmm... i think you gotta provide a valid user to feed');

    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setImage(kisses[Math.floor(Math.random() * kisses.length)])
        .setDescription(`${message.author.username} ***FEED*** ${user.username}!`)
    return message.channel.send(kiss)

}
}