def reverseDigit(num:int)->int:
    reverseDigit:int=0
    while num!=0:
        lastDigit = num % 10
        reverseDigit = (reverseDigit * 10) + lastDigit
        num = num // 10
    return reverseDigit
    
print(reverseDigit(386))
