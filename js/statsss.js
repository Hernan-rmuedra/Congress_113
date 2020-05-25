var dataMembers = data.results[0].members;

var statistics = {
    "republicanNumber": 0,
    "democratNumber": 0,
    "indNumber": 0,
    "totalNumber": dataMembers.length,
    "republicanVotesPts": 0,
    "democratVotesPts": 0,
    "independentVotesPts": 0,

    "totalVotesPoints": 0,
    "numerberOfMissedVotes": 0,
    "numerberOfMissedVotesPts": 0,
    "getLeastVotes": 0,
    "getMosttVotes": 0,
    "getLoyalVotesLeast": 0,
    "getloyalVotesMost": 0,

}


function numberOfPartyRepresent() {

    var getNumberR = 0;
    var getNumberD = 0;
    var getNumberID = 0;

    for (i = 0; i < dataMembers.length; i++) {
        if (dataMembers[i].party == 'R') {
            statistics.republicanNumber++;
            getNumberR += dataMembers[i].votes_with_party_pct;
        }
        if (dataMembers[i].party == 'D') {
            statistics.democratNumber++;
            getNumberD += dataMembers[i].votes_with_party_pct;
        }
        if (dataMembers[i].party == 'ID') {
            statistics.indNumber++;
            getNumberID += dataMembers[i].votes_with_party_pct;


        }

    }
    statistics.republicanVotesPts = parseInt(getNumberR / statistics.republicanNumber);
    statistics.democratVotesPts = parseInt(getNumberD / statistics.democratNumber);
    if (getNumberID > 1) {
        statistics.independentVotesPts = parseInt(getNumberID / statistics.indNumber);
    }
    if (getNumberID > 1) {
        statistics.totalVotesPoints = (statistics.republicanVotesPts + statistics.democratVotesPts + statistics.independentVotesPts) / 3;
    } else {
        statistics.totalVotesPoints = (statistics.republicanVotesPts + statistics.democratVotesPts + statistics.independentVotesPts) / 2;
    }
    document.getElementById("infor").innerHTML = (statistics.republicanNumber);
    document.getElementById("infor1").innerHTML = (statistics.democratNumber);
    document.getElementById("infor2").innerHTML = (statistics.indNumber);
    document.getElementById("infor3").innerHTML = (statistics.totalNumber);

    document.getElementById("vote").innerHTML = (statistics.republicanVotesPts);
    document.getElementById("vote1").innerHTML = (statistics.democratVotesPts);
    document.getElementById("vote2").innerHTML = (statistics.independentVotesPts);
    document.getElementById("vote3").innerHTML = (statistics.totalVotesPoints);

}
numberOfPartyRepresent();

function leastEngagedVotes() {

    var leastEngaged = dataMembers.sort(function(a, b) {
        if (a.missed_votes_pct > b.missed_votes_pct) {
            return 1;
        } else if (a.missed_votes_pct < b.missed_votes_pct) {
            return -1;
        } else {
            return 0;
        }
    });

    var pts = dataMembers.length * 0.1;
    statistics.getLeastVotes = leastEngaged.slice(length - pts);
    document.getElementById("least-engaged").innerHTML = "";
    var leastEngaged = statistics.getLeastVotes
    var filaNueva = 0;
    for (i = 0; i < statistics.getLeastVotes.length; i++) {
        var newFila = document.getElementById("least-engaged").insertRow(filaNueva);
        filaNueva++;
        var newCeld1 = newFila.insertCell(0);
        var newCeld2 = newFila.insertCell(1);
        var newCeld3 = newFila.insertCell(2);
        newCeld1.innerHTML = (leastEngaged[i].first_name + ' ' + (dataMembers[i].middle_name || "") + ' ' + dataMembers[i].last_name).link(dataMembers[i].url);
        newCeld2.innerHTML = leastEngaged[i].missed_votes;
        newCeld3.innerHTML = leastEngaged[i].missed_votes_pct;
    }
}
if (document.getElementById('least-engaged')) {
    leastEngagedVotes();
};

function mostEngagedVotes() {
    var mostEngaged = dataMembers.sort(function(a, b) {
        if (a.missed_votes_pct > b.missed_votes_pct) {
            return 1;
        } else if (a.missed_votes_pct < b.missed_votes_pct) {
            return -1;
        } else {
            return 0;
        }
    });
    var pts = dataMembers.length * 0.1;
    statistics.getMosttVotes = mostEngaged.slice(0, pts);
    document.getElementById("most-engaged").innerHTML = "";
    var mostEngaged = statistics.getMosttVotes
    var filaNueva = 0;
    for (i = 0; i < statistics.getMosttVotes.length; i++) {
        var newFila = document.getElementById("most-engaged").insertRow(filaNueva);
        filaNueva++;
        var newCeld1 = newFila.insertCell(0);
        var newCeld2 = newFila.insertCell(1);
        var newCeld3 = newFila.insertCell(2);
        newCeld1.innerHTML = (mostEngaged[i].first_name + ' ' + (dataMembers[i].middle_name || "") + ' ' + dataMembers[i].last_name).link(dataMembers[i].url);
        newCeld2.innerHTML = mostEngaged[i].missed_votes;
        newCeld3.innerHTML = mostEngaged[i].missed_votes_pct;
    }
}
if (document.getElementById('most-engaged')) {
    mostEngagedVotes();
};

function leastLoyalVotes() {
    var leastLoyal = dataMembers.sort(function(a, b) {
        if (a.votes_with_party_pct > b.votes_with_party_pct) {
            return 1;
        } else if (a.votes_with_party_pct < b.votes_with_party_pct) {
            return -1;
        } else {
            return 0;
        }
    });

    var pts = dataMembers.length * 0.1;
    statistics.getLoyalVotesLeast = leastLoyal.slice(length - pts);
    document.getElementById("loyalleast").innerHTML = "";
    var leastLoyal = statistics.getLoyalVotesLeast
    var filaNueva = 0;
    for (i = 0; i < statistics.getLoyalVotesLeast.length; i++) {
        var newFila = document.getElementById("loyalleast").insertRow(filaNueva);
        filaNueva++;
        var newCeld1 = newFila.insertCell(0);
        var newCeld2 = newFila.insertCell(1);
        var newCeld3 = newFila.insertCell(2);
        newCeld1.innerHTML = (leastLoyal[i].first_name + ' ' + (dataMembers[i].middle_name || "") + ' ' + dataMembers[i].last_name).link(dataMembers[i].url);
        newCeld2.innerHTML = leastLoyal[i].total_votes;
        newCeld3.innerHTML = leastLoyal[i].votes_with_party_pct;
    }
}
if (document.getElementById('loyalleast')) {
    leastLoyalVotes();
};

function mostLoyalVotes() {
    var mostLoyal = dataMembers.sort(function(a, b) {
        if (a.votes_with_party_pct > b.votes_with_party_pct) {
            return 1;
        } else if (a.votes_with_party_pct < b.votes_with_party_pct) {
            return -1;
        } else {
            return 0;
        }
    });

    var pts = dataMembers.length * 0.1;
    statistics.getloyalVotesMost = mostLoyal.slice(0, pts);

    document.getElementById("most-loyal").innerHTML = "";
    var mostLoyal = statistics.getloyalVotesMost
    var filaNueva = 0;
    for (i = 0; i < statistics.getloyalVotesMost.length; i++) {
        var newFila = document.getElementById("most-loyal").insertRow(filaNueva);
        filaNueva++;
        var newCeld1 = newFila.insertCell(0);
        var newCeld2 = newFila.insertCell(1);
        var newCeld3 = newFila.insertCell(2);
        newCeld1.innerHTML = (mostLoyal[i].first_name + ' ' + (dataMembers[i].middle_name || "") + ' ' + dataMembers[i].last_name).link(dataMembers[i].url);
        newCeld2.innerHTML = mostLoyal[i].total_votes;
        newCeld3.innerHTML = mostLoyal[i].votes_with_party_pct;
    }
}
if (document.getElementById('most-loyal')) {
    mostLoyalVotes();
};
// var app = new Vue({
//     el: '#app',
//     data: {
//         message: "hola mundo",
//         main: []
//     }

// });

// var urlSenado = "https://api.propublica.org/congress/v1/113/senate/members.json";

// var urlHouse = "https://api.propublica.org/congress/v1/113/house/members.json";


// function getUrl() {
//     if (document.title.includes('senate')) {
//         useUrl = urlSenado;
//     } else if (document.title.includes('house')) {
//         useUrl = urlHouse;
//     } else {};
// };

// getUrl()

// myHeaders = new Headers({
//     "X-API-Key": "it9BvaUjj7DZt62BnS8bbLRjtoWyeGPRk1PLwn6q",
// })
// var misClaves = {
//     headers: myHeaders,
// };
// fetch(useUrl, misClaves)
//     .then(function(resp) {
//         return resp.json()
//     })
//     .then(function(json) {
//         app.main = json.results[0].members
//     })mostEngagedVotes() {
var mostEngaged = this.main.sort(function(a, b) {
    if (a.missed_votes_pct > b.missed_votes_pct) {
        return 1;
    } else if (a.missed_votes_pct < b.missed_votes_pct) {
        return -1;
    } else {
        return 0;
    }
});
var pts = this.main.length * 0.1;
this.getMosttVotes = mostEngaged.slice(0, pts);