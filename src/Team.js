"use strict";
exports.__esModule = true;
var Team = /** @class */ (function () {
    function Team(teamName) {
        this.teamName = teamName;
        this.numberOfRunsScored = 0;
        this.numberOfWickets = 0;
        this.batsManList = [];
        this.bowlersList = [];
    }
    Team.prototype.addRunsScored = function (ball) {
        console.log(ball.runsScored);
        this.numberOfRunsScored += ball.runsScored;
    };
    Team.prototype.addWickets = function () {
        this.numberOfWickets += 1;
    };
    Team.prototype.addBatsMan = function (batsman) {
        this.batsManList.push(batsman);
    };
    Team.prototype.addBowler = function (bowler) {
        this.bowlersList.push(bowler);
    };
    Object.defineProperty(Team.prototype, "batsmans", {
        get: function () {
            return this.batsManList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "bowlerList", {
        get: function () {
            return this.bowlersList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "totalScore", {
        get: function () {
            return this.numberOfRunsScored;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "totalWickets", {
        get: function () {
            return this.numberOfWickets;
        },
        enumerable: true,
        configurable: true
    });
    return Team;
}());
exports.Team = Team;
