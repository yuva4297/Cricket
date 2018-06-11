import { Scorer } from "./Scorer";
import { Datatype } from "./datatype";
import { Team } from "./Team";

const scorer = new Scorer();



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
let data =[ {
    "runsScored": 1,
    "isOut": true,
    "dismissalType": 'Run Out',
    "dismissalInfo": {
        "fielderName": 'Root',
        "hasBatsmanCrossed": true,
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
]
 
 
    
    const team1 = new Team("Inida");
    const team2 = new Team("Australia");
    scorer.addTeams(team1, team2);

    
    data.forEach((ball) => {
       
        scorer.calculateScore(ball);
    });

scorer.printScore();
