var rareCE = 0.4;
var rareServ = 0.4;
var srCE = 0.12;
var srServ = 0.03;
var ssrCE = 0.04;
var ssrServ = 0.01;


var roll = function()
{
	var str = "```html\n";
	var appended;
	var number;
	number = Math.floor(Math.random()*100);
	if(number < 40)
	{
		appended = "R Craft Essence";
	}
	else if(40 <= number && number < 80)
	{
		appended = "R Servant";
	}
	else if(80 <= number && number < 92)
	{
		appended = "SR Craft Essence";
	}
	else if(92 <= number && number < 96)
	{
		appended = "SSR Craft Essence";
	}
	else if(96 <= number && number < 99)
	{
		appended = "SR Servant";
	}
	else
	{
		appended = "SSR Servant";
	}
	return str + appended + "```";
}

var roll10 = function()
{
	var list = "```html\n";;
	var number;
	var i;
	for(i = 0;i<10;i++)
	{
		number = Math.floor(Math.random()*100);
		if(number < 40)
		{
			list = list + "R Craft Essence";
		}
		else if(40 <= number && number < 80)
		{
			list = list + "R Servant";
		}
		else if(80 <= number && number < 92)
		{
			list = list + "SR Craft Essence";
		}
		else if(92 <= number && number < 96)
		{
			list = list + "<SSR Craft Essence>";
		}
		else if(96 <= number && number < 99)
		{
			list = list + "SR Servant";
		}
		else
		{
			list = list + "<SSR Servant>";
		}

		if(i != 9)
		{
			list = list + ", ";
		}
	}
	list = list + "```";
	return list;
}

module.exports = {
	"roll10": roll10,
	"roll": roll
}