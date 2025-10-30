function distance(x1:number,y1:number,x2:number,y2:number):number{
    const dx = x2 - x1
    const dy = y2 - y1
    return Math.sqrt((dx * dx) + (dy * dy))
}

console.log(distance(3, 4, 4, 3).toFixed(6))
