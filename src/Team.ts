import { Batsman } from "./BatsMan";
import { Bowler } from "./Bowler";
import { Datatype } from "./datatype";

export class Team
{
    numberOfRunsScored: number;
    numberOfWickets: number;
    batsManList: Array<Batsman>;
    bowlersList: Array<Bowler>;
    constructor(private teamName: string)
    {
        this.numberOfRunsScored = 0;
        this.numberOfWickets = 0;
        this.batsManList = [];
        this.bowlersList = [];
    }
    addRunsScored(ball: Datatype)
    {
       
            this.numberOfRunsScored += ball.runsScored;   
        
    }
    addWickets()
    {
        this.numberOfWickets += 1;
    }
    addBatsMan(batsman:Batsman)
    {
        this.batsManList.push(batsman);
    }
    addBowler(bowler: Bowler)
    {
        this.bowlersList.push(bowler);
    }
    get batsmans()
    {
        return this.batsManList;
    }
    get bowlerList()
    {
        return this.bowlersList;
    }
    get totalScore()
    {
        return this.numberOfRunsScored;
    }
    get totalWickets()
    {
        return this.numberOfWickets;
    }

}