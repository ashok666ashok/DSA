function findSum(num:number):number{
    let sum:number = 0
    let i:number = 1
    while(i<=num){
        sum += i
        i++
    }
    return sum
}

console.log(findSum(3)) //6
console.log(findSum(5)) //15
