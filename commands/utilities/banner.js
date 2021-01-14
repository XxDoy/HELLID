const figlet = require('util').promisify(require('figlet'));

module.exports = {
    name: 'banner',
    aliases: ['banners'],
    description: 'Displays words in banners ',
    category: 'utilities',
    usage: '<input>',
    timeout: 10000,
    run: async(client, msg, ...banner) => {
        if (msg.deletable) msg.delete();
        return msg.channel.send(await figlet(banner), { code: true });
    }
}