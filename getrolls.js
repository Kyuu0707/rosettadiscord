const fs = require('fs');
const request = require('request');

const url = "http://game.granbluefantasy.jp/#gacha/appear/legend/26281";

getDOMFromURL(url);

function getDOMFromURL(url)
{
    request({uri: url}, function(err, res, body) {
    	if(!err && res.statusCode == 200)
    	{


    		//console.log();

    		//console.log(gacha);

    	}
    	else{
    		console.log(err);
    	}
    });
}