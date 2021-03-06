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
var Batsman = /** @class */ (function (_super) {
    __extends(Batsman, _super);
    function Batsman(playerName) {
        var _this = _super.call(this, playerName) || this;
        _this.bowler = null;
        _this.dismissalType = null;
        _this.fielder = null;
        _this.isOut = false;
        _this.numberOfBallsFaced = 0;
        _this.numberOfRunsScored = 0;
        return _this;
    }
    Batsman.prototype.addRuns = function (runs) {
        this.numberOfRunsScored += runs;
    };
    Batsman.prototype.addBallsFaced = function () {
        this.numberOfBallsFaced += 1;
    };
    Batsman.prototype.addOutStatus = function (status) {
        this.isOut = status;
    };
    Batsman.prototype.addDismissalTypeInfo = function (dismissalType, bowler, fielder) {
        this.dismissalType = dismissalType;
        this.bowler = bowler;
        this.fielder = fielder;
    };
    Object.defineProperty(Batsman.prototype, "totalNumberOfRunsScored", {
        get: function () {
            return this.numberOfRunsScored;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batsman.prototype, "numberOfBallsBatted", {
        get: function () {
            return this.numberOfBallsFaced;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batsman.prototype, "dismissalTypeOfTheBatsman", {
        get: function () {
            return this.dismissalType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batsman.prototype, "fielderDetails", {
        get: function () {
            return this.fielder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Batsman.prototype, "bowlerDetails", {
        get: function () {
            return this.bowler;
        },
        enumerable: true,
        configurable: true
    });
    return Batsman;
}(Player_1.Player));
exports.Batsman = Batsman;
