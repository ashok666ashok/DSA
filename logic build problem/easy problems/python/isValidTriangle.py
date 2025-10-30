def isValidTriangle(a:int,b:int,c:int)->bool:
    if((a + b) <= c or (a + c) <= b or (b + c) <= a):
        return False
    else:
        return True
        
print(isValidTriangle(1,10,12))
