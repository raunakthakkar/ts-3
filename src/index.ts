// this is my index file for third project that is file reader
import {CsvFileReader} from './csvFileReader'
import {matchReader} from './matchReader'
import {MatchResult} from './utils'

let myFile= new CsvFileReader("football.csv")// this is a very general code to read any file and extract 
let MatchReader= new matchReader(myFile)   //a 2 dimension array which initally contains string in each row
MatchReader.load()

// counting how many times manu win the match
let countManuWin=():number=>{
    let manuWins=0
    let matches=myFile.data
    for (let match of matches){
        if(match[1]==="Man United" && match[5]===MatchResult.HomeWin){
manuWins+=1
        }
        else{
            if (match[2]==="Man United" && match[5]===MatchResult.AwayWin){
                manuWins+=1     
            }
        }
    }
    return manuWins
}

console.log(countManuWin())
console.log(MatchReader.matchReaderData)