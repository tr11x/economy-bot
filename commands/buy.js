const Discord = require("discord.js");
module.exports = {
    name:"buy",
    async run (client, message, args, db) {
        const purchase = args.join(" ").toLowerCase()
        var money = await db.fetch(`money_${message.author.id}`)
        if(money === null) {money = 0}
        if(!purchase) {
            return message.channel.send(`Please provide your purchase.`)
        }
        if(
            purchase !== "bread" &&
            purchase !== "beer"
        ) {
            return message.channel.send(`Invalid purchase!`);
        }
        if(purchase == "beer") {
            if(money <  5000) {
                return message.channel.send(`You do not have enough cash to buy that!`)
            } 
            let beer = await db.fetch(`beer_${message.author.id}`)
            if(beer > 0) {
                return message.channel.send(`You already own a \`🍷Beer\`!`)
            }
            db.add(`beer_${message.author.id}`, 1);
            message.channel.send(`You bought a \`🍷Beer\`, Enjoy it!`)
            db.subtract(`money_${message.author.id}`, 5000)
        }else {
            if(purchase == "bread") {
                if(money < 2500) {
                    return message.channel.send(`You do not have enough cash to buy that!`)
                } 
                let bread = await db.fetch(`bread_${message.author.id}`)
                if(bread > 0) {
                    return message.channel.send(`You already own a \`🍞Bread\`!`)
                }
                db.add(`bread_${message.author.id}`, 1);
                db.subtract(`money_${message.author.id}`, 2500)
                message.channel.send(`You bought a \`🍞Bread\`, it's delicious!`)
            }
        }
    }
}


//Made by RamJamDee_YT#0001