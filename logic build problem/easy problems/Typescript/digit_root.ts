function digit_root(n:number):number{
    if(n==0){
        return 0
    }else if(n % 9 === 0){
        return 9
    }else{
        return n % 9
    }
}

console.log(digit_root(5674))
