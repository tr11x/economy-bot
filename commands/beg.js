const ms = require("parse-ms");
module.exports = {
    name:"beg",
    async run (client, message, args, db) {
        const Discord = require("discord.js")
        var timeout = 1000*60*2;
        let bread = await db.fetch(`bread_${message.author.id}`)
        if(bread > 0) {
          timeout = 1000*60*1;
      }
        const author = await db.fetch(`beg_${message.author.id}`);
        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`❌You are too lazy to beg for another **${time.minutes}** minutes **${time.seconds}** seconds.`)
          } else {
              const names = [
                  "John",
                  "Anna",
                  "Sara",
                  "William",
                  "Tommy"
              ]
              const name = names[Math.floor(Math.random()* names.length)];

              let amount = Math.floor(Math.random()* 190) + 10;
              let embed = new Discord.MessageEmbed()
              .setDescription(`**${name}** gave you  \`${amount}\`$!`)
              .setColor("RED")
              .setTimestamp()

              let beer = await db.fetch(`beer_${message.author.id}`)
              if(beer > 0) {
                  amount = Math.floor(Math.random()* 380) + 20;
              }
           
              db.add(`money_${message.author.id}`, amount)
              db.set(`beg_${message.author.id}`, Date.now())
              message.channel.send(embed)
          }
    }
}


//Made by RamJamDee_YT#0001