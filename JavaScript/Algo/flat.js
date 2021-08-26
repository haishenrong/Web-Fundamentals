const flatten = (arr2D) => {
    var flat = [];
    var k =0;
    for(var i = 0; i<arr2D.length;i++){
        for(var j = 0; j<arr2D[0].length;j++){
            flat.push(arr2D[i][j]);
        }
    }
    return flat;
}

console.log(flatten([ [2, 5, 8], [3, 6, 1], [5, 7, 7] ]));




/*
const flatten2 = (arr2D) => {
    var flat = [];
    arr2D.map(arr => arr.map(val => flat.push(val)));
    return flat;
}

console.log(flatten2([ [2, 5, 8], [3, 6, 1], [5, 7, 7] ]));*/