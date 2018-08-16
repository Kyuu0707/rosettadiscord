var rchance = .885;
var srchance = .085;
var ssrchance = .030;

var roll = function()
{
	var str = "```html\n";
	var appended;
	var number;
	number = Math.floor(Math.random()*200);
	if(number < 177)
	{
		appended = "★★";
	}
	else if(177 <= number && number < 194)
	{
		appended = "★★★";
	}
	else
	{
		appended = "★★★★";
	}
	return str + appended + "```";

}

var roll10 = function()
{
	var list = "```html\n";
	var number;
	var i;
	for(i = 0;i<10;i++){
		number = Math.floor(Math.random()*200);
		if(i==9 && number < 194)
		{
			list = list + "★★★" + ", ";
		}
		else if(i==9 && number >= 194)
		{
			list = list + "★★★★" + ", ";
		}
		else if(number < 177)
		{
			list = list + "★★" + ", ";
		}
		else if(177 <= number && number < 194)
		{
			list = list + "★★★" + ", ";
		}
		else
		{
			list = list + "★★★★" + ", ";
		}
		//console.log(number);
	}
	list = list.substring(0,list.length - 2) + "```";
	//console.log(list);
	return list;
}

module.exports = {
	"roll10": roll10,
	"roll": roll
}