"use strict";
exports.__esModule = true;
var Scorer_1 = require("./Scorer");
var Team_1 = require("./Team");
var scorer = new Scorer_1.Scorer();
// let data = [  
//     {
//         ""runsScored"":0,
//         ""isOut"": true,
//         ""dismissalType"": 'Run Out',
//         ""dismissalInfo"": {
//             ""fielderName"": 'Root',
//             ""hasBatsmanCrossed"": true,
//         },
//         ""batsmanName"": 'Rahul',
//         ""bowlerName"": 'Anderson'
//     },
//     {
//         ""runsScored"": 1,
//         ""isOut"": false,
//         ""batsmanName"": 'Rohit',
//         ""bowlerName"": 'Anderson'
//     },
//     {
//         ""runsScored"": 4,
//         ""isOut"": false,
//         ""batsmanName"": 'Kohli',
//         ""bowlerName"": 'Anderson'
//     },
//     {
//         ""runsScored"": 4,
//         ""isOut"": false,
//         ""batsmanName"": 'Kohli',
//         ""bowlerName"": 'Anderson'
//     }
//     ];
var data = [{
        "runsScored": 1,
        "isOut": true,
        "dismissalType": 'Run Out',
        "dismissalInfo": {
            "fielderName": 'Root',
            "hasBatsmanCrossed": true
        },
        "batsmanName": 'Rahul',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 1,
        "isOut": false,
        "batsmanName": 'Rohit',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 4,
        "isOut": false,
        "batsmanName": 'Kohli',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 1,
        "isOut": false,
        "batsmanName": 'Kohli',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 6,
        "isOut": false,
        "batsmanName": 'Rohit',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 6,
        "isOut": false,
        "batsmanName": 'Rohit',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 6,
        "isOut": false,
        "batsmanName": 'Kohli',
        "bowlerName": 'woakes'
    },
    {
        "runsScored": 1,
        "isOut": false,
        "batsmanName": 'Kohli',
        "bowlerName": 'woakes'
    },
    {
        "runsScored": 0,
        "isOut": true,
        "dismissalType": 'Caught',
        "dismissalInfo": {
            "fielderName": 'Butcher',
            "hasBatsmanCrossed": false
        },
        "batsmanName": 'Rohit',
        "bowlerName": 'woakes'
    },
    {
        "runsScored": 4,
        "isOut": false,
        "batsmanName": 'Yuvraj',
        "bowlerName": 'woakes'
    },
    {
        "runsScored": 3,
        "isOut": false,
        "batsmanName": 'Yuvraj',
        "bowlerName": 'woakes'
    },
    {
        "runsScored": 6,
        "isOut": false,
        "batsmanName": 'Kohli',
        "bowlerName": 'woakes'
    },
    {
        "runsScored": 0,
        "isOut": false,
        "batsmanName": 'Yuvraj',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 0,
        "isOut": true,
        "dismissalType": 'Caught',
        "dismissalInfo": {
            "fielderName": 'Butcher',
            "hasBatsmanCrossed": false
        },
        "batsmanName": 'Yuvraj',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 0,
        "isOut": false,
        "batsmanName": 'Dhoni',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 0,
        "isOut": false,
        "batsmanName": 'Dhoni',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 0,
        "isOut": false,
        "batsmanName": 'Dhoni',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 0,
        "isOut": false,
        "batsmanName": 'Dhoni',
        "bowlerName": 'Anderson'
    },
    {
        "runsScored": 6,
        "isOut": false,
        "batsmanName": 'Kohli',
        "bowlerName": 'Broad'
    },
    {
        "runsScored": 1,
        "isOut": false,
        "batsmanName": 'Kohli',
        "bowlerName": 'Broad'
    },
    {
        "runsScored": 6,
        "isOut": false,
        "batsmanName": 'Dhoni',
        "bowlerName": 'Broad'
    },
    {
        "runsScored": 6,
        "isOut": false,
        "batsmanName": 'Dhoni',
        "bowlerName": 'Broad'
    },
    {
        "runsScored": 0,
        "isOut": false,
        "isExtra": true,
        "extraType": 'byes',
        "extraInfo": {
            "runsOffered": 2
        },
        "batsmanName": 'Dhoni',
        "bowlerName": 'Broad'
    },
    {
        "runsScored": 6,
        "isOut": false,
        "batsmanName": 'Dhoni',
        "bowlerName": 'Broad'
    }
];
var team1 = new Team_1.Team("Inida");
var team2 = new Team_1.Team("Australia");
scorer.addTeams(team1, team2);
data.forEach(function (ball) {
    scorer.calculateScore(ball);
});
scorer.printScore();
