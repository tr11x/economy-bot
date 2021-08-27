const ms = require("parse-ms");
module.exports = {
    name:"work",
    async run (client, message, args, db) {
        const Discord = require("discord.js")
        var timeout = 1000*60*5;
        let bread = await db.fetch(`bread_${message.author.id}`)
        if(bread > 0) {
            timeout = 1000*60*2 + 1000*30;
        }
        const author = await db.fetch(`worked_${message.author.id}`);
        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`❌You are tired! Take a nap for **${time.minutes}** minutes **${time.seconds}** seconds.`)
          } else {
              let amount = Math.floor(Math.random()* 400) + 100;
              let embed = new Discord.MessageEmbed()
              .setDescription(`You worked and earned \`${amount}\`$! `)
              .setColor("RED")
              .setTimestamp()

              let beer = await db.fetch(`beer_${message.author.id}`)
              if(beer > 0) {
                  amount = Math.floor(Math.random()* 800) + 200;
              }
         
              db.add(`money_${message.author.id}`, amount)
              db.set(`worked_${message.author.id}`, Date.now())
              message.channel.send(embed)
          }
    }
}


//Made by RamJamDee_YT#0001