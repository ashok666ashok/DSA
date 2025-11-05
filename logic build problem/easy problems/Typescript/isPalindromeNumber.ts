function is_palindromeNumber(n:number):boolean{
    let s:string = Math.abs(n).toString()
    let len:number = s.length
    let half:number = Math.floor(len/2)
    for(let i:number = 0;i<half;i++){
        if(s[i] != s[len - i -1]){
            return false
        }
    }
    return true
}
console.log(is_palindromeNumber(12321))
