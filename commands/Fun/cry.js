const { MessageEmbed } = require('discord.js')
const kisses = [
    'https://images-ext-1.discordapp.net/external/MZTP00GR8EflHvfBzognD5j9bQeRvQ7Ne0kxCkQdIqU/%3Fitemid%3D10893043/https/media1.tenor.com/images/7ef999b077acd6ebef92afc34690097e/tenor.gif',
    'https://images-ext-2.discordapp.net/external/EHxF-Pa2pegAm-vu3wJO3PWp97FzgEe4oHAIBzKlN-M/%3Fitemid%3D5184314/https/media1.tenor.com/images/ce52606293142a2bd11cda1d3f0dc12c/tenor.gif',
    'https://images-ext-1.discordapp.net/external/WotLc27TLdraJlgy0Bsvr_uFz9KAvlFqxtsqEm6Hgsc/%3Fitemid%3D5580602/https/media1.tenor.com/images/ecf674c5e0ed2fdf0260ade4fad2146f/tenor.gif',
    'https://images-ext-1.discordapp.net/external/kPJwaSOVBZ6mc6nXBZGiX4KyzuoEn2SyH0_ljT4mNhI/%3Fitemid%3D8312712/https/media1.tenor.com/images/445c3de1f9a6a87694bcbb2739d35451/tenor.gif',
    'https://images-ext-1.discordapp.net/external/EG7Q85npPynfP5VSpz6M7-TyVI9V5viAGKJVDX8hGSE/%3Fitemid%3D18730371/https/media1.tenor.com/images/d120890dd8822fcd6e20349d38d8f1e6/tenor.gif',
    'https://images-ext-2.discordapp.net/external/qP2EzpN3wMisSKQc7DzZXZq_sbsWd7AorntvZdTtaWI/%3Fitemid%3D17609605/https/media1.tenor.com/images/b5abcf68a1e8f63ed66eabba8c06babc/tenor.gif',
    'https://i.pinimg.com/originals/3c/69/16/3c691659f01aba24f6a6deed24305989.gif',
    'https://media.tenor.com/images/ea72a5815cd40647d21caac9479c67c1/tenor.gif',
    'https://images-ext-2.discordapp.net/external/sZWeD2CWybA8FVoC1V1lsVJ_fJHeh8kE-fBfXSU0TLc/%3Fitemid%3D17822861/https/media1.tenor.com/images/c706a239ba712562755e42dca4c9aa40/tenor.gif'
];
module.exports = {
    name: "cry",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
    
    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.author.username} was **CRYING**`)
        .setImage(kisses[Math.floor(Math.random() * kisses.length)])
    return message.channel.send(kiss)

}
}