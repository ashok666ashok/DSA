function isPerfect(n:number):boolean{
    let sum:number = 0
    for(let i:number = 1; i < n; i++){
        if(n % i === 0){
            sum += i;
        }
    }
    return sum === n
}

console.log(isPerfect(28))
