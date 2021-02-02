// this is my index file for third project that is file reader
import {matchReader} from './matchReader'
import {MatchResult} from './utils'

let myFile= new matchReader("football.csv")// this is a very general code to read any file and extract 
myFile.read()   //a 2 dimension array which initally contains string in each row 

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
console.log(myFile.data[0][0])