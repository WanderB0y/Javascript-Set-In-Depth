const pointsArray = [ 10, 20, 10, 30, 15, 15, 15, 35, 60, 10 ];
const pointsSet = new Set();

for( let i = 0; i < pointsArray.length; i++ ){
    pointsSet.add(pointsArray[i])
}
console.log(pointsSet)

for (const points of pointsSet){
   console.log(points);
}

const uniquePoints = new Set(pointsArray);

console.log(uniquePoints)