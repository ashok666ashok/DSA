function nthTermOfAP(a1:number,a2:number,n:number):number{
    if(a1===a2){
        return a1
    }else{
        let diff:number = a2 - a1;
        let i:number = 1;
        let nthTerm:number = a1;
        while(i<n){
           nthTerm += diff
           i++;
        }
        return nthTerm
    }
}

console.log(nthTermOfAP(2,3,4))
