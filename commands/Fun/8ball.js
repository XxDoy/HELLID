const Discord = require("discord.js");

module.exports = {
    name: "8ball",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {

    if(!args[2]) return message.reply("Please Ask a Full Question!");
    let replies = ["Yes", "No", "I dont know", "Ask Again Later", "Maybe", "Yes But Not Now", "Maybe Later", "Yes But Not Today", "Dont Tell Anyone But Yes", "Bot Always True", "Maybe tomorrow", "tomorrow"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor("RANDOM")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);

    }
}
