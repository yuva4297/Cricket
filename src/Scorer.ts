import { Team } from "./Team";
import { Batsman } from "./BatsMan";
import { Bowler } from "./Bowler";
import { Datatype } from "./datatype";
import { Fielder } from "./Fielder";

export class Scorer
{
    listOfTeams: Array<Team>;
    currentBowler: Bowler | null;
    currentBattingTeam: Team | null;
    currentBowlingTeam: Team | null;
    
    currentStricker: Batsman | null;
    check: number;
    madienCheck: number;
    
    constructor()
    {
        this.check = 0;
        this.listOfTeams = [];
        this.currentBowler = null;
        this.currentBattingTeam = null;
        this.currentBowlingTeam = null;
        this.currentStricker = null;
       
    }
    
    createBatsMan(name: string)
    {
        const batsman = new Batsman(name);
        return batsman;
    }
    createBowler(name: string)
    {
        const bowler = new Bowler(name);
        this.addBowler(bowler);
        
        return bowler;
    }
    addBatsMan(batsman: Batsman)
    {
        this.currentBattingTeam.addBatsMan(batsman);
    }
    addBowler(bowler: Bowler)
    {
        this.currentBowlingTeam.addBowler(bowler);
    }
    addTeams(battingTeam : Team, bowlingTeam : Team)
    {
        this.currentBattingTeam = battingTeam;
        this.currentBowlingTeam = bowlingTeam;
    }
    
    calculateScore(ball:Datatype )
    {
        this.check += 1;
        
        
        if(this.check%6==1)
        {
            const bowler = this.createBowler(ball.bowlerName);
            this.currentBowler = bowler;
            this.madienCheck = 0;
        }
        this.currentStricker = this.checkBatsmanAvailablityInList(ball.batsmanName);
        if(this.currentStricker === null)
        {
            this.currentStricker = this.createBatsMan(ball.batsmanName);
            this.addBatsMan(this.currentStricker);
        }
        this.checkForMaiden(ball);
        this.updateTeamDetail(ball);        
        this.updateBatsmanDetail(ball);
        this.updateBowlerDetail(ball);
        if(this.check%6==0)
        {
            this.updateMaiden();
        }

       
            
    }
    updateMaiden()
    {
        if(this.madienCheck == 6)
        {
            this.currentBowler.addMainden(1);
        }
    }
    checkForMaiden(ball)
    {
        if(ball.runsScored == 0)
        {
            this.madienCheck += 1;
        }
    }

    updateBatsmanDetail(ball: Datatype)
    {
        
        if(ball.isOut)
        {
            const fielder=new Fielder(ball.dismissalInfo.fielderName);
            this.currentStricker.addDismissalTypeInfo(ball.dismissalType, this.currentBowler, fielder);
            this.currentStricker.addOutStatus(ball.isOut);
            this.currentStricker.addBallsFaced();
        }
        else if(ball.isExtra && (ball.extraType === 'LBW' || ball.extraType === 'Byes'))
        {
            this.currentStricker.addBallsFaced();
        }
        else
        {
            this.currentStricker.addRuns(ball.runsScored);
            this.currentStricker.addBallsFaced();
        }
    }
    updateBowlerDetail(ball: Datatype)
    {
        if(ball.isOut && ball.dismissalType!='Run Out')
        {
            this.currentBowler.addWickets(1);
        }
        if(!ball.isExtra || ball.extraType=='NoBall' || ball.extraType == 'Wide')
        {
            this.currentBowler.addRunsGiven(ball.runsScored);
        }
        this.currentBowler.addBallsBowled();
    }
    updateTeamDetail(ball: Datatype)
    {
        
        
        this.currentBattingTeam.addRunsScored(ball);
        if(ball.isOut)
        {
        this.currentBattingTeam.addWickets();
        }
    }
    checkBatsmanAvailablityInList(name: string)
    {
        
        for(var i=0;i<this.currentBattingTeam.batsManList.length;i++)
        {
            if(this.currentBattingTeam.batsManList[i].playerName === name)
            {
                return this.currentBattingTeam.batsManList[i];
            }
        }
        return null;
    }
    
    printScore()
    {
        
        var tab = "\t";
        console.log("India Vs England");
        console.log("Batsman"+tab+tab+"OutStatus"+tab+"RunsScored"+tab+"BallsFaced");
        for(var i=0;i<this.currentBattingTeam.batsManList.length;i++)
        {
            console.log(this.currentBattingTeam.batsManList[i].playerName+tab+tab+this.currentBattingTeam.batsManList[i].isOut+tab+tab+this.currentBattingTeam.batsManList[i].totalNumberOfRunsScored+tab+tab+this.currentBattingTeam.batsManList[i].numberOfBallsBatted)
        }
        console.log("\n");
        console.log("Bowler"+tab+"Overs"+tab+"RunsGiven"+tab+"Wickets"+tab+tab+"Maiden count");
        for(var i=0;i<this.currentBowlingTeam.bowlersList.length;i++)
        {
            console.log(this.currentBowlingTeam.bowlersList[i].playerName+tab+this.currentBowlingTeam.bowlersList[i].ballsBowled/6+tab+this.currentBowlingTeam.bowlersList[i].runsGiven+tab+this.currentBowlingTeam.bowlersList[i].wicketCount+tab+tab+this.currentBowlingTeam.bowlersList[i].maidenCount);
        }
        console.log("\n");
        console.log("Total Score:" +tab+this.currentBattingTeam.totalScore+tab+"for"+tab+this.currentBattingTeam.totalWickets );


    }
}