import { Batsman } from "./BatsMan";
import { Bowler } from "./Bowler";

export class Team
{
    numberOfRunsScored: number;
    numberOfWickets: number;
    batsMans: Array<Batsman>;
    bowlers: Array<Bowler>;
    constructor(private teamName: string)
    {
        this.numberOfRunsScored = 0;
        this.numberOfWickets = 0;
        this.batsMans = [];
        this.bowlers = [];
    }
    addRunsScored(runs)
    {
        this.numberOfRunsScored += runs;
    }
    addWickets(wicket)
    {
        this.numberOfWickets += wicket;
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