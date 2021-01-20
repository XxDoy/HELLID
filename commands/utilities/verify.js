const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    cooldown: 20,
    run: async(client, message, args) => {
        if (message.channel.id !== "798808092426240021") {
            return;
        }

    await message.member.roles.add("752367087409823775");

    let embed = new MessageEmbed()
            .setColor('BLACK')
            .setTitle(`${message.author.username}`)
            .setDescription('**Successfully Verified!!** <a:checklist:801435724636880936>\n\n```EXAMPLE : h?verify```')
            .setTimestamp()
        await message.channel.send(embed)
        message.delete()
    return;
    
    }
}