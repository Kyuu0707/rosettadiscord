var Discord = require("discord.js");

var bot = new Discord.Client();

var onMessage = function(message)
{
	console.log("Recieved message.");
	if(message.content === "Hi")
	{
		//bot.reply(message,"Suh dude");
		message.channel.sendMessage(message.author + ", suh dude");
	}
}
bot.on("message",onMessage);

bot.login("MjQ0Njc2Njg0MDEwMzU2NzM2.CwBueQ.KJvVU9T6UcZsrNU0EQXE32Ns8w8");