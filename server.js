var prompt = require('prompt');
var request = require('request');

prompt.start();

prompt.get(['league', 'from', 'to'], function(err, result) {
    console.log('Command line input received');
    promptValidator(result.league, result.from, result.to);
});

function promptValidator(league, from, to) {
    console.log(league.toLowerCase());
    console.log(from);
    console.log(to);
    if(league.toLowerCase() =='premier league' 
    || league.toLowerCase() == 'barclays premier league') {
        apiRequest(from, to);
    }
}

function apiRequest(from, to) {
    request({
        uri: 'https://api.crowdscores.com/v1/matches?competition_id=2&from=' + from + '&to=' + to,
        method: 'GET',
        headers: {'x-crowdscores-api-key': '16d3b40b80c7466da94d8da362a19e7b'},
    }, function(error, res, body) {
        console.log(JSON.parse(body));
    });
}
