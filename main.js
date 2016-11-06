var Discord = require("discord.js");

var bot = new Discord.Client();

function funcName(message)
{
	if(message.content === "Hi")
	{
		bot.reply(message,"Suh dude");
	}
}
bot.on("message",funcName(message));