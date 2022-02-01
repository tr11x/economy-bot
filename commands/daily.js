const ms = require("parse-ms");
const db = require('quick.db');
const Discord = require("discord.js")
module.exports = {
    name:"daily",
    run: async(client, message, args) => {
        
        let timeout = 86400000; 
        let amount = Math.floor(Math.random() * 2000) + 400;
        const author = await db.fetch(`daily_${message.author.id}`);
        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`❌You already claimed your daily reward today! Wait for another **${time.hours}** hour(s) **${time.minutes}** minute(s) **${time.seconds}** second(s) `)
          } else {
              message.channel.send(new Discord.MessageEmbed()
              .setDescription(`Your daily reward was \`${amount}\`$!`)
              .setColor("RED")
              .setTimestamp())
    
              db.add(`credit_${message.author.id}`, amount)
              db.set(`daily_${message.author.id}`, Date.now())
            
          }
    }
}

//Made by  TriX#3030
