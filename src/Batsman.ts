import { Player } from "./Player";
import { Bowler } from "./Bowler";
import { Fielder } from "./Fielder";

export class Batsman extends Player
{
    numberOfRunsScored: number;
    numberOfBallsFaced: number;
    isOut: boolean;
    dismissalType?: string | null;
    fielder?: Fielder | null;
    bowler?: Bowler | null;
    constructor(playerName: string)
    {
        super(playerName);
        this.bowler = null;
        this.dismissalType = null;
        this.fielder = null;
        this.isOut = false;
        this.numberOfBallsFaced = 0;
        this.numberOfRunsScored = 0;
    }
    addRuns(runs: number)
    {
        this.numberOfRunsScored += runs;
    }
    addBallsFaced()
    {
        this.numberOfBallsFaced += 1;
    }
    addOutStatus(status: boolean)
    {
        this.isOut = status;
    }
    addDismissalTypeInfo(dismissalType: string, bowler: Bowler, fielder: Fielder)
    {
        this.dismissalType = dismissalType;
        this.bowler = bowler;
        this.fielder = fielder;
    }
    get totalNumberOfRunsScored()
    {
        return this.numberOfRunsScored;
    }
    get numberOfBallsBatted()
    {
        return this.numberOfBallsFaced;
    }
    get dismissalTypeOfTheBatsman()
    {
        return this.dismissalType;
    }
    get fielderDetails()
    {
        return this.fielder;
    }
    get bowlerDetails()
    {
        return this.bowler;
    }
    
}