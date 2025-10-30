function factorial(n:number):number{
    let fact:number = 1;
    let i:number = 2
    while(i<=n){
        fact *= i
        i++
    }
    return fact
}
console.log(factorial(5))
