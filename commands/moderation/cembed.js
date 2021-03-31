const { MessageEmbed } = require('discord.js')
const prefix = "h?"
module.exports = {
    name: "announ",
    description: "Make a Custome Embed",

    async run (client, message, args){

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t use that.');

 
    let textChannel = message.mentions.channels.first()
    message.delete()

    if (!announ) {
        let embed = new MessageEmbed()
            .setAuthor(`${message.guild.name}`)
            .addField('Example', `__***${prefix}notif (channels) (message)***__`)
        return message.channel.send(embed)
    }

    if (textChannel) {
    
            msg = args.join(" ")
            
        message.channel.send("Sending Your Announcement to " + `<#${textChannel}>`)
       }
    }
}