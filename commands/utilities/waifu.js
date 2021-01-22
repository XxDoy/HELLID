const { MessageEmbed } = require('discord.js')
const kisses = [
    'https://cdn.discordapp.com/attachments/753213573831983138/781005397421981766/9k.png',
    'https://cdn.discordapp.com/attachments/753213573831983138/781005626196361226/2Q.png',
    'https://e7n9s5t9.stackpathcdn.com/esports/wp-content/uploads/2020/07/ezra-e1595333437395.png',
    'https://i.ytimg.com/vi/azQdyQDMXqU/maxresdefault.jpg',
    'https://c4.wallpaperflare.com/wallpaper/39/946/563/anime-date-a-live-anime-girls-yatogami-tohka-wallpaper-preview.jpg',
    'https://cdn.discordapp.com/attachments/753213573831983138/781006220785877022/d5a892eb278afb8fdfbd740926f5356c.png',
    'https://cdn.discordapp.com/attachments/753213573831983138/781006450662834176/C12F202185108FEC1632648D2F37F893AB8A9258.png',
    'https://cdn.discordapp.com/attachments/753213573831983138/781006676546682920/best-female-anime-characters-u2.png',
    'http://static2.minitokyo.net/view/10/13/260660.jpg',
    'https://cdn.myanimelist.net/images/characters/14/349249.jpg',
    'https://pm1.narvii.com/6035/5ad48c9055efb0b4030f7996b5112ac148ec3fa0_hq.jpg',
    'https://neko-love.xyz/v1/waifu/neko-love_waifu_33.jpg',
    'https://neko-love.xyz/v1/waifu/neko-love_waifu_8.jpg',
    'https://neko-love.xyz/v1/waifu/neko-love_waifu_22.jpg',
    'https://neko-love.xyz/v1/waifu/neko-love_waifu_50.png',
    'https://neko-love.xyz/v1/waifu/neko-love_waifu_31.jpg',
    'https://neko-love.xyz/v1/waifu/neko-love_waifu_17.jpg',
    'https://neko-love.xyz/v1/waifu/neko-love_waifu_47.jpg',
    'https://neko-love.xyz/v1/waifu/neko-love_waifu_13.jpg',
    'https://neko-love.xyz/v1/neko/neko-love_103.png',
    'https://neko-love.xyz/v1/neko/neko-love_287.jpg',
    'https://neko-love.xyz/v1/neko/neko-love_243.png',
    'https://neko-love.xyz/v1/neko/neko-love_243.png',
];

module.exports = {
    name: "waifu",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {

    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`This Waifu For You ${message.author.username}`)
        .setImage(kisses[Math.floor(Math.random() * kisses.length)])
    return message.channel.send(kiss)

}
}