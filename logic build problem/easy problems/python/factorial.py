def factorial(n:int)->int:
    fact = 1
    i = 2
    while i<=n:
        fact *= i
        i += 1
    return fact

print(factorial(5))
