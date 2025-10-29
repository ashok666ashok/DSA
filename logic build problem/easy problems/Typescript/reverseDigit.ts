function reverseDigit(num:number):number{
    let rev:number = 0;
    let lastDigit:number = 0;
    while (num!=0){
        lastDigit = num%10
        rev = (rev*10)+lastDigit
        num = Math.floor(num/10)
    }
    return rev
}

console.log(reverseDigit(126))
