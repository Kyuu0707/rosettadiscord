const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume: 1 };
const Key = require("./token.js");
const Jimp = require("jimp");
const rf = require("select-random-file");
const shuffle = require("shuffle-array");
//const ffm = require("ffmetadata");
const mm = require("music-metadata");
const util = require('util');

var Gbf = require("./rollsim.js");
var Bandori = require("./bandorisim.js");
var FGO = require("./fgosim.js");
var eightBallResponse = ["Yes.", "No.","Possibly.","Potentially.","Concentrate and ask again.","Ask again later.","Highly doubtful.","Most likely.","Hahahahaha no.","Yes, definitely.","With certainty.","It is probable.","My sources tell me no.","Haha yeah man","Maybe. Maybe not.","Absolutely.","You betcha.","Nah.","It is known.","Without a doubt."];
const client = new Discord.Client();
var queue = [];
var titles = [];
//const LOCALDIR = "M:/BotPlaylist/";
const LOCALDIR = "M:/Temp/"
var legfest = false;

/*
* Objects for emotes. Second is placeholder cuz messy code
*
*/
const Emotes = {
	joy: './gotoh/flandre3.png',
	bad: './gotoh/sakuya5.png',
	love: './gotoh/remilia4.png',
	snooze: './gotoh/remilia1.png',
	yeesh: './gotoh/remilia3.png',
	smug: './gotoh/sakuya7.png',
	drool: './gotoh/remilia7.png',
	mad: './gotoh/flandre2.png',
	whoa:  './gotoh/remilia8.png',
	kimoi: './gotoh/remilia6.png',
	happy: './gotoh/flandre6.png',
	blush: './gotoh/flandre1.png',
	ganbatte: './sazanamimio/59269695.png',
	ok: './sazanamimio/59269673.png',
	dame: './sazanamimio/59269676.png',
	naruhodo: './sazanamimio/59269694.png',
	bless: './meme/bless.png',
	police: './meme/police.jpg',
	yoink: './meme/yoink.png'
};

const RandEmotes = {
	dab: "a",
	//weewoo: "a",
	boi: "a",
	fight: "a"
};

var onMessage = function(message)
{
	console.log("Got message. " + message.author.id);

	//make sure servers are up
	
	if(!message.guild.available)
	{
		console.log("Guild not available. Returning.");
		return;
	}
	
	//random pout
	else if(message.content === ":T")
	{
		var dir = "./meme/pout/";
		rf(dir, (err, file) => {
			message.channel.sendFile(dir + file);	
		})

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
	
	//jacob
	else if(message.content === "-jacob")
	{
		message.channel.sendFile("./meme/fuuuuck.jpg");
	}

	//bitch
	else if(message.content ==="-bitch")
	{
		message.channel.sendFile("./meme/bitch.jpg")
	}

	//sith
	else if(message.content === "-doit")
	{
		message.channel.sendFile("./meme/doit.jpg")
	}

	//clean Ayana requests
	else if(message.content.startsWith("=music"))
	{
		message.delete({timeout : 2000});
	}

	else if(message.content === "-togglelegfest")
	{
		legfest = !legfest;
		message.channel.send("legfest = " + legfest);
	}

	//GBF 10 draw sim
	else if(message.content === "-10draw")
	{
		//saber meme
		/*if (message.author.id === "131243763325468672")
		{
			message.channel.send(message.author + ", you got\n" + Gbf.roll10saber());
		}*/
		
		if(!legfest)
		{
			//basic
			message.channel.send(message.author + ", you got\n" + Gbf.roll10());
		}
		
		else
		{
			//6%
			message.channel.send(message.author + ", you got\n" + Gbf.roll10Legfest());
		}
	}
	
	//GBF yolo roll sim
	else if(message.content === "-yolo")
	{
		if(!legfest)
		{
			//basic
			message.channel.send(message.author+ ", you got\n" + Gbf.roll());
		}
		else
		{
			//6%
			message.channel.send(message.author + ", you got\n" + Gbf.rollLegfest());
		}
	}

	//BanG Dream 10draw
	else if(message.content === "-bd10")
	{
		message.channel.send(message.author + ", you got\n" + Bandori.roll10());

	}

	//BanG Dream yolo
	else if(message.content == "-bdyolo")
	{
		message.channel.send(message.author+ ", you got\n" + Bandori.roll());
	}

	//FGO 10draw
	else if(message.content === "-f10")
	{
		message.channel.send(message.author + ", you got\n" + FGO.roll10());

	}

	//FGO yolo
	else if(message.content == "-fyolo")
	{
		message.channel.send(message.author+ ", you got\n" + FGO.roll());
	}
	
	//100 rolls
	else if(message.content === "-100draw")
	{
		var str = message.author + ", you got\n";
		for(var i = 0;i < 10; i++)
		{
			if(!legfest)
			{
				str = str + Gbf.roll10();
			}
			else
			{
				str = str + Gbf.roll10Legfest();
			}
		}
		message.channel.send(str);	
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
	
	/*
	**  YEET your enemy  //holy shit fuck
	*/
	else if(message.content.startsWith("-yeet "))
	{
		imageEdit(message,"yeet");
	}
	
	//fish
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
		num = Math.floor(Math.random()*12002);
		if (num > 6002)
		{
			message.channel.send(message.author + ", Heads!");
		}
		else if (num < 6001)
		{
			message.channel.send(message.author + ", Tails!");
		}
		else
		{
			message.channel.send(message.author + ", it landed on its side :thinking:");
		}
	}

	//calls some emote
	else if(message.content.startsWith("-emote "))
	{
		var spl = message.content.split(" ");
		var key = spl[1];
		if(Emotes[key])
		{
			message.channel.send({file : Emotes[key]});
		}
		else if(RandEmotes[key])
		{
			Promise.resolve(getFile(key)).then(myfile => {
				message.channel.send({file : myfile});
			});
		}
	}

	//list emotes
	else if(message.content === "-emotes" || message.content === "-emote")
	{
		//message.channel.send("bad, love, snooze, yeesh, smug, drool, mad, whoa, kimoi, happy, blush, ganbatte, ok, dame, naruhodo");
		str = "";
		for(var key in Emotes)
		{
			str += key += ", ";
		}
		for(var key in RandEmotes)
		{
			str += key += ", ";
		}
		message.channel.send(str.substring(0,str.length-2));
	}
	
	//8ball correction
	else if(message.content === "-8ball")
	{
		message.channel.send(message.author + ", correct usage is '-8ball <question>'");
	}
	
	//ask the 8 ball a question
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
	
	
	//print the queue
	else if(message.content === "-queue")
	{
		if(queue.length > 10)
		{
			message.channel.send("Queue is too long to print xdxd");
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
		if(message.guild.voiceConnection && message.guild.voiceConnection.dispatcher)
		{
			do {
				message.guild.voiceConnection.dispatcher.end();

			if(message.guild.voiceConnection == null) break;

			}while(message.guild.voiceConnection.dispatcher)
			//console.log(queue);
			//console.log("skipped");
			//playManyLocal(message);
			//playMusic(message);
		}

		else
		{
			message.channel.send("Not currently playing.");
		}
	}
	
	/*
	**YOUTUBE
	**Plays or enqueues songs from youtube
	**
	*/
	else if(message.content.startsWith("-play "))
	{
		console.log("Received YouTube play command");
		var spl = message.content.split(" ");
		var error = checkSong(spl[1]);

		if(error)
		{
			message.channel.send("Error with link. Try again");
		}	
		//if queue is empty, play, otherwise, enqueue	
		else
		{
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
		}
	}


	//play a bunch of songs from my local directory
	else if(message.content === "-playall")
	{
		if(queue.length > 0)
		{
			message.channel.sendMessage("fuck you");
			return;
		}

		queue = fs.readdirSync(LOCALDIR);
		//console.log(queue.length);
		shuffle(queue);

		//hahahaha
		async function ree() 
		{
			for(var i = 0; i < queue.length; i++)
			{
				await mm.parseFile(LOCALDIR + queue[i], {native : true})
					.then(function (metadata) {
						//console.log(util.inspect(metadata, {showHidden: false, depth: null}));
						//console.log(metadata['common']['title']);
						titles[i] = (metadata['common']['artist'] || metadata['common']['albumartist'] || metadata['common']['artists']) + " - " + metadata['common']['title'];
					})
					.catch(function (err) {
						console.error(err.message);
					});

			}
		}
		ree();
		//console.log(titles);
		playManyLocal(message);	
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
		if(err) throw(err);
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
		str = str + i + ". " + titles[i] + "\n";
	}
	str = str + "```";
	
	//send message containing Now Playing and Queue
	message.channel.send(str);
}

//prints currently playing song
var printNP = function(message,x)
{
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

//makes sure song exists so that we can deny bad links
var checkSong = function(str)
{
	try {
	ytdl.getInfo(str, function(err, info){
		if(err) {
			throw(err);
			//console.log("error getting link info: ", err);
		}
	});
	} catch(ex) {
		error = true;
		console.log("reee error");
		return error;
	}
	return false;
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

//mess of a function, edits 2 pics for memes
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
		
	//xD
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


//plays songs from local dir
var playManyLocal = function(message)
{
	//var spl = message.content.split(" ");
	
	//enqueue(spl[1]);
	
	message.guild.fetchMember(message.author).then(member => {
  
        member.voiceChannel.join()
        .then(connection => {
			console.log("Playing...");
			//var toPlay = spl[1];

			//console.log(queue);
			var toPlay = queue[0];
			//const stream = ytdl(toPlay, {filter : 'audioonly'});
			
			//const activeStream = connection.playStream(stream, streamOptions);
			const activeStream = connection.playFile(LOCALDIR + toPlay,streamOptions)
			
			printNP(message,0);

			
			//console.log(connection);
			activeStream.on('end', () => {
				// End stream if empty queue, otherwise play
				//comment one of the shifts cuz soft copy
				queue.shift();
				titles.shift();
				if(queue.length == 0)
				{
					message.channel.send("Queue empty. Disconnecting");
					connection.disconnect();
				}
				else
				{
					//console.log(queue);
					function holdup() {
						playManyLocal(message);
					}
					setTimeout(holdup,100);
				}
			})
        })
        .catch(err => {
            console.log(err);
        });
    });
	
}

//gets file from local dir for meme
function getFile(str)
{
	var dir = "./meme/" + str + "/";
	return new Promise((resolve, reject) => {
		rf(dir, (err, file) => {
			if(err) throw(err);
			resolve(dir + file);
		});
	});
}





client.on('ready', () => {
  console.log("Logged in to Discord.");
  client.user.setActivity('with Yggdrasil', {type : 'PLAYING'});
});
client.on("message",onMessage);


client.login(Key.logintoken);