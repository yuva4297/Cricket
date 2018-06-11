"use strict";
exports.__esModule = true;
var BatsMan_1 = require("./BatsMan");
var Bowler_1 = require("./Bowler");
var Fielder_1 = require("./Fielder");
var Scorer = /** @class */ (function () {
    function Scorer() {
        this.check = 0;
        this.listOfTeams = [];
        this.currentBowler = null;
        this.currentBattingTeam = null;
        this.currentBowlingTeam = null;
        this.currentStricker = null;
    }
    Scorer.prototype.createBatsMan = function (name) {
        var batsman = new BatsMan_1.Batsman(name);
        return batsman;
    };
    Scorer.prototype.createBowler = function (name) {
        var bowler = new Bowler_1.Bowler(name);
        this.addBowler(bowler);
        return bowler;
    };
    Scorer.prototype.addBatsMan = function (batsman) {
        this.currentBattingTeam.addBatsMan(batsman);
    };
    Scorer.prototype.addBowler = function (bowler) {
        this.currentBowlingTeam.addBowler(bowler);
    };
    Scorer.prototype.addTeams = function (battingTeam, bowlingTeam) {
        this.currentBattingTeam = battingTeam;
        this.currentBowlingTeam = bowlingTeam;
    };
    Scorer.prototype.calculateScore = function (ball) {
        this.check += 1;
        if (this.check % 6 == 1) {
            var bowler = this.createBowler(ball.bowlerName);
            this.currentBowler = bowler;
        }
        this.currentStricker = this.checkBatsmanAvailablityInList(ball.batsmanName);
        if (this.currentStricker === null) {
            this.currentStricker = this.createBatsMan(ball.batsmanName);
            this.addBatsMan(this.currentStricker);
        }
        this.updateTeamDetail(ball);
        this.updateBatsmanDetail(ball);
        this.updateBowlerDetail(ball);
    };
    Scorer.prototype.updateBatsmanDetail = function (ball) {
        if (ball.isOut) {
            var fielder = new Fielder_1.Fielder(ball.dismissalInfo.fielderName);
            this.currentStricker.addDismissalTypeInfo(ball.dismissalType, this.currentBowler, fielder);
            this.currentStricker.addOutStatus(ball.isOut);
            this.currentStricker.addBallsFaced();
        }
        else if (ball.isExtra && (ball.extraType === 'LBW' || ball.extraType === 'Byes')) {
            this.currentStricker.addBallsFaced();
        }
        else {
            this.currentStricker.addRuns(ball.runsScored);
            this.currentStricker.addBallsFaced();
        }
    };
    Scorer.prototype.updateBowlerDetail = function (ball) {
        if (ball.isOut && ball.dismissalType != 'Run Out') {
            this.currentBowler.addWickets(1);
        }
        if (!ball.isExtra || ball.extraType == 'NoBall' || ball.extraType == 'Wide') {
            this.currentBowler.addRunsGiven(ball.runsScored);
        }
        this.currentBowler.addBallsBowled();
    };
    Scorer.prototype.updateTeamDetail = function (ball) {
        this.currentBattingTeam.addRunsScored(ball);
        if (ball.isOut) {
            this.currentBattingTeam.addWickets();
        }
    };
    Scorer.prototype.checkBatsmanAvailablityInList = function (name) {
        for (var i = 0; i < this.currentBattingTeam.batsManList.length; i++) {
            if (this.currentBattingTeam.batsManList[i].playerName === name) {
                return this.currentBattingTeam.batsManList[i];
            }
        }
        return null;
    };
    Scorer.prototype.printScore = function () {
        var tab = "\t";
        console.log("India Vs England");
        console.log("Batsman" + tab + tab + "OutStatus" + tab + "RunsScored" + tab + "BallsFaced");
        for (var i = 0; i < this.currentBattingTeam.batsManList.length; i++) {
            console.log(this.currentBattingTeam.batsManList[i].playerName + tab + tab + this.currentBattingTeam.batsManList[i].isOut + tab + tab + this.currentBattingTeam.batsManList[i].totalNumberOfRunsScored + tab + tab + this.currentBattingTeam.batsManList[i].numberOfBallsBatted);
        }
        console.log("\n");
        console.log("Bowler" + tab + tab + "Overs" + tab + "RunsGiven" + tab + "Wickets");
        for (var i = 0; i < this.currentBowlingTeam.bowlersList.length; i++) {
            console.log(this.currentBowlingTeam.bowlersList[i].playerName + tab + tab + this.currentBowlingTeam.bowlersList[i].ballsBowled / 6 + tab + tab + this.currentBowlingTeam.bowlersList[i].runsGiven + tab + tab + this.currentBowlingTeam.bowlersList[i].wicketCount);
        }
        console.log("\n");
        console.log("Total Score:" + tab + tab + this.currentBattingTeam.totalScore + tab + "for" + tab + this.currentBattingTeam.totalWickets);
    };
    return Scorer;
}());
exports.Scorer = Scorer;
