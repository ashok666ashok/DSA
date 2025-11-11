function floorSquareRoot(n:number):number{
    let res:number = 1
    while(res*res<=n){
        res++;
    }
    return res-1
}
console.log(floorSquareRoot(9))
