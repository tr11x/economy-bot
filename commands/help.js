module.exports = {
    name:"help",
    async run (client, message, args, db) {
        const Discord = require("discord.js");
        const embed = new Discord.MessageEmbed()
        .setAuthor("Help command")
        .addField("UTILITY", "`!help, !shop`")
        .setColor("RED")
        .setTimestamp()
        .addField(`ECONOMY`, "`!balance, !work, !daily, !beg, !buy, !deposit, !withdraw, !addmoney`")


        message.channel.send(embed)
    }
}



//Made by RamJamDee_YT#0001