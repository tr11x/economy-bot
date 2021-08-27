module.exports = {
    name:"withdraw",
    async run (client, message, args, db) {
        const Discord = require("discord.js")
        const user = message.author;
        if(!args[0]) {
            return message.channel.send(`Please provide a number or "all" !`)
        }
        
        if(args[0].toLowerCase() == "all") {
            let benk = await db.fetch(`bank_${user.id}`)
          

        if(benk === null) benk = 0;
            db.add(`money_${user.id}`, parseInt(benk))
            db.subtract(`bank_${user.id}`, parseInt(benk))
            message.channel.send(`Succesfully added all of your money in your bank to your wallet.`)
            return;
        }
        let amount = args[0]
     
        if(isNaN(amount)) {
            return message.channel.send(`Thats not a number!`)
        }
        let bank = await db.fetch(`bank_${user.id}`)
        if(bank === null) bank = 0;
        if(args[0] > bank) {
            return message.channel.send(`You only have **${bank}**$ in your bank!`)
        }
        db.add(`money_${user.id}`, parseInt(amount))
        db.subtract(`bank_${user.id}`, parseInt(amount))
        
        message.channel.send(`Succesfully added **${amount}**$ to your wallet.`)

    }
}