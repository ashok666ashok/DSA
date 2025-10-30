def GCD(a,b)->int:
    result = min(a,b)
    if result > 0:
        while result != 0:
            if a % result == 0 and b % result == 0:
                break
            else:
                result -= 1
        return result
        
print(GCD(20,28))
