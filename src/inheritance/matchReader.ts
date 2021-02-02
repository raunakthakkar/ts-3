// creating matchReader class because of matchData hence for every different type of csv file 
// a new file will be made and the absract method maprow will be made returning the appropripate type of file 


import {CsvFileReader} from './csvFileReader'
import {stringToDate,MatchResult} from '../utils'
type matchData=[Date,string,string,number,number,MatchResult,string]

export class matchReader extends CsvFileReader<matchData>{

    maprow(row: string[]):matchData{
        return[
            stringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]            
        ]
    }
}