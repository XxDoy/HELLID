const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "pic",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("PIC LIST")
    .setDescription("***Use h? (command)***\n\n➤`| waifu`\n➤`| neko`\n➤`| cat`\n➤`| dog`\n➤`| panda`\n➤`| fox`\n➤`| koala`")
    .setFooter(`Requested by ${message.author.username}`);
    
    await message.channel.send(embed)       

    },
}