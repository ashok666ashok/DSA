function isArmstrong(n:number):boolean{
    let num:string=n.toString();
    let digit:number=num.length;
    let total:number=0;
    for (let i of num){
        total += parseInt(i)**digit
    }
    return total === n
}

console.log(isArmstrong(153))
