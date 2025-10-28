def checkEvenOrOdd(num):
    if type(num):
        return "Not a Number"
    else:
        return "even" if num % 2 == 0 else "odd"

print(checkEvenOrOdd(2)) #even
print(checkEvenOrOdd(3)) #odd
    
