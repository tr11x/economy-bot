const Discord = require("discord.js");
module.exports = {
    name:"addmoney",
    async run (client, message, args, db) {
        const ownerId = "799629227715723294" // this is my id but you wanna put your id here.

        if(message.author.id !== ownerId) {
            return message.channel.send(`Sorry! Only the bot developer can use this command.`)
        }
        let user = message.mentions.users.first()
        if( !args[0] || !user) {
            return message.channel.send(`The first argument must be an user mention!`)
        }
        let amount = args.slice(1).join(" ");
        if(!amount) {
            return message.channel.send(`Please provide a number!`)
        }
        if(isNaN(amount)) {
            return message.channel.send(`That's not a number!`)
        }
        if(amount === "0")  {
            return message.channel.send(`Why'd you give someone \`0\` coins??? 😂😂`)
        }
        db.add(`money_${user.id}`, parseInt(amount))
        message.channel.send(`Succesfully added \`${parseInt(amount)}\` coins to **${user.tag}**'s wallet!`)

    }
}