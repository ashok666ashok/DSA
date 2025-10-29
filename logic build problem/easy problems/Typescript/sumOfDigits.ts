function sumOfDigits(num:number):number{
    let sum:number=0;
    while(num!=0){
        let lastDigit:number=num%10
        sum += lastDigit
        num = Math.floor(num / 10)
    }
    return sum;
}

console.log(sumOfDigits(687))
