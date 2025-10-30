function isPower(x:number,y:number):boolean{
    if(x === 1){
        return (y === 1)
    }else{
        let pow:number = 1
        while(pow < y){
            pow *= x
        }
        return (pow === y)
    }
}

console.log(isPower(10,1000))
