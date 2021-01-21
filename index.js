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
const firstMessage = require('./firstmessage')

const client = new Client({
    disableEveryone: true
})

client.editedMessage = new Collection();
client.deletedMessages = new Collection();
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

    let statuses = [
        `h?help | ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} HELLFIRE Members`
    ];

    setInterval(function() {

        let status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setPresence({ activity: { name: status }, status: 'dnd', type: 'WATCHING' });
    }, 1000);


    // Canvas Welcome
    client.on('guildMemberAdd', async(member) => { // this event gets triggered when a new member joins the server!

        const Channels = member.guild.channels.cache.get('798631082182180874') //insert channel id that you want to send to
        let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg", blur:  true})
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
            
            const attachment = new Discord.MessageAttachment(
                data,
                "welcome-image.png"
            );
            
            const embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setAuthor(member.user.username, member.user.avatarURL())
                        .setImage("attachment://welcome-image.png")
                        .attachFiles(attachment)
                        .setTimestamp()
                        .setFooter(`Kamu Member Ke ${member.guild.memberCount}`)

                        /*let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
                        const attachment = new MessageAttachment(data,"welcome-image.png"
                        );
                    
                        Channels.send(`Welcome to the server, <@${member.user.id}>!`,`${member.guild.memberCount}`,attachment
                        );*/

                        Channels.send(embed)

            })

        client.on('guildMemberRemove', async(member) =>{

            const Channels = member.guild.channels.cache.get("798631082182180874")
            
            const canvas = Canvas.createCanvas(900, 250);
            const ctx = canvas.getContext('2d');
            
                const background = await Canvas.loadImage('./background.jpg')
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            
                    ctx.strokeStyle = '#74037b';
                    ctx.strokeRect(0, 0, canvas.width, canvas.height);
            
                    ctx.beginPath()
                    ctx.arc(125, 125, 100, 0, Math.PI * 2, true)
                    ctx.closePath()
                    ctx.clip()

                    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
                    ctx.drawImage(avatar, 25, 25, 200, 200);
            
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
            
            const embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setAuthor(member.user.username, member.user.avatarURL())
                        .setImage("attachment://welcome-image.png")
                        .attachFiles(attachment)
                        .setTimestamp()
                        .setFooter(`Kamu Member Ke ${member.guild.memberCount}`)
            
            Channels.send(`<@${member.user.id}> WOKEH KEMBALI LAGI`,embed)
            })
            
    client.on('message', message => {
        if (message.author.bot) return;
        if (usersMap.has(message.author.id)) {
            const userData = usersMap.get(message.author.id);
            const { lastMessage, timer } = userData;
            const difference = message.createdTimestamp - lastMessage.createdTimestamp;
            let msgCount = userData.msgCount;
            console.log(difference);
            if (difference > DIFF) {
                clearTimeout(timer);
                console.log('Cleared timeout');
                userData.msgCount = 1;
                userData.lastMessage = message;
                userData.timer = setTimeout(() => {
                    usersMap.delete(message.author.id);
                    console.log('Removed from RESET.');
                }, TIME);
                usersMap.set(message.author.id, userData);
            } else {
                ++msgCount;
                if (parseInt(msgCount) === LIMIT) {
                    const role = message.guild.roles.cache.get('752350200550522883');
                    message.member.roles.add(role);
                    message.reply('kamu Telah Dibunuh.');
                    setTimeout(() => {
                        message.member.roles.remove(role);
                        message.reply('Kamu Telah Dibangkitkan.');
                    }, TIME);
                } else {
                    userData.msgCount = msgCount;
                    usersMap.set(message.author.id, userData);
                }
            }
        } else {
            let fn = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.');
            }, TIME);
            usersMap.set(message.author.id, {
                msgCount: 1,
                lastMessage: message,
                timer: fn
            });
        }
    });

    
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

            //afk
            client.afk = new Map();
            client.on("message", message => {
                if(db.has(message.author.id + message.guild.id  + '.afk')) {
                    message.member.setNickname(`${message.author.username}`).catch((err) => {
                        return
                    })
                    message.channel.send("You have been removed from the AFK")
                    db.delete(message.author.id +  message.guild.id + '.afk')
                    db.delete(message.author.id + message.guild.id + '.message')
                }
            })
            client.on('message', message => {
                if(message.author.bot) return
                message.mentions.users.forEach(user => {
                    if(db.has(user.id + message.guild.id +'.afk')) message.channel.send(`**${user.tag}** is AFK`)
                })
            })
             
            client.on('message', message => {
                if(!message.content.startsWith(prefix)) return;
                let args = message.content.substring(prefix.length).split(' ')
                if(message.author.bot) return
                if(message.channel.type === 'dm') return
                switch(args[0]){
                    case 'afk':
                        message.member.setNickname(`[AFK] ${message.author.username}`).catch((err) => {
                            return
                        })
             
                        db.set(message.author.id + message.guild.id +'.afk', 'true')
                        db.set(message.author.id + message.guild.id + '.messageafk', message.content.split(' ').slice(1))
                        message.channel.send(`You have been set to **AFK**`)
                        break;
                }
            })
            

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

        client.afk = new Map();
        client.on("message", async message => {
            if (message.author.bot) return;
            if (message.channel.type === "dm") return;

            let prefix = config.prefix;
            let messageArray = message.content.split(" ");
            let command = messageArray[0].toLowerCase();
            let args = messageArray.slice(1);

            // return message.channel.send(`**${user_tag}** is currently afk. Reason: ${key.reason}`);
            // return message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000));

            if (message.content.includes(message.mentions.members.first())) {
                let mentioned = client.afk.get(message.mentions.users.first().id);
                if (mentioned) message.channel.send(`**${mentioned.usertag}** is currently afk. Reason: ${mentioned.reason}`);
            }
            let afkcheck = client.afk.get(message.author.id);
            if (afkcheck) return [client.afk.delete(message.author.id), message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000))];

            if (!command.startsWith(prefix)) return;

            let cmd = bot.commands.get(command.slice(prefix.length));
            if (cmd) cmd.run(bot, message, args);
   
                    client.on("message", async message => {
                        if (message.content === `${prefix}join`) {
                            client.emit("guildMemberAdd", message.member);
                            message.delete()
                        }
                    
                    });
         })
    })




client.login(process.env.TOKEN);