const fizzBuzz = () => {
    for (var i = 1; i<101; i++) {
        var out = "";
        if(i%3===0)
            out+="Fizz";
        if(i%5===0)
            out+="Buzz";
        out === "" 
        ? console.log(i)
        : console.log(out)
    }
}
fizzBuzz();