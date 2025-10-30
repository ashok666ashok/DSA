function countPairs(n:number):number{
    let count:number = 0
    for(let a:number=1;a<=n;a++){
        for(let b:number=0;b<=n;b++){
            if(a**3 + b**3 === n){
                count++;
            }
        }
    }
    return count;
}

console.log(countPairs(9))
