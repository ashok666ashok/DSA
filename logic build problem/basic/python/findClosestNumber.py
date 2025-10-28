def findClosestNumber(n,m):
    q = int(n/m)
    # first probability
    n1 = m * q
    
    # secind probability
    if (m*n) > 0:
        n2 = m * (q+1)
    else:
        n2 = m * (q-1)
    
    return n2 if abs(n-n1) > abs(n-n2) else n1
    
    
print(findClosestNumber(13,5))
