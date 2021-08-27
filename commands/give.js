const Discord = require("discord.js");
module.exports = {
    name:"give",
    async run (client, message, args, db) {
 
        let user = message.mentions.users.first();
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
        let money = await db.fetch(`money_${message.author.id}`);
        if(amount > money) {
            return message.channel.send(`Sorry! You don't have \`${amount}\` coins!`)
        }
        if(amount === "0")  {
            return message.channel.send(`Why'd you give someone \`0\` coins??? 😂😂`)
        }
        var userMoney = await db.fetch(`money_${user.id}`);
        
        db.add(`money_${user.id}`, parseInt(amount))
        db.subtract(`money_${message.author.id}`, parseInt(amount))
        message.channel.send(`You gave **${user.tag}** \`${amount}\` coins! You now have **${money}** and he(she) has **${userMoney}**`)

    }
}