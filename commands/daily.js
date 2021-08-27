const ms = require("parse-ms");
module.exports = {
    name:"daily",
    async run (client, message, args, db) {
        const Discord = require("discord.js")
        var timeout = 1000*60*60*24;
        let bread = await db.fetch(`bread_${message.author.id}`)
        if(bread > 0) {
            timeout = 1000*60*60*12;
        }
        const author = await db.fetch(`daily_${message.author.id}`);
        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`❌You already claimed your daily reward today! Wait for another **${time.hours}** hour(s) **${time.minutes}** minute(s) **${time.seconds}** second(s) `)
          } else {
              let amount = 5000;
              let embed = new Discord.MessageEmbed()
              .setDescription(`Your daily reward was \`${amount}\`$!`)
              .setColor("RED")
              .setTimestamp()

              let beer = await db.fetch(`beer_${message.author.id}`)
              if(beer > 0) {
                  amount = 10000;
              }
           
              db.add(`money_${message.author.id}`, amount)
              db.set(`daily_${message.author.id}`, Date.now())
              message.channel.send(embed)
          }
    }
}


//Made by RamJamDee_YT#0001