function pointsNumber(radius){
    let count = 0;
    let rSquared = radius * radius;
    for (let x = -radius; x <= radius; x++){
        let maxY = Math.floor(Math.sqrt(rSquared - x * x));
        count += (2 * maxY + 1);
    }
    return count;
}