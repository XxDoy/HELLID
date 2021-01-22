const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    cooldown: 20,
    run: async(client, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

        if (message.channel.id !== "798808092426240021") {
            return;
        }

    await message.member.roles.add("752367087409823775");

    let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.username}`)
            .setDescription('<a:checklist:801435724636880936>  ||  **Successfully Verified!!**\n\n```EXAMPLE : h?verify```')
            .setTimestamp()
            .setFooter(`${message.author.username}`, avatar)
        await message.channel.send(embed)
        message.delete()
    return;
    
    }
}