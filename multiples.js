clet num1 = 5;
let num2 = 15;

let triple = num1 * 3;
let twice = num2 * 2;

if (twice % triple == 0) {
    console.log(triple + " is a multiple of " + twice + "\nThe result is " + twice / triple);
}

if (twice % triple != 0) {
    console.log(triple + " is not multiple of " + twice);
}

