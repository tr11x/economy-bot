module.exports = {
    name:"balance",
    async run (client, message, args, db) {
        let bank = await db.fetch(`bank_${message.author.id}`)
        if(bank === null) bank = 0;
        let user = message.mentions.users.first() || message.author;
        const Discord = require("discord.js");
        var money = await db.fetch(`money_${user.id}`)
        if(money === null) {money = 0}
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${user.tag}'s balance`, user.displayAvatarURL())
        .setDescription(`Wallet: \`${money}\`$ \n Bank: \`${bank}\`$`)
        .setColor("BLUE")
        .setTimestamp()

        message.channel.send(embed)
    }   
}



//Made by RamJamDee_YT#0001