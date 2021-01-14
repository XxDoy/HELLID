const Discord = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    cooldown: 20,
    run: async(client, message, args) => {
        if (message.channel.id !== "798808092426240021") {
            return;
        }

    await message.member.roles.add("752367087409823775");
    await message.delete();
    return;
    }
}