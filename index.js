const Discord = require("discord.js");
const client = new Discord.Client()
client.commands = new Discord.Collection();
const prefix = "!"; //البريفكس الي تريده
const fs = require("fs");
const db = require("quick.db");
const path = require("path");
const commandFiles = fs.readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for(const file of commandFiles) {
    const command = require(path.join(__dirname, "commands", `${file}`))
    client.commands.set(command.name, command)
}
client.on("error", console.error)


client.on("message", async message => {
  
    if(message.channel.type === "dm" || message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    try {
        client.commands.get(command).run(client, message, args, db);
    }catch (error) {
        console.log(`An error occured: ${error}`)
        return message.channel.send(`An error occured: ${error}`)
        
    }
})//It's Hie

client.on("ready", async () => {
    console.log("I am ready")
    console.log("-----------------------------------")
    console.log(`${client.commands.map(cd => `${cd.name}.js ✅`).join("\n")}`)
    console.log("-----------------------------------")
    client.user.setActivity("${prefix}help", {type: "PLAYING"})
})
