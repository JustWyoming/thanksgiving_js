//Wyoming Telford
// print prime

//Take a number, and print all primes up to and including that number.

var totallyPrime = function(n){
	var isPrime =function(num){
		if(isNaN(num)) {return false;}
		if(num === 1) { return true;}
		if(num === 2) { return true;}
		for(var i = 2; i < num; i++){
			if(num%i ===0 ) {return false} 
				} 
		return true;
	}
		
	var numHolder = [];
	for(var i = 1; i <= n; i++){
		if(isPrime(i) === true)
			numHolder.push(i)
	}
	return numHolder;
};
	

console.log(totallyPrime(119));