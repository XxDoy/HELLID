const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "dm",
    category: "moderation",
    run: async (client, message, args) => {


        let user;

        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        } else {
            user = message.author;
        }

        let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });


    let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

    let textChannel = message.mentions.channels.first()

    let tertuju = args[1]
    let angka = args[2]

    let msgs = args.slice(1).join(" ");

    if (!rMember) return message.reply("Couldn't find that person").then(m => m.delete({ timeout: 5000 }));


    const mgs = new MessageEmbed()
        .setDescription(`Requested By ${message.author.username}.......`)

    const msg1 = new MessageEmbed()
        .setDescription("**Loading**")

    const msg2 = new MessageEmbed()
        .setDescription("<a:at_loading:782088166470451241>")

    const msg3 = new MessageEmbed()
        .setDescription("<a:at_loading:782088166470451241>")

    const msg4 = new MessageEmbed()
        .setDescription("Done <a:at_verifblack:781014376978055188>")

    const msg5 = new MessageEmbed()
        .setDescription(`<a:at_verifblack:781014376978055188> | ***${rMember} Done, Check Your Dm!!***`)

    const embed = new MessageEmbed()
        .setTitle(`New Message`)
        .setThumbnail(avatar)
        .setColor("RED")
        .setDescription(`${msgs}`)
        .setTimestamp()
        .setFooter(`FROM : ${message.author.username}`)

    if (rMember) {
        var Msg1 = await message.channel.send(mgs); // sends message
        Msg1.edit(msg1)
        Msg1.edit(msg2)
        Msg1.edit(msg3)
        Msg1.edit(msg4)
        Msg1.edit(msg5).then(() => rMember.send(embed))
    }

}
}