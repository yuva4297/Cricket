import { Team } from "./Team";
import { Batsman } from "./BatsMan";
import { Bowler } from "./Bowler";

export class Scorer
{
    listOfTeams: Array<Team>;
    currentBowler: Bowler | null;
    currentBattingTeam: Team | null;
    currentBowlingTeam: Team | null;
    currentNonStricker: Batsman | null;
    currentStricker: Batsman | null;

    constructor()
    {
       
        this.listOfTeams = [];
        this.currentBowler = null;
        this.currentBattingTeam = null;
        this.currentBowlingTeam = null;
        this.currentStricker = null;
        this.currentNonStricker = null;
    }
    
    
}