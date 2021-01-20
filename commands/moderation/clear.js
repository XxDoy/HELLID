module.exports = {
    name: "clear",
    aliases: ["prune", "purge"],
    cateogry: "moderation",
    description: "deleting message",
    usage: "?clear",
    run: async(bot, message, args) => {

        if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send('You can\'t use that.');

        if(!args[0]) return message.reply('please provide an amount of messages for me to delete')

        if(isNaN(args[0])) return message.reply('Please eneter a number')

        if (args[0] > 101) return message.reply(`you cannot clear more than 100 messages at once`)

        if (args[0] < 1) return message.reply(`you need to delete at least one message`)

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        });
    }
}