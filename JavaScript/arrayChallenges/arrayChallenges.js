const alwaysHungry = (arr) => {
    var foods = arr.filter(val => val === "food");
    if(foods.length === 0 )
        console.log("I'm Hungry");
    else 
        foods.map(val => console.log("yummy"))
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);


function highPass(arr, cutoff) {
    return arr.filter(val => val > cutoff);
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


function betterThanAverage(arr) {
    // calculate the average
    var avg = 0;
    arr.map(val => avg+=val);
    avg=avg/arr.length;

    // values greater than avg
    return arr.filter(val => val > avg).length;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function reverse(arr) {
    var rev = [];
    arr.map(val => rev.unshift(val))
    return rev;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length<n)
        fibArr.push(fibArr[fibArr.length-2]+fibArr[fibArr.length-1]);
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
