function buildingOcean(heights){
    const start = heights.length-1;
    const result = [start];
    for(let i = heights.length - 2; i >= 0; i--){
        let currBuilding = heights[i];
        let lastBuilding = heights[result[result.length - 1]];
        if(currBuilding > lastBuilding){
            result.push(i)
        }
    }
    return result.reverse();
}
const heights = [4, 2, 3, 1]
console.log(buildingOcean(heights));