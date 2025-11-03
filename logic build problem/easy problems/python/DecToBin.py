def decTObin(n:int)->int:
    bin =[]
    while n>0:
        bit = n % 2
        bin.append(str(bit))
        n //= 2
    bin.reverse()
    return "".join(bin)
print(decTObin(12))
