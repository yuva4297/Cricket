"use strict";
exports.__esModule = true;
var Scorer_1 = require("./Scorer");
var scorer = new Scorer_1.Scorer();
//const data = [];
var data = [
    {
        "runScored": 0,
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
    }
];
// for(var i=0;i<data.length;i++)
// {
//     scorer.calculateScore(data[0]);
// }
//scorer.calculateScore(data);
// data.forEach(ball=>
// {
//     scorer.calculateScore(ball);
// })
// data.forEach(function(obj: Object) {
//     scorer.calculateScore(obj);
// });
scorer.addFirstBatsmanDetail(data[0]);
scorer.printScore();
