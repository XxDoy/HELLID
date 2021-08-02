const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    cooldown: 20,
    timeout: 5000,
    run: async(client, message, args) => {
        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });
        if (message.channel.id === "824957970688245760") {
           
       
const embed = new MessageEmbed() 
.setColor('RANDOM') 
.setTitle(`${message.author.username}`) 
.setDescription('**<a:loading:869537753040322561> | Please Wait**') 
.setThumbnail(avatar) 
.setTimestamp() 
.setFooter(`${message.author.username}`);

let msg = await message.channel.send(embed)

setTimeout(function (){
    msg.edit(
      embed.setDescription(`Successfuly Verified`)
     )
    message.member.roles.add("824958076825239582")
    msg.delete({timeout : 3500})
}, 4000);
setTimeout(() => {
    

    message.author.send(embed) 
    msg.edit(
        embed.setDescription(`You Has Successfuly Verified`)
        )
    }, 3700);
    message.delete({timeout : 3495})
    
  

 } else {
  return;
      }
    }
}
