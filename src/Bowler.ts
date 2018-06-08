import { Player } from "./Player";

export class Bowler extends Player
{
    numberOfRunsGiven: number;
    numberOfBallsBowled: number;
    numberOfwickets: number;
    numberOfMaiden: number;
    constructor(name: string)
    {
        super(name);
        this.numberOfRunsGiven = 0;
        this.numberOfBallsBowled = 0;
        this.numberOfwickets = 0;
        this.numberOfMaiden = 0;
    }
    addRunsGiven(runs:number)
    {
        this.numberOfRunsGiven += runs;
    }
    addBallsBowled(balls:number)
    {
        this.numberOfBallsBowled += balls;
    }
    addWickets(wicket: number)
    {
        this.numberOfwickets += wicket;
    }
    addMainden(maiden: number)
    {
        this.numberOfMaiden += maiden;
    }
    
    get runsGiven()
    {
        return this.numberOfRunsGiven;
    }
    get ballsBowled()
    {
        return this.numberOfBallsBowled;
    }
    get wicketCount()
    {
        return this.numberOfwickets;
    }
    get maidenCount()
    {
        return this.numberOfMaiden;
    }
    

}