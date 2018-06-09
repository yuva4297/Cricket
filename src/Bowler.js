"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Player_1 = require("./Player");
var Bowler = /** @class */ (function (_super) {
    __extends(Bowler, _super);
    function Bowler(name) {
        var _this = _super.call(this, name) || this;
        _this.numberOfRunsGiven = 0;
        _this.numberOfBallsBowled = 0;
        _this.numberOfwickets = 0;
        _this.numberOfMaiden = 0;
        return _this;
    }
    Bowler.prototype.addRunsGiven = function (runs) {
        this.numberOfRunsGiven += runs;
    };
    Bowler.prototype.addBallsBowled = function () {
        this.numberOfBallsBowled += 1;
    };
    Bowler.prototype.addWickets = function (wicket) {
        this.numberOfwickets += wicket;
    };
    Bowler.prototype.addMainden = function (maiden) {
        this.numberOfMaiden += maiden;
    };
    Object.defineProperty(Bowler.prototype, "runsGiven", {
        get: function () {
            return this.numberOfRunsGiven;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bowler.prototype, "ballsBowled", {
        get: function () {
            return this.numberOfBallsBowled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bowler.prototype, "wicketCount", {
        get: function () {
            return this.numberOfwickets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bowler.prototype, "maidenCount", {
        get: function () {
            return this.numberOfMaiden;
        },
        enumerable: true,
        configurable: true
    });
    return Bowler;
}(Player_1.Player));
exports.Bowler = Bowler;
