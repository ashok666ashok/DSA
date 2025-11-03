function decTObin(n:number):string{
    let bin:String[]=[];
    let bit:number
    while(n>0){
        bit = n % 2;
        bin.push(bit.toString())
        n = Math.floor(n/2)
    }
    return bin.reverse().join('')
}
console.log(decTObin(12))
