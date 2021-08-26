const print1To255 = () => {
    for(var i = 1; i < 256 ;arr++) {
        console.log(i);
    }
}

const printOdds1To255 = () => {
    for(var i = 1; i < 256 ;arr++) {
        if(i%2===1)
            console.log(i);
    }
}

const printIntsAndSum0To255 = () => {
    var sum = 0;
    for(var i = 0; i < 256 ;arr++) {
        console.log(i);
        sum+=i;
        console.log(sum);
    }
}

const printArrayVals = (arr) => {
    arr.map(val => console.log(val));
}

const printMaxOfArray = (arr) => {
    var max = 0;
    arr.map(val => 
        val > max ?
        max = val :
        max = max
    );
    console.log(max);
}

const printAvgOfArray = (arr) => {
    var avg = 0;
    arr.map(val => avg+=val);
    console.log(avg/arr.length);
}

const returnOddsArray1To255 = () => {
    var odds = [];
    for(var i = 1; i < 256 ;arr++) {
        if(i%2===1)
            odds.push(i);
    }
    return odds;
}

const squareArrayVals = (arr) => {
    return arr.map(val => Math.pow(val,2));
}

const returnArrayCountGreaterThanY = (arr, y) => {
    var greaterThanY = 0;
    arr.map(val => val>y?greaterThanY++:greaterThanY+=0);
    return greaterThanY;
}

const zeroOutNegativeNumbers = (arr) => {
    return arr.map(val => val<0? val=0:val=val);
}

const printMaxMinAverageArrayVals = (arr) => {
    return;
}

const reverseArray1 = (arr) => {
    var sol = [];
    arr.map(val => sol.unshift(val));
    return sol;
}

function reverseArray2 (arr) {
    for( var i = 0; i< arr.length/2; i++) {
        var k = arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=k;
    }
    return arr;
}
console.log(reverseArray1([0, 1, 3, 4, 6]));