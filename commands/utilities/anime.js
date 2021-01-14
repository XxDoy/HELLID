const { MessageEmbed } = require("discord.js")
const { get } = require("request-promise-native")

module.exports = {
    name: "anime",
    run: async (client, message, args) => {
        if(!args.length) return message.channel.send("Please Provide An Anime Name!!")

        let option = {
            url: `https://kitsu.io/api/edge/anime?filter[text]-${args.join(" ")}`,
            method : 'GET',
            headers: {
                'Content-type': "application/vnd.api+json",
                'Accept': "application/vnd.api+json",
            },
            json: true
        }
        message.channel.send("Ferching Your Anime Info, Please Wait. . .").then(msg => {

        get(option).then(mat => {

            const Embed = new MessageEmbed()
            .setTitle(mat.data[0].attributes.titles.en_jp)
            .setURL(`https://kitsu.io/${mat.data[0].id}`)
            .setTimestamp()
            .setThumbnail(mat.data[0].attributes.posterImage.original)
            .setDescription(mat.data[0].attributes.synopsis)
            .setColor("RANDOM")
            .addField("Type", mat.data[0].attributes.showType, true)
            .addField("Published", `${mat.data[0].attributes.startDate} **TO** ${mat.data[0].attributes.endDate ? mat.data[0].attributes.endDate: "N/A"}`)
            .addField("Status", mat.data[0].attributes.status, true)
            .addField("Next Release", mat.data[0].attributes.nextRelease ? mat.data[0].attributes.nextRelease: "N/A", true)
            .addField("Episode Count", mat.data[0].attributes.episodeCount ? mat.data[0].attributes.episodeCount: "N/A", true)
            .addField("Duration", mat.data[0].attributes.episodeLength? mat.data[0].attributes.episodeLength: "N/A", true)
            .addField("RANK", mat.data[0].attributes.ratingRank, true)
            .addField("Average Rating", mat.data[0].attributes.averageRating, true)
            message.channel.send(Embed)
            msg.delete()
        })
    })
    }
}
