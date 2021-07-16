const { Discord, MessageEmbed } = require("discord.js");
const msg = require("../moderation/msg");

module.exports = {
    name: "verify",
    category: "utilites",
    cooldown: 20,
    timeout: 5000,
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let rMember = message.guild.members.cache.get(args[0]);
        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });
        if (message.channel.id !== "824957970688245760") {
            return;
        }
await message.member.roles.add("824958076825239582");
const mgs = new MessageEmbed() .setDescription(`Requested By ${message.author.username}.......`)
const msg1 = new MessageEmbed() .setDescription("**Loading...**")
const msg2 = new MessageEmbed() .setDescription("**loading....**")
const msg3 = new MessageEmbed() .setDescription("**Loading.....**")
const msg4 = new MessageEmbed() .setDescription("**Done**")  
setTimeout(() => { const msg5 = new MessageEmbed() .setColor('RANDOM') .setTitle(`${message.author.username}`) .setDescription('**Successfully Verified!!**') .setThumbnail(avatar) .setTimestamp() .setFooter(`${message.author.username}`); }, 2000)
            var Msg1 = await message.channel.send(mgs); // sends message
            Msg1.edit(msg1) 
            Msg1.edit(msg2)
            Msg1.edit(msg3)
            Msg1.edit(msg4)
            setTimeout(() => { Msg1.edit(msg5).then(() => message.author.send(msg5)) }, 2000)
            message.delete 
return;
    
    }
}