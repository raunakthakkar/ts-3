import {stringToDate,MatchResult} from './utils'
type matchData=[Date,string,string,number,number,MatchResult,string]

interface DataReader{
    data:string[][]
    read():void
}

export class matchReader{
    matchReaderData:matchData[]=[]

    constructor(public reader:DataReader){}
    load():void{
    this.reader.read()
    this.matchReaderData=this.reader.data.map((row:string[]):matchData=>{

    return[
        stringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]          
    ]
    })
    }
}