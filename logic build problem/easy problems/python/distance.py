import math
def distance(x1:int,y1:int,x2:int,y2:int)->bool:
    dx = x2 - x1
    dy = y2 - y1
    return math.sqrt((dx * dx) + (dy * dy))
        
print("%.6f"%distance(3, 4, 4, 3))
