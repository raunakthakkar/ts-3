"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = exports.stringToDate = void 0;
//converting strings into date  
function stringToDate(dateString) {
    var date = dateString.split("/");
    return new Date(parseInt(date[2]), parseInt(date[1]) - 1, parseInt(date[0]));
}
exports.stringToDate = stringToDate;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
