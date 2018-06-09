import { Team } from "./Team";
import { Batsman } from "./BatsMan";
import { Bowler } from "./Bowler";
import { datatype } from "./datatype";

export class Scorer
{
    listOfTeams: Array<Team>;
    currentBowler: Bowler | null;
    currentBattingTeam: Team | null;
    currentBowlingTeam: Team | null;
    
    currentStricker: Batsman | null;
    check: number;
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
    
    calculateScore(ball:datatype )
    {
        this.check += 1;
        if(this.check%6==1)
        {
            const bowler = this.createBowler(ball.bowlerName);
            this.currentBowler = bowler;
        }
        this.currentStricker = this.checkBatsmanAvailablityInList(ball.batsmanName);
        if(this.currentStricker === null)
        {
            this.currentStricker = this.createBatsMan(ball.batsmanName);
            this.addBatsMan(this.currentStricker);
        }

        this.updateBatsmanDetail(ball);
        this.updateBowlerDetail(ball);
        this.updateTeamDetail(ball);
        // if(ball.isOut)
        // {
        //     if(ball.dismissalType === 'Run Out')
        //     {
        //         this.updateBatsmanDetail(ball);
        //         this.update
                
        //         // for(var i=0;i<this.currentBattingTeam.batsManList.length;i++)
        //         // {
        //         //     if(this.currentBattingTeam.batsManList[i].playerName === ball.batsmanName)
        //         //     {
        //         //         this.currentBattingTeam.batsManList[i].isOut = true;
        //         //         this.currentBattingTeam.batsManList[i].addRuns(ball.runsScored);
        //         //         this.currentBattingTeam.batsManList[i].dismissalType = ball.dismissalType;
        //         //         this.currentBattingTeam.batsManList[i].numberOfBallsFaced += 1;
        //         //         break;
        //         //     }
        //         // }
        //         this.currentBowler.addWickets(1);
        //     }
        // }
        
        
    }

    updateBatsmanDetail(ball: datatype)
    {

    }
    updateBowlerDetail(ball: datatype)
    {

    }
    updateTeamDetail(ball: datatype)
    {

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

    }
}