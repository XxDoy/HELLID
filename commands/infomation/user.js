const Discord = require('discord.js');
const Canvas = require("canvas");
const { compareText } = require('mathjs');

module.exports = {
    name: "user",
    category: "info",
    run: async(client, message, args) => {
       
        if(!args[0]) {
            var user = message.author;
        } else {
            var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
        }
        var member = message.guild.member(user)

        const canvas = Canvas.createCanvas(500, 200);
        const ctx = canvas.getContext("2d");

        const background = await Canvas.loadImage("https://wallpapercave.com/wp/wp5128415.jpg")
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = color.white;
        ctx.strokeRect(0, 0, canvas.width, canvas.height)

        ctx.fillstyle = colors.white;
        var size1 = 40;
        var size2 = 30;
        var size3 = 30;

        var name = client.users.cache.get(user.id).tag;
        do {
            ctx.font = `${size1 -= 5}px sans-serif`;
        } while (ctx.measureText(name).width > canvas.width - 225);

        var created = "Created: " + user.createdAt.tolocaleString();
        do {
            ctx.font = `${size2 -= 5}px sans-serif`;
        } while (ctx.measureText(created).width > canvas.width - 225);

        var joinde = "Joined: " + member.joinedAt.tolocaleString();
        do {
            ctx.font = `${size3 -= 5}px sans-serif`;
        } while (ctx.measureText(joined).width > canvas.width - 225);

        ctx.beginPath();
        ctx.arc(100, 100, 75, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        const avatar = await Canvas.loadImage(user.displayAvatarURL({format: "jpg"}));
        ctx.drawImage(avatar, 25, 25, 150, 150);

        const final = new Discord.MessageAttachment(canvas.toBuffer(), "useromfo.png");

        return message.channel.send(final);

        }
    }
