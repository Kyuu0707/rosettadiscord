var page = new XMLHttpRequest();
page.open("http://game.granbluefantasy.jp/#gacha/appear/legend/26141");
page.send(null);
if(page.status == 200)
	dump(page.responseText);
