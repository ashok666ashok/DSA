def nth_fibonacci(n:int)->int: # using iteration methord
    if n==0 or n==1:
        return n
    n1 = 0
    n2 = 1
    current = 0
    while n>=2:
        current = n2 + n1
        n1 = n2
        n2 = current
        n -= 1
    return current

print(nth_fibonacci(5))

def nth_fib(n:int)->int: #recursion methors
    if n <= 1:
        return n
    else:
        return nth_fib(n-1) + nth_fib(n-2)

print(nth_fib(5))
