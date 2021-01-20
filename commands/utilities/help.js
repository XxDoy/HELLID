const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    cateogry: "utilites",
    run: async(client, message, args) => {
        if (message.deletable) message.delete();
        let help = args.join(" ");

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

                let embed = new MessageEmbed()
                .setTitle('Help Menu')
                .setAuthor(`${message.guild.name}`, avatar)
                .setThumbnail('https://media.discordapp.net/attachments/798569406149820426/798647266776055828/20210113_031900.jpg?width=1176&height=676')
                .addFields({
                    name: "Administrator ",
                    value: '`ban` | `kick` | `warn` | `mute` | `warnings` | `unban` | `deletewarns` | `unmute` | `clear` ',
                    inline: true
                }, {
                    name: "Infomation ",
                    value: '`serverinfo` | `botinfo` | `userinfo`',
                    inline: false
                }, {  
                    name: "Utilities ",
                    value: '`avatar` | `banner` | `say` | `calculate` | `remind` | `weather` | `pic` | `anime`',
                    inline: false
                }, {
                    name: "Fun ",
                    value: '`hug` | `kiss` | `slap` | `punch` | `cry` | `happy` | `angry` | `pat` | `feed` | `baka` | `pikachu` | `meme`',
                    inline: false
                }, {
                    name: "Economy ",
                    value: 'Soon!',
                    inline: false
                }, {    
                    name: "Our Bot's",
                    value: 
                    
                    
                    
                    '[`Invite Bots`](https://discord.com/api/oauth2/authorize?client_id=753883436984565800&permissions=2147483639&scope=bot)',
                    inline: true
                }, {    



                    name: "Our Server",
                    value: 
                    
                    
                    
                    '[`Join Server`](https://discord.gg/6bb2TAzx)',
                    inline: true
                }, {    
                    name: "Note ",
                    value: '\_\_\*\*\*- This Bot Now Support Online 24 Hours \*\*\*\_\_\_',
                    inline: false
                })
                .setFooter(`Requested by ${message.author.username}`, avatar)
                .setColor('RANDOM')
                .setImage("https://images-ext-2.discordapp.net/external/COl0mZHjPwdVXFoxenrUPy1jbX8atqOai7dIO42wMns/https/media.discordapp.net/attachments/709369821439197237/709374347340677231/lineee.gif")
                .setTimestamp()
            return message.channel.send(embed)
            msg.delete()
            
}
}



