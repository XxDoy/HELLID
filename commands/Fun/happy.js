const { MessageEmbed } = require('discord.js')
const kisses = [
   'https://media.tenor.com/images/e5396fee46afed5947595514348670c9/tenor.gif',
   'https://media.tenor.com/images/d8cfad6474c16477362df878df5aba70/tenor.gif',
   'https://media.tenor.com/images/5fc2ce81bf7e62d9fe181084d81c8962/tenor.gif',
   'https://media.tenor.com/images/b9b6aaa81fe6db4525c23030328edbe9/tenor.gif',
   'https://media.tenor.com/images/eab4aab7f7cd402ba01ccdac253b23d6/tenor.gif',
   'https://media.tenor.com/images/6ae2916e74ec42f679f42a5a7e4a746c/tenor.gif',
   'https://media.tenor.com/images/4e4aca6054a37384ac0beb7f3937cb01/tenor.gif',
   'https://media.tenor.com/images/820efc1fd6f9a510071120e07d69b12e/tenor.gif',
   'https://media.tenor.com/images/1b6176947542522ca1630ea085f48276/tenor.gif',
   'https://media.tenor.com/images/b9c57222976528260bcf87f322fad474/tenor.gif',
   'https://media.tenor.com/images/c61421e5027efc011efdfbf9b09f7ee8/tenor.gif',
   'https://media.tenor.com/images/646a852b6b6622b3574fed7eecec67a5/tenor.gif',
   'https://media.tenor.com/images/8f1ca306de1a211194df0a040e6a987c/tenor.gif',
   'https://media.tenor.com/images/0bbfac41bb98e7df703bbf33c934ab5e/tenor.gif',
   'https://media.tenor.com/images/4959e9b65c25eaed484c38b921cd0734/tenor.gif',
   'https://media.tenor.com/images/35d48e3bbc677a45b4693942159031c6/tenor.gif',
   'https://media.tenor.com/images/1ea173ff6d29fb6391aace94d1e9de2c/tenor.gif',
   'https://media.tenor.com/images/5c6afa2423969c41c47d57d14c7d3f26/tenor.gif',
   'https://media.tenor.com/images/69440ebc1aed2cf97a13566652d64aa8/tenor.gif',
   'https://media.tenor.com/images/997fb671fb275465ed59eb77e91310dc/tenor.gif',
   'https://media1.tenor.com/images/6ba57b38dc520300daeeda7ca9431527/tenor.gif?itemid=10277703'
]

module.exports = {
    name: "happy",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {

    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.author.username} was **HAPPY**`)
        .setImage(kisses[Math.floor(Math.random() * kisses.length)])
    return message.channel.send(kiss)

}
}