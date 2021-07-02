const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    cooldown: 20,
    run: async(client, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let rMember = message.guild.members.cache.get(args[0]);

        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

        if (message.channel.id !== "824957970688245760") {
            return;
        }

    await message.member.roles.add("824958076825239582");

    let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.username}`)
            .setDescription('**Successfully Verified!!**')
            .setThumbnail(avatar)
            .setTimestamp()
            .setFooter(`${message.author.username}`);
            client.users.cache.get('id').send(embed)
        message.delete()
    return;
    
    }
}