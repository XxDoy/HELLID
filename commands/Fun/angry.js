const { MessageEmbed } = require('discord.js')
const kisses = [
    'https://media.tenor.com/images/ef795689617a8c97379b297fd7557235/tenor.gif',
    'https://i.pinimg.com/originals/b3/96/e0/b396e0fd1ced8ad36545a9094c5218ad.gif',
    'https://giffiles.alphacoders.com/928/92813.gif',
    'https://i.pinimg.com/originals/01/48/a2/0148a2c426e64d9ce20db34779832197.gif',
    'https://i.imgur.com/2ThlbUH.gif',
    'https://data.whicdn.com/images/48792218/original.gif',
    'https://64.media.tumblr.com/79750af96443416cd42bcbb194014924/tumblr_osfxtrjrK51wswm8vo1_540.gif',
    'https://i.makeagif.com/media/7-13-2018/5bypmu.gif',
    'https://data.whicdn.com/images/62976593/original.gif',
    'https://media1.tenor.com/images/40383ad4bf828866d7bd67f5fa15d56d/tenor.gif?itemid=5181787',
    'https://i.imgur.com/2ThlbUH.gif',
    'https://pa1.narvii.com/5874/5df90866cafe39667c0a1ff2db98504c815ff2f4_hq.gif',
    'https://i.gifer.com/g2Gn.gif',
    'https://cdn78.picsart.com/198005884000202.gif?to=min&r=640',
    'https://media1.tenor.com/images/88b7a081779657865acf45fd1a7beac8/tenor.gif?itemid=14116418',
    'https://i.kym-cdn.com/photos/images/newsfeed/000/677/530/309.gif',
    'https://i.gifer.com/3lgz.gif',
    'https://cdn57.picsart.com/179942338000202.gif?to=min&r=640',

]

module.exports = {
    name: "angry",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {

    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.author.username} was **ANGRY**`)
        .setImage(kisses[Math.floor(Math.random() * kisses.length)])
    return message.channel.send(kiss)

}
}