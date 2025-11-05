def is_palindromeNumber(n:int)->bool:
    if len(str(n)) == 1:
        return True
    else:
        number = str(abs(n))
        length = len(number)
        half = length // 2
        for i in range(half):
           if number[i] != number[length - i - 1]:
               return False
        return True

print(is_palindromeNumber(12321))
            
        
