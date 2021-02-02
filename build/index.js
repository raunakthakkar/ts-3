"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this is my index file for third project that is file reader
var matchReader_1 = require("./matchReader");
var utils_1 = require("./utils");
var myFile = new matchReader_1.matchReader("football.csv"); // this is a very general code to read any file and extract 
myFile.read(); //a 2 dimension array which initally contains string in each row 
// counting how many times manu win the match
var countManuWin = function () {
    var manuWins = 0;
    var matches = myFile.data;
    for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
        var match = matches_1[_i];
        if (match[1] === "Man United" && match[5] === utils_1.MatchResult.HomeWin) {
            manuWins += 1;
        }
        else {
            if (match[2] === "Man United" && match[5] === utils_1.MatchResult.AwayWin) {
                manuWins += 1;
            }
        }
    }
    return manuWins;
};
console.log(countManuWin());
console.log(myFile.data[0][0]);
