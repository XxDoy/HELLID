const prefix = require('../index');

module.exports = async (client, message) => {
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.tag,
        member: message.member,
        image: message.attachment.first() ? message.attachment.first().proxyURL : null
    })
}