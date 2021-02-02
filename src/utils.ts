
    //converting strings into date  
export  function stringToDate(dateString:string):Date{
        let date=dateString.split("/")
    return new Date(parseInt(date[2]),parseInt(date[1])-1,parseInt(date[0]))
}

export enum MatchResult{HomeWin="H",AwayWin="A",Draw="D"}
