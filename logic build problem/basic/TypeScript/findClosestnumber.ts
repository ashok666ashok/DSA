function findClosestNumber(n:number,m:number):number{
    let q:number=Math.floor(n/m)
    // first pobabality
    let n1:number=m*q
    
    // second probabilty
    let n2:number;
    if((m*n)>0){
       n2 = m*(q+1) 
    }else{
        n2 = m*(q-1)
    }
     
    return Math.abs(n-n1) > Math.abs(n-n2) ? n2 : n1
}

console.log(findClosestNumber(13,5))
