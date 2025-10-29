def sumOfDigits(num:int)->int:
    sum = 0
    while num!=0:
        lastDigit = num%10
        sum += lastDigit
        num = num // 10
    return sum
    
print(sumOfDigits(261))
