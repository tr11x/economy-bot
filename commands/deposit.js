module.exports = {
    name:"deposit",
    async run (client, message, args, db) {
        const user = message.author;
        if(!args[0]) {
            return message.channel.send(`Please provide a number or "all" !`)
        }
        if(args[0].toLowerCase() == "all") {
            let meney= await db.fetch(`money_${user.id}`)
        if(meney === null) meney = 0;
            db.add(`bank_${user.id}`, parseInt(meney))
            db.subtract(`money_${user.id}`, parseInt(meney))
            message.channel.send(`Succesfully added all of your money in your wallet to your bank.`)
            return;
        }
        let amount = args[0]
  
        if(isNaN(amount)) {
            return message.channel.send(`Thats not a number!`)
        }
        let money = await db.fetch(`money_${user.id}`)
        if(money === null) money = 0;
        if(args[0] > money) {
            return message.channel.send(`You only have **${money}**$ in your wallet!`)
        }
        db.add(`bank_${user.id}`, parseInt(amount))
        db.subtract(`money_${user.id}`, parseInt(amount))
        message.channel.send(`Succesfully added **${amount}**$ to your bank.`)
    }
}