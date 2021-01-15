const { MessageEmbed } = require('discord.js')
const guild = client.guilds.cache.get("750375821369409576");
const serverIcon = message.guild.iconURL();

module.exports = {
    name: "msg",
    category: "moderation",
    run: async (client, message, args) => {

    let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

    let textChannel = message.mentions.channels.first()

    let tertuju = args[1]
    let angka = args[2]

    if (!rMember) return message.reply("Couldn't find that person").then(m => m.delete({ timeout: 5000 }));

    if (!textChannel) return message.channel.send(`Tag Channel Yang Bener Kasian Di DM Invalid :)`)

    if (!tertuju | !Number(angka)) {
        return message.channel.send(`
        'hrc!send (user) (informasi) (angka) 
        **EXAMPLE:**
        h?msg @thebluerose #partner 60'`).then(m => m.delete({ timeout: 5000 }));
    }


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
        .setTitle(`${message.guild.name}`)
        .setThumbnail(`${serverIcon}`)
        .setColor("RED")
        .addFields({
            name: `***<a:arrow:798850564824891432> Note***`,
            value: `<a:rArrow:799537985413971989> Terima Kasih ${rMember} Telah Melakukan Partnership Dengan Server Ini, Dimohon Untuk Saling Kerja Sama Kedepannya\n`,
            inline: false
        }, {
            name: "***<a:arrow:798850564824891432> For Information***",
            value: `<a:rArrow:799537985413971989> ${tertuju}\n`,
            inline: false
        }, {
            name: "***<a:arrow:798850564824891432> Total Partner***",
            value: `<a:rArrow:799537985413971989> ${angka}`,
            inline: false
        })
        .setTimestamp()
        .setFooter(`${member.user.avatarURL} Staff: ${message.author.username}`)

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