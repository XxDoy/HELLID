const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    cooldown: 20,
    run: async(client, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

        if (message.channel.id !== "824957970688245760") {
            return;
        }

    await message.member.roles.add("824958076825239582");

    let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.username}`)
            .setDescription('**Successfully Verified!!**\n\n IF HAVE PROBLEM DM <@637533978982612992> \n\n\`\`\`css\nEXAMPLE : h?verify\`\`\`')
            .setThumbnail(avatar)
            .setTimestamp()
            .setFooter(`${message.author.username}`)
        await message.channel.send(embed)
        message.delete()
    return;
    
    }
}