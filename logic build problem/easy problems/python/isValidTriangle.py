function isValidTriangle(a:number,b:number,c:number):boolean{
    if((a + b) <= c || (a + c) <= b || (b + c) <= a){
        return false
    }else{
        return true
    }
}

console.log(isValidTriangle(7,10,5))
