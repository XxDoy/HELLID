module.exports = {
    name: "clear",
    aliases: ["prune", "purge"],
    cateogry: "moderation",
    description: "deleting message",
    run: async(client, message, args) => {
    const member = message.mentions.members.first();

    if (member) {
        const userMessages = (await message).filter(
            (m) => m.author.id === member.id
        );
        await message.channel.bulkDelete(userMessages);
        message.channel.send(`${member} messages has been cleared.`)
    } else {
        if (!args[0])
        return message.channel.send(
            "Please specify a number of message to delete ranging from 1 - 99"

        );
        if (isNaN(args[0]) > 99)
            return message.channel.send(
                "The Max amount of messages that i can delete is 99"
            );
            await message.channel
            .bulkDelete(parseInt(args[0]) + 1)
            .catch((err) => console.log(err));
            message.channel.send("Delete " + args[0] + " messages.")
    }
        setInterval

    },
};