function nth_fibonacci(n:number):number{ // iterate fibonacci number methord
    if(n==0 || n==1){
        return n;
    }else{
        let n1:number = 0 ;
        let n2:number = 1 ;
        let current:number = n1 + n2 ;
        while(n>2){
            n1 = n2 ;
            n2 = current ;
            current = n2 + n1 ;
            n-- ;
        }
        return current ;
    }
}

console.log(nth_fibonacci(5))
// recuive method function
function nth_fib(n:number):number{
    if(n<=1){
        return n
    }
    return nth_fib(n-1) + nth_fib(n-2)
}

console.log(nth_fib(5))
