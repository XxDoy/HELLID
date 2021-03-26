const cheerio = require('cheerio');
const request = require('request-promise');

module.exports = {
    name: "subs",
    run: async(client, message, args) => {
        let channelurl = 'https://www.youtube.com/channel/UCw70BDDNgkCxk0IS9PWlZYA'
        let response = await request(channelurl)
        let $ = cheerio.load(response)
        let subscriberCount = $('[class="yt-subscription-button-subscriber-count-branded-horizontal subscribed yt-uix-tooltip"]').attr('title');
        message.reply(`Ridho Revaldy Has ${subscriberCount} on YouTube!`)

    }
}