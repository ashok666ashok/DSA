function oppositeFaceOfDice(n:number):number{
    return n > 7 ? 0 : 7-n
}

console.log(oppositeFaceOfDice(6))
