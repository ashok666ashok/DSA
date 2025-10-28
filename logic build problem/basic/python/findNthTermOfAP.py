def findNthTermOfAP(a1,a2,n):
    if a1 == a2:
        return a1
    else:
        diff = a2 - a1
        nthTerm = a1
        i = 1
        while i < n:
            nthTerm += diff
            i+=1
        
        return nthTerm
      
print(findNthTermOfAP(1,3,5))
