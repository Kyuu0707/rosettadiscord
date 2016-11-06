var Discord = require("discord.js");
var Key = require("./token.js");

var bot = new Discord.Client();

var onMessage = function(message)
{
	console.log("Awaiting message.");
	//make sure servers are up
	if(!message.guild.available){
		console.log("Guild not available. Returning.");
		return;
	}
	
	if(message.content === "Hi")
	{
		//bot.reply(message,"Suh dude");
		message.channel.sendMessage(message.author + ", suh dude");
	}
	
	else if(message.content === "-dab")
	{
		message.channel.sendMessage("https://68.media.tumblr.com/ded624f61eed13f2ef204ea2a49cbac7/tumblr_o7v89xiUng1qkjs22o1_540.png");
	}
	
	/*Do things for SoundCloud, YT here. Need to handle parsing link,
	downloading music, playing music through voice channel (can make
	single function for both SC and YT if it doesn't exist already).
	Also need to handle queueing/dequeueing songs, leaving VC, etc.
	Need to handle bad link, give user a message as to why it was bad.*/
	else if(message.content.substring(0,3) === "-yp"){
		message.channel.sendMessage("Sent YouTube enqueue/play message.");
		//Make sure user is in some voice channel
		//if(guild.channels)
			
		//Search youtube with given terms, or link. If link, take youtube.com or youtu.be
		//Download mp3
		//Join channel and play
	}
	else if(message.content.substring(0,3) === "-sp"){
		message.channel.sendMessage("Sent SoundCloud enqueue/play message.");
	}
}
bot.on("message",onMessage);
console.log("Logged in to Discord.")

bot.login(Key.logintoken);
