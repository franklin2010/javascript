for (let counter = 1; counter <= 100; counter++){
	if (counter % 3 ==0 && counter % 5 != 0){
		console.log ("fizz")
		}
	else if (counter % 5 == 0 && counter % 3 != 0){
		console.log ("Buzz")        
	}
	else if (counter % 3 == 0 && counter % 5 == 0 ){
		console.log("FizzBuzz")
	}
	else {
	console.log (counter)
	}
}
