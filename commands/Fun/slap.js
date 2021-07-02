const { MessageEmbed } = require('discord.js')
const kisses = [
    'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
    'https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif',
    'https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif',
    'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
    'https://media.giphy.com/media/k1uYB5LvlBZqU/giphy.gif',
    'https://tenor.com/bkLwu.gif',
    'https://tenor.com/5o9O.gif',
    'https://i.imgur.com/o2SJYUS.gif',
    'https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif',
    'https://media1.tenor.com/images/07b4516d50406b4a320269d514876170/tenor.gif',
    'https://media1.tenor.com/images/0f458cf28fc7ee25fa48d7d730fddf6d/tenor.gif'
];
// ini loh dari kemaren koe gapaham harus isi module.exports = {} baru ikutin kek yang sesudahnya. dari kemaren aku udah liatin njer itu, koenya gapeka :v, masa kalo ama hany bisa peka ama coding ga wkwkwkw
module.exports = {
    name: "slap",
    category: "utilites",
    aliases: ["tampar"],
    timeout: 10000,
    run: async(client, message, args) => {
    const user = message.mentions.users.first();

    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setImage(kisses[Math.floor(Math.random() * kisses.length)])
    .setDescription(`${message.author.username} **SLAP** <@${client.user.id}>`)

    if (!user) return message.channel.send('Hmm... i think you gotta provide a valid user to slap');

    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setImage(kisses[Math.floor(Math.random() * kisses.length)])
        .setDescription(`${message.author.username} **SLAP** ${user.username}!`)
    return message.channel.send(kiss)

}
}