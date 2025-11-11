def squareRoot(n:int)->int:
    res = 1
    while res * res <= n:
        res += 1
    return res-1
    
print(squareRoot(9))
