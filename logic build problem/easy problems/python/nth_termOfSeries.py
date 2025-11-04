def nth_termOfSeries(n:int)->int: #time - o(n) and space - o(1)
    nthTerm = 0
    for i in range(1,n+1):
        nthTerm += i
    return nthTerm
    
print(nth_termOfSeries(5))


def nth_term(n:int)->int: #time - o(1) and space - o(1)
    return int(n * (n+1) / 2)
    
print(nth_term(5))
