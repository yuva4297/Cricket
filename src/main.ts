import { Scorer } from "./Scorer";
import { datatype } from "./datatype";
import { Team } from "./Team";

const scorer = new Scorer();
//const data = [];


let data = [  
    {
        "runScored": 0,
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

    const team1 = new Team("Inida");
    const team2 = new Team("Australia");
    scorer.addTeams(team1, team2);

    
    data.forEach(ball => {
        scorer.calculateScore(ball);
    });

scorer.printScore();
