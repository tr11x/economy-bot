const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name:"credits",
    run: async(client, message, args) => {
        let user = message.mentions.users.first() || message.author;
      
        let credit = await db.fetch(`credit_${user.id}`)
        if(credit === null) {credit = 0}
        return message.channel.send(`${user.username}, have a ${credit} credits`)
        
    }   
}



//Made by TriX#3030
