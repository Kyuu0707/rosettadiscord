var rChance = .82;
var srChance = .15;
var ssrChance = .03;

var charaSSR = ["Amira", "Cagliostro", "Charlotta", "Gawain", "Jeanne d'Arc", "Lady Grey", "Lancelot", "Nezahualpilli", "Siegfried", "SSR Vira", "Yuel", "Agielba", "Albert", "Aletheia", "SSR Aliza", "Altair", "Aoidos", "Arriet", "Arulumaya", "Ayer", "Beatrix", "Carmelina", "Catherine", "Cerberus", "Chat Noir", "Clarisse", "De La Fille", "Eustace", "SSR Feena", "SSR Ferry", "Forte", "Ghandagoza", "Hallessena", "Heles", "Izmir", "Jeanne d'Arc (Dark)", "Juliet", "Korwa", "Lennah", "Lilele", "Lily", "Melleau", "Metera (Wind)", "Metera (Fire)", "Narmaya", "Nemone", "Percival", "SSR Petra", "Romeo", "SSR Rosamia", "SSR Sara", "Sarunan (Light)", "Sarunan (Dark)", "Seruel", "Silva", "Societte (Water)", "Societte (Fire)", "Sophia", "Vampy", "Vaseraga", "Veight", "SSR Yodarha", "Yngwie", "Zahlhamelina", "Zeta"];

var sumSSR = ["Athena", "Macula Marius", "Medusa", "Apollo", "Vortex Dragon", "Dark Angel Olivia", "Grani", "Quetzalcoatl", "Twin Elements", "Oceanus", "Baal", "Nezha", "Siren", "Odin", "Satan", "Lich", "Cybele", "Satyr", "Neptune", "Garuda", "Prometheus", "Ca Ong", "Gilgamesh", "Morrigna", "Hector", "Anubis", "Sethlans", "Bonito", "Tezcatlipoca", "Setekh"];

var lowWeightSumSSR = ["Agni", "Varuna", "Titan", "Zephryus", "Zeus", "Hades", "Kaguya", "Lucifer", "Bahamut", "Grand Order"];

var roll10 = function()
{
	var list = "```";
	var number;
	var i;
	var ssr;
	for(i = 0;i<10;i++){
		number = Math.floor(Math.random()*99);
		if(i==9 && number < 97)
		{
			list = list + determineSR() + ", ";
		}
		else if(i==9 && number >= 97)
		{
			list = list + determineSSR() + ", ";
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
			list = list + determineSSR() + ", ";
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

//SR char after weight adjustment: 71
//SR nonchar: 36
//SR summon: 20

var determineSSR = function()
{
	var rand;
	rand = Math.floor(Math.random()*133);
	if(rand < 5)
	{
		return lowWeightSumSSR[Math.floor(Math.random()*lowWeightSumSSR.length)];
	}
	else if(rand > 34)
	{
		return charaSSR[Math.floor(Math.random()*charaSSR.length)];
	}
	else
	{
		return sumSSR[Math.floor(Math.random()*charaSSR.length)]
	}
}

module.exports = {
	"roll10": roll10
}