const { MessageEmbed } = require('discord.js')
const kisses = [
    'https://68.media.tumblr.com/e0789ada0a33bcc2c77843aff73bcd24/tumblr_ovtpvbDBAv1wqyomso1_540.gif',
    'https://i.kym-cdn.com/photos/images/newsfeed/001/856/131/1af.gif',
    'https://geekireland.com/wp-content/uploads/2016/01/tumblr_nmqo10FoDN1ri1zbno1_500.gif',
    'https://thumbs.gfycat.com/ImperfectFrightenedFoal-size_restricted.gif',
    'https://thumbs.gfycat.com/GrandAlertCaimanlizard-size_restricted.gif',
    'https://i.imgur.com/BhvWwuS.gif',
    'https://media4.giphy.com/media/AlsIdbTgxX0LC/giphy.gif',
    'https://media1.tenor.com/images/c22ccca9bccec97234cfa3f0147c32a9/tenor.gif?itemid=5234627',
    'https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446',
];
// ini loh dari kemaren koe gapaham harus isi module.exports = {} baru ikutin kek yang sesudahnya. dari kemaren aku udah liatin njer itu, koenya gapeka :v, masa kalo ama hany bisa peka ama coding ga wkwkwkw
module.exports = {
    name: "punch",
    category: "utilites",
    aliases: ["pukul"],
    timeout: 10000,
    run: async(client, message, args) => {
    const user = message.mentions.users.first();
    if (!user) return message.channel.send('Oh oh... you gotta provide a valid user to Punch :/');

    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setImage(kisses[Math.floor(Math.random() * kisses.length)])
        .setDescription(`${message.author.username} ***PUNCH*** ${user.username}!`)
    return message.channel.send(kiss)

}
}