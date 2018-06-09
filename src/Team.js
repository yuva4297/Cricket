"use strict";
exports.__esModule = true;
var Team = /** @class */ (function () {
    function Team(teamName) {
        this.teamName = teamName;
        this.numberOfRunsScored = 0;
        this.numberOfWickets = 0;
        this.batsMans = [];
        this.bowlers = [];
    }
    Team.prototype.addRunsScored = function (runs) {
        this.numberOfRunsScored += runs;
    };
    Team.prototype.addWickets = function (wicket) {
        this.numberOfWickets += wicket;
    };
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
