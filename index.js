const { Client, MessageEmbed, MessageAttachment, Collection } = require('discord.js');
const { discord, Discord } = require('discord.js');
const { config } = require('dotenv');
const Canvas = require('canvas');
const { resolve, join } = require('path')
const { get } = require('snekfetch')
const fs = require('fs')
const db = require('quick.db')
const superagent = require('superagent')
const { CanvasSenpai } = require("canvas-senpai");
const { c } = require('tar');
const { timeStamp } = require('console');
const canva = new CanvasSenpai();
const prefix = "h?"
const usersMap = new Map();
const LIMIT = 5;
const TIME = 7000;
const DIFF = 3000;
const currentDate = new Date();
const request = require('request-promise');
const cheerio = require('cheerio');
const firstMessage = require('./firstmessage')
const memberCounter = require('./memcounter')

const client = new Client({
    disableEveryone: true
})

client.messageDelete = new Collection();
client.commands = new Collection();
client.aliases = new Collection();
client.config1 = config;

config({
    path: __dirname + "/.env"
});

["commands.js"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Bot Ready Up \n1 \n2 \n3 \nReady To Duty ${client.user.username} !`);

    const memcount = `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`

    let statuses = [
        `h?help | ${memcount} Member Online`,
        `h?help | Follow @zz_rdh on Instagram`
    ];

    setInterval(function() {

        let status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setPresence({ activity: { name: status }, status: 'dnd', type: 'WATCHING' });
    }, 1000);


    // Canvas Welcome
    client.on('guildMemberAdd', async(member) => { // this event gets triggered when a new member joins the server!

        const Channels = member.guild.channels.cache.get('824923451483095060') //insert channel id that you want to send to
        let data = await canva.welcome(member, { link: 'https://wallpapercave.com/wp/wp5128415.jpg', blur:  true})
        const canvas = Canvas.createCanvas(900, 250);
        const ctx = canvas.getContext('2d');
            const background = await Canvas.loadImage('./background.jpg')
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);      
            ctx.strokeStyle = '#74037b';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
            ctx.font = '30px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${member.guild.memberCount}`, canvas.width / 2.5, canvas.height / 3.1);
            ctx.font = '40px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(member.displayName, canvas.width / 2.5, canvas.height / 1.8);          
            ctx.beginPath()
            ctx.arc(125, 125, 100, 0, Math.PI * 2, true)
            ctx.closePath()
            ctx.clip()
            const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
            ctx.drawImage(avatar, 25, 25, 200, 200);         
            const attachment = new MessageAttachment(
                data,
                "welcome-image.png"
            ); 
            const embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setAuthor(member.user.username, member.user.avatarURL())
                        .setDescription(`**${member.guild.name}** ━━━━━━━━━━━|\n\nHello <@${member.user.id}>\n\nWelcome To This Server\n━━━━━━━━━━━━━━━━━━━\n\nDon\'t Forget To Read :\n<#824923025324769280>\n━━━━━━━━━━━━━━━━━━━\n\nDon\'t Forget To Take Roles :\n<#824923138021130260>\n━━━━━━━━━━━━━━━━━━━\n\n Don\'t Forget To Intro In :\n<#824923086234976257>\n━━━━━━━━━━━━━━━━━━━`)
                        .setImage("attachment://welcome-image.png")
                        .attachFiles(attachment)
                        .setTimestamp()
                        .setFooter(`Kamu Member Ke ${member.guild.memberCount}`)

                        Channels.send(embed)

            })

        // client.on('guildMemberRemove', async(member) =>{

        //     const Channels = member.guild.channels.cache.get("798631082182180874")
            
        //     const canvas = Canvas.createCanvas(900, 250);
        //     const ctx = canvas.getContext('2d');
            
        //         const background = await Canvas.loadImage('./background.jpg')
        //         ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            
        //             ctx.strokeStyle = '#74037b';
        //             ctx.strokeRect(0, 0, canvas.width, canvas.height);
            
        //             ctx.beginPath()
        //             ctx.arc(125, 125, 100, 0, Math.PI * 2, true)
        //             ctx.closePath()
        //             ctx.clip()

        //             const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
        //             ctx.drawImage(avatar, 25, 25, 200, 200);
            
        //     const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
            
        //     const embed = new MessageEmbed()
        //                 .setColor("RANDOM")
        //                 .setAuthor(member.user., member.user.avatarURL())
        //                 .setImage("attachment://welcome-image.png")
        //                 .attachFiles(attachment)
        //                 .setTimestamp()
        //                 .setFooter(`Kamu Member Ke ${member.guild.memberCount}`)
            
        //     Channels.send(`<@${member.user.id}> WOKEH KEMBALI LAGI`,embed)
        //     })
    
            client.on('message', async message =>{
              if(message.content === `${prefix}testmasuk`){
              client.emit('guildMemberAdd', message.member)
              message.delete()
              }
            });
            
            
            client.on('message', async message =>{
              if(message.content === `${prefix}testkeluar`){
              client.emit('guildMemberRemove', message.member)
              message.delete()
              }
            })
            });
    

// jangan pernah naruh command atau apapun dibawah ini karena script ini menentukan antar file jadi wajib diatas biar berfungsi

    client.on("message", async message => {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;
        if (!message.member) message.member = await message.guild.fetchMember(message);

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();

        if (cmd.length === 0) return;

        let command = client.commands.get(cmd);
        if (!command) command = client.commands.get(client.aliases.get(cmd));

        if (command)
            command.run(client, message, args);

    })




client.login(process.env.TOKEN);