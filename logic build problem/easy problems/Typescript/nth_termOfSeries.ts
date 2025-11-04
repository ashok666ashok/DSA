function nth_termOfSeries(n:number):number{ // time - O(n) and space - O(1)
    let nth_term:number = 0 ;
    for(let i:number=1;i<=n;i++){
        nth_term += i ;
    }
    return nth_term ;
}

console.log(nth_termOfSeries(5)) // time -  O(1) and space - O(1)

function nth_term(n:number):number{
    let nth_term:number = (n * (n+1) / 2)
    return nth_term ;
}

console.log(nth_term(5))
