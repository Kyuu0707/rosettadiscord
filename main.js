const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume: 1 };
const Key = require("./token.js");
var Gbf = require("./rollsim.js");
var dab = ["https://68.media.tumblr.com/ded624f61eed13f2ef204ea2a49cbac7/tumblr_o7v89xiUng1qkjs22o1_540.png", "http://i.imgur.com/HzhO1S0.jpg", "http://i.imgur.com/q3UWjcw.jpg", "https://pbs.twimg.com/media/Cop9PyZVIAAGFfI.jpg", "http://i.imgur.com/Zl0TLVb.jpg", "http://i.imgur.com/8iBC7ci.jpg", "http://puu.sh/sJYz2/4b6e451478.jpg", "http://puu.sh/sJYE2/e9d78ee368.jpg", "http://i.imgur.com/7L2FPO2.png","http://i.imgur.com/atpxJxy.jpg"]
var boi = ["http://puu.sh/sJZgo/cd78e002b5.jpg", "http://i.imgur.com/Zbnppod.jpg", "http://i.imgur.com/GoWqcSp.jpg", "http://i.imgur.com/qGwOXp1.jpg", "http://i.imgur.com/gia54PH.png", "http://31.media.tumblr.com/tumblr_maanokk6PB1rt26oso1_500.gif", "http://i.imgur.com/7oSWqLq.png", "http://i.imgur.com/aTOS0Bh.jpg", "http://i.imgur.com/X86zuo4.gif", "http://i.imgur.com/P2ZM23D.gif"]
var pout = ["http://i.imgur.com/noGSIPa.png", "http://i.imgur.com/q9HqDm5.jpg", "http://i.imgur.com/S2gP3P1.png", "http://i.imgur.com/c170WdO.png", "http://i.imgur.com/4sqDhWN.jpg", "http://i.imgur.com/muuQZb2.jpg", "http://i.imgur.com/VKkZ276.jpg", "http://i.imgur.com/4lIr5AE.gif", "http://i.imgur.com/27etcZ5.png", "http://i.imgur.com/XoDHk8x.jpg", "http://i.imgur.com/VNNPhWU.jpg", "http://i.imgur.com/vcIq1Ir.jpg","http://i.imgur.com/gpOXOX6.png", "http://i.imgur.com/joc43yk.gif", "http://i.imgur.com/QU4n9iK.gif", "http://i.imgur.com/30lZurA.png", "http://i.imgur.com/67XxCCg.jpg", "http://i.imgur.com/zlEWSJC.jpg", "http://i.imgur.com/EbpwqsK.jpg", "http://i.imgur.com/HE3FAHI.jpg", "http://i.imgur.com/DJ2p63Y.jpg", "https://i.imgur.com/Ame4YUP.gif", "https://i.imgur.com/Rwa7dlA.gif", "https://i.imgur.com/UqRUZpQ.gif", "https://i.imgur.com/ToglaeC.gif", "https://i.imgur.com/jvpql0o.gif", "http://i.imgur.com/AVbKQnW.jpg"]
var weewoo = ["http://i.imgur.com/gHEZ53h.jpg", "http://i.imgur.com/IcvPSmP.jpg", "http://i.imgur.com/kN07iyu.png", "http://i.imgur.com/FgkmWs2.jpg", "http://i.imgur.com/AhgtfLq.png", "http://i.imgur.com/Srd3Txc.jpg", "http://i.imgur.com/XOU7QOf.gif", "http://i.imgur.com/8WiNlc5.png","http://i.imgur.com/MPiWEPp.jpg","http://i.imgur.com/s6rzy4e.png","http://i.imgur.com/yUi9WiG.png"]
var fight = ["http://i.imgur.com/OZZ8lI3.jpg", "http://i.imgur.com/Jl5dTor.jpg","http://i.imgur.com/YdPBmZk.png","http://i.imgur.com/W3G1KmU.gif"]
var eightBallResponse = ["Yes.","No.","Possibly.","Potentially.","Concentrate and ask again.","Ask again later.","Highly doubtful.","Most likely.","Hahahahaha no.","Yes, definitely.","With certainty.","It is probable.","My sources tell me no.","Does a bear shit in the woods?","Maybe. Maybe not.","Absolutely.","You betcha.","Nah.","It is known.","Without a doubt."]
const client = new Discord.Client();
const queue = [];
const nowPlaying = [];


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
	
	/*if(queue.length > 0 && dispatcher.speaking === false)
	{
		playMusic("a " + queue[0]);
	}*/
	
	//random dab
	if(message.content === "-dab")
	{
		message.channel.sendMessage(dab[Math.floor(Math.random()*dab.length)]);
	}
	
	//random o face
	else if(message.content === "-boi")
	{
		message.channel.sendMessage(boi[Math.floor(Math.random()*boi.length)]);
	}
	
	//random pout
	else if(message.content === ":T")
	{
		message.channel.sendMessage(pout[Math.floor(Math.random()*pout.length)]);
	}
	
	//don't pop lolis
	else if(message.content === "-weewoo")
	{
		message.channel.sendMessage(weewoo[Math.floor(Math.random()*weewoo.length)]);
	}
	
	//square up bitch
	else if(message.content === "-fight")
	{
		message.channel.sendMessage(fight[Math.floor(Math.random()*fight.length)]);
	}
	
	//dishonored my family
	else if(message.content === "-sudoku")
	{
		message.channel.sendMessage("http://i.imgur.com/yK2EH5U.jpg");
	}
	
	//clean Ayana requests
	else if(message.content.startsWith("=music"))
	{
		message.delete({timeout : 2000});
	}

	//GBF 10 draw sim
	else if(message.content === "-10draw")
	{
		//saber meme
		/*if (message.author.id === "131243763325468672")
		{
			message.channel.sendMessage(message.author + ", you got\n" + Gbf.roll10saber());
		}*/
		//Q ID
		/*else if(message.author.id === "155776304573186049")
		{
			message.channel.sendMessage(message.author + ", you got\n" + Gbf.roll10Legfest());
		}*/
		
		//basic
		//message.channel.sendMessage(message.author + ", you got\n" + Gbf.roll10());
		
		//6%
		message.channel.sendMessage(message.author + ", you got\n" + Gbf.roll10Legfest());
	}
	
	//GBF yolo roll sim
	else if(message.content === "-yolo")
	{
		//basic
		//message.channel.sendMessage(message.author+ ", you got\n" + Gbf.roll());
		//6%
		message.channel.sendMessage(message.author+ ", you got\n" + Gbf.rollLegfest());
	}
	
	//100 rolls
	else if(message.content === "-100draw")
	{
		//saber meme
		/*
		if (message.author.id === "131243763325468672")
		{
			message.channel.sendMessage(message.author + ", you got\n" + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber());
		}
		*/
		
		message.channel.sendMessage(message.author + ", you got\n" + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest());
		
		
		
	}
	
	//vira rare crystal meme
	else if(message.content === "-r")
	{
		message.channel.sendMessage("http://i.imgur.com/pldCPGl.jpg");
	}
	
	//ssr kancolle harambe meme
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
	
	//granblue tag everyone
	else if(message.content === "-e")
	{
		message.channel.sendMessage("<@&253340396472500225> anotha one");
	}
	
	///////////////////////
	//ROCK PAPER SCISSORS//
	///////////////////////
	else if(message.content === "-rock")
	{
		message.channel.sendMessage(message.author + rpsDecide(1));
	}
	
	else if(message.content === "-paper")
	{
		message.channel.sendMessage(message.author + rpsDecide(2));
	}
	
	else if(message.content === "-scissors")
	{
		message.channel.sendMessage(message.author + rpsDecide(3));
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
	
	//sora no method
	else if(message.content === "-rawr")
	{
		message.channel.sendMessage("http://i.imgur.com/c9gMEi6.gif");
	}
	
	//mirai nico
	else if(message.content === "-daan")
	{
		message.channel.sendMessage("https://cdn.discordapp.com/attachments/199575382670835712/223691222412296192/1.gif <@149096851335938049>");
	}
	
	//coinflip
	else if(message.content === "-coin")
	{
		var num;
		num = Math.floor(Math.random()*2)
		if (num === 1)
		{
			message.channel.sendMessage(message.author + ", Heads!");
		}
		else
		{
			message.channel.sendMessage(message.author + ", Tails!");
		}
	}
	
	else if(message.content === "-8ball")
	{
		message.channel.sendMessage(message.author + ", correct usage is '-8ball <question>'");
	}
	
	else if(message.content.startsWith("-8ball "))
	{
		message.channel.sendMessage(message.author + ", " + eightBallResponse[Math.floor(Math.random()*eightBallResponse.length)]);
	}
	
	//n-sided die
	else if(message.content.startsWith("-dice "))
	{
		var spl = message.content.split(" ");
		var num = Math.floor(Math.random()*spl[1]);
		message.channel.sendMessage(message.author + ", you rolled " + (num+1) + ".");
	}
	
	//choose one of the options
	else if(message.content.startsWith("-pick "))
	{
		var str = message.content.substr(6);
		var spl = str.split("|");
		var num = Math.floor(Math.random()*(spl.length))
		var choice = spl[num];
		message.channel.sendMessage(message.author + ", I choose " + choice.trim() + "!");
	}
	
	else if(message.content === "-queue")
	{
		if(queue.length === 0 && nowPlaying.length === 0){
			message.channel.sendMessage("Queue is empty and no song is playing!");
		}
		else
		{
			printQueue(message);
		}
	}
	
	else if(message.content === "-song")
	{
		//console.log("Received YouTube play command");
		playLocal(message,"./meme/file.mp3");
		//Parse message for search terms OR link
		//Search youtube with given terms, or link. If link, take youtube.com or youtu.be
		//Download mp3
		//Play
	}
	
	/*Do things for SoundCloud, YT here. Need to handle parsing link,
	downloading music, playing music through voice channel (can make
	single function for clienthh SC and YT if it doesn't exist already).
	Also need to handle queueing/dequeueing songs, leaving VC, etc.
	Need to handle bad link, give user a message as to why it was bad.*/
	
	
	//YOUTUBE
	
	else if(message.content.startsWith("-play "))
	{
		console.log("Received YouTube play command");
		playMusic(message);
		//Parse message for search terms OR link
		//Search youtube with given terms, or link. If link, take youtube.com or youtu.be
		//Download mp3
		//Play
	}
	
	
	/* SOUNDCLOUD
	else if(message.content.substring(0,3) === "-sp"){
		message.channel.sendMessage("Sent SoundCloud enqueue/play message.");
		//Pass message to parsing function for search terms
		//Search SC
		//Download and Play
	}
	*/
}

var rpsDecide = function(p)
{
	var num = Math.floor(Math.random()*3)
	//computer rock
	if(num === 0)
	{
		if(p === 1)
		{
			return "\n:waning_gibbous_moon:\nDraw!";
		}
		else if(p === 2)
		{
			return "\n:waning_gibbous_moon:\nYou Win!";
		}
		else
		{
			return "\n:waning_gibbous_moon:\nYou Lose!";
		}
	}
	//computer paper
	else if(num === 1)
	{
		if(p === 1)
		{
			return "\n:newspaper2:\nYou Lose!";
		}
		else if(p === 2)
		{
			return "\n:newspaper2:\nDraw!";
		}
		else
		{
			return "\n:newspaper2:\nYou Win!";
		}	
	}
	//computer scissors
	else
	{
		if(p === 1)
		{
			return "\n:scissors:\nYou Win!";
		}
		else if(p === 2)
		{
			return "\n:scissors:\nYou Lose!";
		}
		else
		{
			return "\n:scissors:\nDraw!";
		}	
	}
}

//downloads song from youtube, throws it into queue, dequeues into NP if no NP
var playMusic = function(message)
{
	var spl = message.content.split(" ");
	if(spl[0] === "-play")
	{
		enqueue(spl[1]);
	}
	
	message.guild.fetchMember(message.author).then(member => {
  
        member.voiceChannel.join()
        .then(connection => {
			console.log("Playing...");
			message.delete(10);
			var toPlay = queue[0];
			const stream = ytdl(queue[0], {filter : 'audioonly'});
			/*
			stream.on('end', () => {
                // Advance to the next song
            })
			*/
			const dispatcher = connection.playStream(stream, streamOptions);
			dequeue();
        })
		
        .catch(err => {
            console.log(err);
        });
    });
	
	if(queue === null && nowPlaying === null)
	{
		voiceChannel.leave();
	}
}

//add song to queue
var enqueue = function(str)
{
	queue.push(str);
}

//move song from queue into now playing, remove queue entry
var dequeue = function()
{
	nowPlaying[0] = queue[0];
	queue.splice(0,1);	
}

//print now playing + queue
var printQueue = function(message)
{
	var i;
	var str = "```\n"
	var npStr = [];
		ytdl.getInfo(nowPlaying[0], function(err, info){
		npStr.push(info);
		console.log(info.title);
	});
	
	str = str + "Now playing: " + npStr[0].title + "\n\n";
	str = str + "Queue: "
	
	
	for(i=0;i<queue.length;i++)
	{
		var queueStr = [];
		ytdl.getInfo(queue[i], function(err, info) {
			console.log(info.title);
			queueStr = info.title;
		});
		str = (i+1) + ". " + queueStr[i] + "\n";
	}
	str = str + "```";
	
	//send message containing Now Playing and Queue
	message.channel.sendMessage(str);

}

//play song hosted locally
playLocal = function(message,song)
{
	message.guild.fetchMember(message.author).then(member => {
        //console.log(JSON.stringify(member));
        member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playFile(song);
			console.log("Playing...");
        })
        .catch(err => {
            console.log(err);
        });
    });
}

/*
var song = {
	'title': title,
	'url': url
}
*/

client.on("message",onMessage);
console.log("Logged in to Discord.");

client.login(Key.logintoken);
