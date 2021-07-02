const { MessageEmbed } = require('discord.js')
const prefix = "h?"
module.exports = {
    name: "embed",
    description: "Make a Custome GiveAway Embed",

    async run (client, message, args){

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t use that.');

    let announ = args.slice(1).join("  ");
    let textChannel = message.mentions.channels.first()
    message.delete()

    if (!announ) {
        let embed = new MessageEmbed()
            .setTitle(`${message.guild.name}`)
            .addField('Example', `**${prefix}announ #channels (message)**`)
            .setFooter(`Requested by ${message.author.username}`)
            .setColor('BLACK')
        return message.channel.send(embed)
    }

    if (textChannel) {
        const announcement = new MessageEmbed()
            .setTitle(`${message.guild.name}`)
            .setDescription(`${announ}`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor("RANDOM")
            .setTimestamp()
        textChannel.send(announcement).then((message) => {
            
            })
        message.channel.send("Sending Your Announcement to " + `<#${textChannel}>`)
       }
    }
}