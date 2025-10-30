def isPower(x:int,y:int)->bool:
    if x == 1:
        return y == 1
    else:
        pow = 1
        while pow<y:
            pow*=x
        return pow==y
        
print(isPower(10,1000))
