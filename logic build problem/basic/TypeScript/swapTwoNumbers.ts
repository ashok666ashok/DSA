function swapTwoNumbers(a:number,b:number):any{
    let temp:number;
    console.log("before swap a="+a+" and b="+b)
    temp = a
    a = b
    b = temp
    console.log( "after swap a="+a+" and b="+b)
}

swapTwoNumbers(5,8)
