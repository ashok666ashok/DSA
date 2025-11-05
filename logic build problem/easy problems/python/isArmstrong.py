def isArmstrong(n:int)->bool:
    number = str(n)
    digit = len(number)
    total = 0
    for i in number:
        total += int(i)**digit
    
    return total == n
    
print(isArmstrong(153))
            
