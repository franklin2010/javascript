number = 5;
main=100;
square = number*number;
if (number<100 && square<100){
console.log(number + " is less than " + main+ "\nAnd the square of the of " + number + " is less than " + main);
}
if (number>100 && square>100){
console.log(number + " is greater than " + main + "\nAnd the square of the of " + number + " is greater than " + number);
}
if (number==100 && square>100){
console.log(number + " is equal to " + main + "\nAnd the square of the of " + number+ " is greater than " + main);
}
if (number<100 && square==100){
console.log(number + " is less than "+main+ "\nAnd the square of "+number+ " is equal to "+main);
}
if (number<100 && square>100){
console.log(number + " is less than "+main+"\nAnd the square of the of "+number+" is greater than "+main);
}
