const printOdds1To20 = () => {
    for(var i = 1; i < 20;i++)
        if(i%2===1)
            console.log(i);
}

console.log("printing odds 1-20:");
printOdds1To20();

const printDecreasingMultiplesOf3 = (val) => {
    for(var i = val; i > 0;i--)
        if(i%3===0)
            console.log(i);
}

console.log("printing decreasing multiples of 3 from 100:");
printDecreasingMultiplesOf3(100);

const printSequence = (arr) => {
    for(var i = 0; i<arr.length;i++)
        console.log(arr[i]);
}

console.log("printing sequence of array:");
printSequence([4, 2.5, 1, 0.5, -2, -3.5]);

const sigma = (val) => {
    var sum = 0;
    for(var i = 1; i<=val; i++)
        sum+=i;
    console.log(sum);
}

console.log("printing sum of values from 1-100:");
sigma(100);

const factorial = (val) => {
    var product = 1;
    for(var i = 1; i<=val; i++)
        product*=i;
    console.log(product);
}

console.log("printing product of values from 1-12:");
factorial(12);