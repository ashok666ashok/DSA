function GCD(a:number,b:number){
    let result:number = Math.min(a,b)
    if(result > 0){
        while(result != 0){
            if(a % result === 0 && b % result === 0){
                break;
            }else{
                result --;
            }
        }
        return result
    }
}

console.log(GCD(20,28))
