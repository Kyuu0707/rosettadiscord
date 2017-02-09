var rChance = .82;
var srChance = .15;
var ssrChance = .03;

var charaSSR = ["Amira", "Cagliostro", "Charlotta", "Gawain", "Jeanne d'Arc", "Lady Grey", "Lancelot", "Nezahualpilli", "Siegfried", "Vira", "Yuel", "Agielba", "Albert", "Aletheia", "Aliza", "Altair", "Anthuria", "Aoidos", "Arriet", "Arulumaya", "Ayer", "Beatrix", "Carmelina", "Catherine", "Cerberus", "Chat Noir", "Clarisse", "De La Fille", "Eustace", "Feena", "Ferry", "Forte", "Ghandagoza", "Hallessena", "Heles", "Izmir", "Jeanne d'Arc (Dark)", "Juliet", "Korwa", "Lennah", "Lilele", "Lily", "Marquiares", "Melleau", "Mellisabelle", "Metera (Wind)", "Metera (Fire)", "Narmaya", "Nemone", "Percival", "Petra", "Razia", "Romeo", "Rosamia", "Sara", "Sarunan (Light)", "Sarunan (Dark)", "Seruel", "Silva", "Societte (Water)", "Societte (Fire)", "Sophia", "Vampy", "Vaseraga", "Veight", "Yodarha", "Yngwie", "Yuisis", "Zahlhamelina", "Zeta"];

var sumSSR = ["Athena", "Macula Marius", "Medusa", "Apollo", "Vortex Dragon", "Dark Angel Olivia", "Grani", "Quetzalcoatl", "Twin Elements", "Oceanus", "Baal", "Nezha", "Siren", "Odin", "Satan", "Lich", "Cybele", "Satyr", "Neptune", "Garuda", "Prometheus", "Ca Ong", "Gilgamesh", "Morrigna", "Hector", "Anubis", "Sethlans", "Bonito", "Tezcatlipoca", "Setekh", "Typhon", "Thor"];

var lowWeightSumSSR = ["Agni", "Varuna", "Titan", "Zephryus", "Zeus", "Hades", "Kaguya", "Lucifer", "Bahamut", "Grand Order", "Shiva"];

var ltdSSR = ["Black Knight", "Eugen", "Io", "Katalina", "Lecia", "Lucio", "Mahira", "Rackam", "Rosetta"];

var roll = function()
{
	var str = "```html\n";
	var appended;
	var number;
	number = Math.floor(Math.random()*99);
	if(number < 82)
	{
		appended = determineR();
	}
	else if(82 <= number && number < 97)
	{
		appended = determineSR();
	}
	else
	{
		appended = "<SSR " + determineSSR(0) + ">";
	}
	return str + appended + "```";
}

var rollLegfest = function()
{
	var str = "```html\n";
	var appended;
	var number;
	number = Math.floor(Math.random()*99);
	if(number < 79)
	{
		appended = determineR();
	}
	else if(79 <= number && number < 94)
	{
		appended = determineSR();
	}
	else
	{
		appended = "<SSR " + determineSSR(1) + ">";
	}
	return str + appended + "```";
}

var roll10 = function()
{
	var list = "```html\n";
	var number;
	var i;
	for(i = 0;i<10;i++){
		number = Math.floor(Math.random()*99);
		if(i==9 && number < 97)
		{
			list = list + determineSR() + ", ";
		}
		else if(i==9 && number >= 97)
		{
			list = list + "<SSR " + determineSSR(0) + ">" + ", ";
		}
		else if(number < 82)
		{
			list = list + determineR() + ", ";
		}
		else if(82 <= number && number < 97)
		{
			list = list + determineSR() + ", ";
		}
		else
		{
			list = list + "<SSR " + determineSSR() + ">" + ", ";
		}
		//console.log(number);
	}
	list = list.substring(0,list.length - 2) + "```";
	console.log(list);
	return list;
}

var determineR = function()
{
	var rand;
	rand = Math.floor(Math.random()*7);
	if(rand < 2)
	{
		return "R character";
	}
	else if(rand > 4)
	{
		return "R summon";
	}
	else
	{
		return "R weapon";
	}
}

var determineSR = function()
{
	var rand;
	rand = Math.floor(Math.random()*127)
	{
		if(rand < 20)
		{
			return "SR summon";
		}
		else if (rand > 54)
		{
			return "SR character";
		}
		else
		{
			return "SR weapon";
		}
	}
}

var roll10saber = function()
{
	var list = "```html\n";
	var number;
	var i;
	for(i = 0;i<10;i++){
		number = Math.floor(Math.random()*99);
		if(i==9 && number < 94)
		{
			list = list + determineSR() + ", ";
		}
		else if(i==9 && number >= 94)
		{
			list = list + "<SSR " + determineSSRsaber() + ">" + ", ";
		}
		else if(number < 79)
		{
			list = list + determineR() + ", ";
		}
		else if(79 <= number && number < 94)
		{
			list = list + determineSR() + ", ";
		}
		else
		{
			list = list + "<SSR " + determineSSRsaber() + ">" + ", ";
		}
		//console.log(number);
	}
	list = list.substring(0,list.length - 2) + "```";
	console.log(list);
	return list;
}

var roll10Legfest = function()
{
	var list = "```html\n";
	var legfest = 1;
	var number;
	var i;
	for(i = 0;i<10;i++){
		number = Math.floor(Math.random()*99);
		if(i==9 && number < 94)
		{
			list = list + determineSR() + ", ";
		}
		else if(i==9 && number >= 94)
		{
			list = list + "<SSR " + determineSSR(1) + ">" + ", ";
		}
		else if(number < 79)
		{
			list = list + determineR() + ", ";
		}
		else if(79 <= number && number < 94)
		{
			list = list + determineSR() + ", ";
		}
		else
		{
			list = list + "<SSR " + determineSSR() + ">" + ", ";
		}
		//console.log(number);
	}
	list = list.substring(0,list.length - 2) + "```";
	//console.log(list);
	return list;
}


var determineSSRsaber = function()
{
	var rand;
	rand = Math.floor(Math.random()*9);
	if(rand < 9) {
		return "Yngwie";
	}
	else
	{
		return "Varuna";
	}
}

//SR char after weight adjustment: 72
//SR nonchar: 36
//SR summon: 20

var determineSSR = function(legfest)
{
	var rand;
	var ltdLength = 0;
	
	if (legfest = 1)
	{
		ltdLength = ltdSSR.length;
	}
	
	var baseWeight = (2*charaSSR.length) + (2*sumSSR.length) + lowWeightSumSSR.length + (2*ltdLength);
	rand = Math.floor(Math.random()*baseWeight);
	
	if(rand < lowWeightSumSSR.length)
	{
		return lowWeightSumSSR[Math.floor(Math.random()*lowWeightSumSSR.length)];
	}
	else if(rand > baseWeight - (2*(charaSSR.length + ltdLength)) - 1)
	{
		rand = Math.floor(Math.random()*(charaSSR.length + ltdLength));
		if (rand < ltdLength)
		{
			return ltdSSR[Math.floor(Math.random()*ltdLength)];
		}
		else
		{
			return charaSSR[Math.floor(Math.random()*charaSSR.length)];
		}
		
	}
	else
	{
		return sumSSR[Math.floor(Math.random()*sumSSR.length)]
	}
}

module.exports = {
	"roll10": roll10,
	"roll": roll,
	"roll10saber": roll10saber,
	"roll10Legfest": roll10Legfest,
	"rollLegfest": rollLegfest
}