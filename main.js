const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume: 1 };
const Key = require("./token.js");
const Jimp = require("jimp");
var Gbf = require("./rollsim.js");
var dab = ["https://68.media.tumblr.com/ded624f61eed13f2ef204ea2a49cbac7/tumblr_o7v89xiUng1qkjs22o1_540.png", "http://i.imgur.com/HzhO1S0.jpg", "http://i.imgur.com/q3UWjcw.jpg", "https://pbs.twimg.com/media/Cop9PyZVIAAGFfI.jpg", "http://i.imgur.com/Zl0TLVb.jpg", "http://i.imgur.com/8iBC7ci.jpg", "http://puu.sh/sJYz2/4b6e451478.jpg", "http://puu.sh/sJYE2/e9d78ee368.jpg", "http://i.imgur.com/7L2FPO2.png","http://i.imgur.com/atpxJxy.jpg","https://i.imgur.com/WqfPYar.png"]
var boi = ["http://puu.sh/sJZgo/cd78e002b5.jpg", "http://i.imgur.com/Zbnppod.jpg", "http://i.imgur.com/GoWqcSp.jpg", "http://i.imgur.com/qGwOXp1.jpg", "http://i.imgur.com/gia54PH.png", "http://31.media.tumblr.com/tumblr_maanokk6PB1rt26oso1_500.gif", "http://i.imgur.com/7oSWqLq.png", "http://i.imgur.com/aTOS0Bh.jpg", "http://i.imgur.com/X86zuo4.gif", "http://i.imgur.com/P2ZM23D.gif"]
var pout = ["http://i.imgur.com/noGSIPa.png", "http://i.imgur.com/q9HqDm5.jpg", "http://i.imgur.com/S2gP3P1.png", "http://i.imgur.com/c170WdO.png", "http://i.imgur.com/4sqDhWN.jpg", "http://i.imgur.com/muuQZb2.jpg", "http://i.imgur.com/VKkZ276.jpg", "http://i.imgur.com/4lIr5AE.gif", "http://i.imgur.com/27etcZ5.png", "http://i.imgur.com/XoDHk8x.jpg", "http://i.imgur.com/VNNPhWU.jpg", "http://i.imgur.com/vcIq1Ir.jpg","http://i.imgur.com/gpOXOX6.png", "http://i.imgur.com/joc43yk.gif", "http://i.imgur.com/QU4n9iK.gif", "http://i.imgur.com/30lZurA.png", "http://i.imgur.com/67XxCCg.jpg", "http://i.imgur.com/zlEWSJC.jpg", "http://i.imgur.com/EbpwqsK.jpg", "http://i.imgur.com/HE3FAHI.jpg", "http://i.imgur.com/DJ2p63Y.jpg", "https://i.imgur.com/Ame4YUP.gif", "https://i.imgur.com/Rwa7dlA.gif", "https://i.imgur.com/UqRUZpQ.gif", "https://i.imgur.com/ToglaeC.gif", "https://i.imgur.com/jvpql0o.gif", "http://i.imgur.com/AVbKQnW.jpg", "http://i.imgur.com/oQgIoDg.png", "http://i.imgur.com/rCsXWsx.png"]
var weewoo = ["http://i.imgur.com/gHEZ53h.jpg", "http://i.imgur.com/IcvPSmP.jpg", "http://i.imgur.com/kN07iyu.png", "http://i.imgur.com/FgkmWs2.jpg", "http://i.imgur.com/AhgtfLq.png", "http://i.imgur.com/Srd3Txc.jpg", "http://i.imgur.com/XOU7QOf.gif", "http://i.imgur.com/8WiNlc5.png","http://i.imgur.com/MPiWEPp.jpg","http://i.imgur.com/s6rzy4e.png","http://i.imgur.com/yUi9WiG.png"]
var fight = ["http://i.imgur.com/OZZ8lI3.jpg", "http://i.imgur.com/Jl5dTor.jpg","http://i.imgur.com/YdPBmZk.png","http://i.imgur.com/W3G1KmU.gif"]
var eightBallResponse = ["Yes.","No.","Possibly.","Potentially.","Concentrate and ask again.","Ask again later.","Highly doubtful.","Most likely.","Hahahahaha no.","Yes, definitely.","With certainty.","It is probable.","My sources tell me no.","Does a bear shit in the woods?","Maybe. Maybe not.","Absolutely.","You betcha.","Nah.","It is known.","Without a doubt."]
const client = new Discord.Client();
const queue = [];
const titles = [];


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
		message.channel.send(dab[Math.floor(Math.random()*dab.length)]);
	}
	
	//random o face
	else if(message.content === "-boi")
	{
		message.channel.send(boi[Math.floor(Math.random()*boi.length)]);
	}
	
	//random pout
	else if(message.content === ":T")
	{
		message.channel.send(pout[Math.floor(Math.random()*pout.length)]);
	}
	
	//don't pop lolis
	else if(message.content === "-weewoo")
	{
		message.channel.send(weewoo[Math.floor(Math.random()*weewoo.length)]);
	}
	
	//square up bitch
	else if(message.content === "-fight")
	{
		message.channel.send(fight[Math.floor(Math.random()*fight.length)]);
	}
	
	//dishonored my family
	else if(message.content === "-sudoku")
	{
		message.channel.send("http://i.imgur.com/yK2EH5U.jpg");
	}
	
	//y tho
	else if(message.content === "-ytho")
	{
		message.channel.sendFile("./meme/ytho.jpg");
	}
	
	//you look at him and tell me there's a god
	else if(message.content === "-nogod")
	{
		message.channel.sendFile("./meme/nogod.jpg");
	}
	
	//i wanna fuckin die
	else if(message.content === "-iwannadie")
	{
		message.channel.sendFile("./meme/fuuuuck.jpg");
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
			message.channel.send(message.author + ", you got\n" + Gbf.roll10saber());
		}*/
		
		//basic
		//message.channel.send(message.author + ", you got\n" + Gbf.roll10());
		
		//6%
		message.channel.send(message.author + ", you got\n" + Gbf.roll10Legfest());
	}
	
	//GBF yolo roll sim
	else if(message.content === "-yolo")
	{
		//basic
		//message.channel.send(message.author+ ", you got\n" + Gbf.roll());
		//6%
		message.channel.send(message.author+ ", you got\n" + Gbf.rollLegfest());
	}
	
	//100 rolls
	else if(message.content === "-100draw")
	{
		//saber meme
		/*
		if (message.author.id === "131243763325468672")
		{
			message.channel.send(message.author + ", you got\n" + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber() + Gbf.roll10saber());
		}
		*/
		
		message.channel.send(message.author + ", you got\n" + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest() + Gbf.roll10Legfest());
		
		
		
	}
	
	//vira rare crystal meme
	else if(message.content === "-r")
	{
		message.channel.send("http://i.imgur.com/pldCPGl.jpg");
	}
	
	//ssr kancolle harambe meme
	else if(message.content === "-ssr")
	{
		message.channel.send("http://i.imgur.com/YN66Eit.jpg");
	}
	
	//ayy lmao
	else if(message.content === "ayy")
	{
		message.channel.send("lmao");
	}
	

	//flipchest gif
	else if(message.content === "-flip")
	{
		message.channel.send("http://i.imgur.com/xccBXHz.gif");
	}
	
	///////////////////////
	//ROCK PAPER SCISSORS//
	///////////////////////
	else if(message.content === "-rock")
	{
		message.channel.send(message.author + rpsDecide(1));
	}	
	else if(message.content === "-paper")
	{
		message.channel.send(message.author + rpsDecide(2));
	}
	else if(message.content === "-scissors")
	{
		message.channel.send(message.author + rpsDecide(3));
	}
	
	
	/*
	**  YEET your enemy  //holy shit fuck
	*/
	else if(message.content.startsWith("-yeet "))
	{
		imageEdit(message,"yeet");
	}
	
	else if(message.content.startsWith("-slap "))
	{
		imageEdit(message,"slap");
	}
	
	//roast
	else if(message.content === "-roast")
	{
		message.channel.send("http://i.imgur.com/efTdwLQ.jpg");
	}
	
	//rust
	else if(message.content === "-1v1")
	{
		message.channel.send("http://i.imgur.com/o6D7uJf.jpg");
	}
	
	//sora no method
	else if(message.content === "-roar")
	{
		message.channel.send("http://i.imgur.com/c9gMEi6.gif");
	}
	
	//mirai nico
	else if(message.content === "-daan")
	{
		message.channel.send("https://cdn.discordapp.com/attachments/199575382670835712/223691222412296192/1.gif <@149096851335938049>");
	}
	
	//coinflip
	else if(message.content === "-coin")
	{
		var num;
		num = Math.floor(Math.random()*2)
		if (num === 1)
		{
			message.channel.send(message.author + ", Heads!");
		}
		else
		{
			message.channel.send(message.author + ", Tails!");
		}
	}
	
	else if(message.content === "-8ball")
	{
		message.channel.send(message.author + ", correct usage is '-8ball <question>'");
	}
	
	else if(message.content.startsWith("-8ball "))
	{
		message.channel.send(message.author + ", " + eightBallResponse[Math.floor(Math.random()*eightBallResponse.length)]);
	}
	
	//n-sided die
	else if(message.content.startsWith("-dice "))
	{
		var spl = message.content.split(" ");
		var num = Math.floor(Math.random()*spl[1]);
		message.channel.send(message.author + ", you rolled " + (num+1) + ".");
	}
	
	//choose one of the options
	else if(message.content.startsWith("-pick "))
	{
		var str = message.content.substr(6);
		var spl = str.split("|");
		var num = Math.floor(Math.random()*(spl.length))
		var choice = spl[num];
		message.channel.send(message.author + ", I choose " + choice.trim() + "!");
	}
	
	
	else if(message.content === "-queue")
	{
		if(queue.length > 10)
		{
			message.channel.send("Queue is pretty long so fuck you I'm not printing it cause I don't feel like managing pages");
		}
		else if(queue.length == 0 && message.guild.voiceConnection == null){
			message.channel.send("Queue is empty and no song is currently playing");
		}
		else if(queue.length == 0 && message.guild.voiceConnection != null)
		{
			printNP(message,0);
			message.channel.send("Queue is empty");
		}
		else
		{
			console.log("Printing queue...");
			printQueue(message);
		}
	}
	
	
	//force bot to leave
	else if(message.content === "-leave")
	{
		if(message.guild.voiceConnection != null)
		{
			message.channel.sendMessage("Leaving and purging queue");
			queue.splice(0,queue.length);
			titles.splice(0,titles.length);
			message.guild.voiceConnection.disconnect();
		}
		else
		{
			message.channel.send("Not currently connected.");
		}

	}
	
	else if(message.content == "-skip")
	{
		if(message.guild.voiceConnection != null)
		{
			message.guild.voiceConnection.disconnect();
			//playMusic(message);
		}
		else
		{
			message.channel.send("Not currently connected.");
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
		var spl = message.content.split(" ");
		if(queue.length == 0)
		{
			enqueue(spl[1], function(){
				playMusic(message);
				message.delete(100);
			});
		}
		else
		{
			enqueue(spl[1], function(){
				console.log("enqueueing a song");
				message.delete(100);
			});


		}
		//Parse message for search terms OR link
		//Search youtube with given terms, or link. If link, take youtube.com or youtu.be
		//Download mp3
		//Play
	}
	
	
	/* SOUNDCLOUD
	else if(message.content.substring(0,3) === "-sp"){
		message.channel.send("Sent SoundCloud enqueue/play message.");
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
	//var spl = message.content.split(" ");
	
	//enqueue(spl[1]);
	
	message.guild.fetchMember(message.author).then(member => {
  
        member.voiceChannel.join()
        .then(connection => {
			console.log("Playing...");
			//var toPlay = spl[1];

			var toPlay = queue[0];
			const stream = ytdl(toPlay, {filter : 'audioonly'});
			
			const activeStream = connection.playStream(stream, streamOptions);
			
			printNP(message,0);

			
			//console.log(connection);
			activeStream.on('end', () => {
				// End stream if empty queue, otherwise play
				queue.shift();
				titles.shift();
				if(queue.length == 0)
				{
					message.channel.send("Queue empty. Disconnecting");
					connection.disconnect();
				}
				else
				{
					playMusic(message);
				}
			})

        })
		
        .catch(err => {
            console.log(err);
        });
    });
	
}

//add song to queue
var enqueue = function(str,callback)
{
	ytdl.getInfo(str, function(err, info){
		titles.push(info.title);
		queue.push(str);
		callback();
	});
}


//print now playing + queue
var printQueue = function(message)
{
	var i;
	var str = "```\n"
	var np = printNP(message,-1);
	
	str = str + "Now playing: " + np + "\n\n";
	str = str + "Queue:\n";
	
	
	for(i=1;i<queue.length;i++)
	{
		/*ytdl.getInfo(queue[i], function(err, info) {
			//console.log(info.title);
				str = str + i + ". " + info.title + "\n";
		});
		*/
		str = str + i + ". " + titles[i] + "\n";
	}
	str = str + "```";
	
	//send message containing Now Playing and Queue
	message.channel.send(str);
}

//prints currently playing song
var printNP = function(message,x)
{
	/*var npStr;
	ytdl.getInfo(queue[0], function(err, info){
		npStr = (info.title);
		if(x == 0)
		{
			str = "`";
			str = str + "Now playing: " + npStr;
			str = str + "`";
		
			message.channel.send(str);
		}
		else
		{
			return npStr;
		}
	});
	*/
	if(x == 0)
	{
		var str = "`";
		str = str + "Now playing: " + titles[0];
		str = str + "`";
		
		message.channel.send(str);
	}
	else
	{
		return titles[0];
	}

}

//play song hosted locally
var playLocal = function(message,song)
{
	message.guild.fetchMember(message.author).then(member => {
        //console.log(JSON.stringify(member));
        member.voiceChannel.join()
        .then(connection => {
            const activeStream = connection.playFile(song);
			console.log("Playing...");
			
			activeStream.on('end', () => {
                // End stream
				connection.disconnect();
            })
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

var imageEdit = function(message,imgPrefix)
{
	var spl = message.content.split(" ");
	var str = spl[1];
	if(str.indexOf("!") !== -1)
	{
		var userid = str.slice(3,str.length-1);
	}
	else
	{
		var userid = str.slice(2,str.length-1);
	}
	var userobj = message.guild.members.get(userid);
	var url = userobj.user.avatarURL;
	Jimp.read(url, function(err, userAvatar) {
		if(err)
		{
			console.log("error in 1st write");
			throw err;
		}
		else
		{
			userAvatar.resize(50, 50)
			 .quality(100)
			 .write("./meme/avatar.jpg");
		}
			Jimp.read("./meme/" + imgPrefix + ".png", function(err, theImage) {
			if(err)
			{
				console.log("error in 2nd write");
				throw err;
			}
			else
			{
				if(imgPrefix === "yeet")
				{
					theImage.composite(userAvatar, 55, 175)
				}
				else if(imgPrefix === "slap")
				{
					theImage.composite(userAvatar, 75, 265)
				}
				theImage.quality(100)
				.write("./meme/" + imgPrefix + "new.png", function(err, message) {
					if(err)
					{
						console.log("failure writing second image");
					}
				});
			}
		});
	});
		
	
	setTimeout(function() {
		if(imgPrefix === "yeet")
		{
			var fileloc = "./meme/" + imgPrefix + "new.png";   //,imgPrefix + ".png"
			message.channel.send(spl[1] + ", ***YEET!!!***", {file: fileloc});
		}
		else if(imgPrefix === "slap")
		{
			var fileloc = "./meme/" + imgPrefix + "new.png";   //,imgPrefix + ".png"
			message.channel.send(spl[1] + ", *slap!*", {file: fileloc});
		}
	}, 1500);
	
}

client.on('ready', () => {
  console.log("Logged in to Discord.");
  client.user.setGame('with Yggdrasil');
});
client.on("message",onMessage);


client.login(Key.logintoken);