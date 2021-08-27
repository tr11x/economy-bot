const Discord = require("discord.js");
module.exports = {
    name:"shop",
    async run (client, message, args, db) {
        const shopEmbed = new Discord.MessageEmbed()
        .setAuthor("Shop", message.guild.iconURL({dynamic: true}))
        .setDescription(`🍞Bread - \`2 500$\` - Have slower cooldowns. \n 🍷Beer - \`5 000$\` - Earn more cash.`)
        .setColor("RED")
        .setTimestamp()

        message.channel.send(shopEmbed);
    }
}


//Made by RamJamDee_YT#0001