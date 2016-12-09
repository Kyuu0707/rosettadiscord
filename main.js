var Discord = require("discord.js");
var Key = require("./token.js");
var Gbf = require("./rollsim.js")

var bot = new Discord.Client();

var onMessage = function(message)
{
	console.log("Got message. " + message.author.id);
	//console.log(message.guild.fetchMembers());
	//console.log(JSON.stringify(message.guild));
	
	//make sure servers are up
	if(!message.guild.available)
	{
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
		//message.channel.sendMessage("https://68.media.tumblr.com/ded624f61eed13f2ef204ea2a49cbac7/tumblr_o7v89xiUng1qkjs22o1_540.png");
		message.channel.sendMessage(dab());
	}
	
	else if(message.content === "-boi")
	{
		message.channel.sendMessage(boi());
	}
	
	/*Do things for SoundCloud, YT here. Need to handle parsing link,
	downloading music, playing music through voice channel (can make
	single function for both SC and YT if it doesn't exist already).
	Also need to handle queueing/dequeueing songs, leaving VC, etc.
	Need to handle bad link, give user a message as to why it was bad.*/
	
	//THIS WILL EVENTUALLY BE YOUTUBE
	/*else if(message.content.substring(0,3) === "-yp")
	{
		//message.channel.sendMessage("Sample YouTube enqueue/play message.");
		playMusic(message);
		//Search youtube with given terms, or link. If link, take youtube.com or youtu.be
		//Download mp3
		//Play
	}*/
	
	//GBF 10 draw sim
	else if(message.content === "-10draw")
	{
		if (message.author.id === "131243763325468672")
		{
			message.channel.sendMessage(message.author + ", you got\n" + Gbf.roll10saber());
		}
		//Q ID
		/*else if(message.author.id === "155776304573186049")
		{
			console.log("meme");
			message.channel.sendMessage(message.author + ", you got\n" + Gbf.roll10Legfest());
		}*/
		else
		{
			//message.channel.sendMessage(message.author + ", you got\n" + Gbf.roll10());
			message.channel.sendMessage(message.author + ", you got\n" + Gbf.roll10Legfest());
		}
	}
	
	//GBF yolo roll sim
	else if(message.content === "-yolo")
	{
		//message.channel.sendMessage(message.author+ ", you got\n" + Gbf.roll());
		message.channel.sendMessage(message.author+ ", you got\n" + Gbf.rollLegfest());
	}
	
	else if(message.content === "-r")
	{
		message.channel.sendMessage("http://i.imgur.com/pldCPGl.jpg");
	}
	
	else if(message.content === "-ssr")
	{
		message.channel.sendMessage("http://i.imgur.com/YN66Eit.jpg");
	}
	
	
	//ayy lmao
	else if(message.content === "ayy")
	{
		message.channel.sendMessage("lmao");
	}
	
	//flipchest gif
	else if(message.content === "-flip")
	{
		message.channel.sendMessage("http://i.imgur.com/xccBXHz.gif");
	}
	
	//roast
	else if(message.content === "-roast")
	{
		message.channel.sendMessage("http://i.imgur.com/efTdwLQ.jpg");
	}
	
	//rust
	else if(message.content === "-1v1")
	{
		message.channel.sendMessage("http://i.imgur.com/o6D7uJf.jpg");
	}
	
	else if(message.content === "-daan")
	{
		message.channel.sendMessage("https://cdn.discordapp.com/attachments/199575382670835712/223691222412296192/1.gif <@149096851335938049>");
	}
	
	/* SOUNDCLOUD
	else if(message.content.substring(0,3) === "-sp"){
		message.channel.sendMessage("Sent SoundCloud enqueue/play message.");
	}
	*/
}

var playMusic = function(message)
{
	message.guild.fetchMember(message.author).then(member => {
        //console.log(JSON.stringify(member));
        member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playFile("./meme/noproblem.mp3");
			console.log("Playing...");
        })
        .catch(err => {
            console.log(err);
        });
    });
}

var dab = function()
{
	switch(Math.floor(Math.random()*8))
	{
		case 0:
			return "https://68.media.tumblr.com/ded624f61eed13f2ef204ea2a49cbac7/tumblr_o7v89xiUng1qkjs22o1_540.png";
			break;
		case 1:
			return "http://i.imgur.com/HzhO1S0.jpg";
			break;
		case 2:
			return "http://i.imgur.com/q3UWjcw.jpg";
			break;
		case 3:
			return "https://pbs.twimg.com/media/Cop9PyZVIAAGFfI.jpg";
			break;
		case 4:
			return "http://i.imgur.com/Zl0TLVb.jpg";
			break;
		case 5:
			return "http://i.imgur.com/8iBC7ci.jpg";
			break;
		case 6:
			return "http://puu.sh/sJYz2/4b6e451478.jpg";
			break;
		case 7:
			return "http://puu.sh/sJYE2/e9d78ee368.jpg";
			break;
	}
}

var boi = function()
{
	switch(Math.floor(Math.random()*1))
	{
		case 0:
			return "http://i.imgur.com/HaYBGeK.jpg";
			break;
		/*case 1:
			return "";
			break;
		case 2:
			return "";
			break;*/
	}
}

bot.on("message",onMessage);
console.log("Logged in to Discord.")

bot.login(Key.logintoken);