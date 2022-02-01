const Discord = require("discord.js");
const db = require('quick.db');
module.exports = {
    name:"addcredits",
     run: async(client, message, args) => {
        const ownerId = "حط ايديك هني" // this is my id but you wanna put your id here.

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
            return message.channel.send(`Why'd you give someone \`0\` credit??? 😂😂`)
        }
        db.add(`credit_${user.id}`, parseInt(amount))
        message.channel.send(`Succesfully added \`${parseInt(amount)}\` credits to **${user.tag}**'s !`)

    }
}
//Made by TriX#3030
