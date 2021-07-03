const Discord = require("discord.js")
const ms = require("ms")
const db = require("quick.db")
const MessageEmbed = require('discord.js')


module.exports = {
    name: "remind",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let timeuser = args[0]
    let reason = args.slice(1).join("")
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });


    if(!timeuser) return message.reply(":x: You Should Enter Time | second(s) minute(m) hours(h) ")
    if(!reason) return message.reply(":x: You Should Enter Reason")

    db.set(`remind.${message.author.id}`,Date.now() + ms(timeuser))
    message.channel.send(`<@${user.user.id}>, I will Remind You **${reason}** in **${timeuser}**`)
    const interval = setInterval(function() {

        const embed = new MessageEmbed()
        .setDescription("**Bot Desu Reminder**")
        .addField("**Message**", [
         `${reason}`,

         `**Time**\n ${timeuser}`
        ])
        .setFooter(`Requested by : ${message.author.username}`, avatar)

        if(Date.now() > db.fetch(`remind.${message.author.id}`)){
            db.delete(`remind.${message.author.id}`)
            message.author.send(embed)
            .catch(e => console.log(e))
            clearInterval(interval)
        }
    },1000)
}
}