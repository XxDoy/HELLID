const { MessageEmbed } = require('discord.js')
const prefix = require("../../index")
module.exports = {
    name: "cembed",
    description: "Make a Custome Embed",

    async run (client, message, args){

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t use that.');

    let announ = args.slice(1).join(" ");
    let textChannel = message.mentions.channels.first()
    message.delete()

    if (!announ) {
        let embed = new MessageEmbed()
            .setTitle('HELLFIRE')
            .setAuthor(`${message.guild.name}`)
            .addField('Example', `__***${prefix}announ (channels) (message)***__`)
            .setFooter(`Requested by ${message.author.username}`)
            .setColor('BLACK')
        return message.channel.send(embed)
    }

    if (textChannel) {
        const announcement = new MessageEmbed()
            .setDescription(`${announ}`)
            .setColor("RANDOM")
            .setTimestamp()
        textChannel.send(announcement).then((message) => {
            
            })
        message.channel.send("Sending Your Announcement to " + textChannel)
       }
    }
}