const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    cooldown: 20,
    run: async(client, message, args) => {
        let user;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    } else {
        user = message.author;
    }

        let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });

        if (message.channel.id !== "798808092426240021") {
            return;
        }

    await message.member.roles.add("752367087409823775");

    let embed = new MessageEmbed()
            .setColor('BLACK')
            .setTitle(`${message.author.username}`)
            .setDescription('Verified <a:checklist:801435724636880936>')
            .addFields('```EXAMPLE : h?verify```')
            .setImage(avatar)
            .setTimestamp()
        await message.channel.send(embed)
        msg.delete()
    return;
    
    }
}