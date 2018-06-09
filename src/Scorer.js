"use strict";
exports.__esModule = true;
var BatsMan_1 = require("./BatsMan");
var Scorer = /** @class */ (function () {
    function Scorer() {
        this.listOfTeams = [];
        this.currentBowler = null;
        this.currentBattingTeam = null;
        this.currentBowlingTeam = null;
        this.currentStricker = null;
        this.currentNonStricker = null;
    }
    Scorer.prototype.addFirstBatsmanDetail = function (firstBatsman) {
        var currentBatsman = new BatsMan_1.Batsman(firstBatsman.batsmanName);
        this.currentStricker = currentBatsman;
        console.log(this.currentStricker.playerName);
    };
    Scorer.prototype.calculateScore = function (ball) {
        // console.log(data.);
        // if(ball.isOut == true)
        // {
        // }
    };
    Scorer.prototype.printScore = function () {
    };
    return Scorer;
}());
exports.Scorer = Scorer;
