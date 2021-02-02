"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchReader = void 0;
var utils_1 = require("./utils");
var matchReader = /** @class */ (function () {
    function matchReader(reader) {
        this.reader = reader;
        this.matchReaderData = [];
    }
    matchReader.prototype.load = function () {
        this.reader.read();
        this.matchReaderData = this.reader.data.map(function (row) {
            return [
                utils_1.stringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    };
    return matchReader;
}());
exports.matchReader = matchReader;
