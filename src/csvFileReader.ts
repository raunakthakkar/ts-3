import fs from 'fs'

export abstract class CsvFileReader<T>{
    constructor(public fileName:string){}
    data:T[]=[];
    read():void{
        this.data=fs.readFileSync(this.fileName,{encoding:"utf-8"}).split("\n").
        map((row)=>{return row.split(",")})
        .map(this.maprow)
       
        
    }
    abstract maprow(row:string[]):T
}

