//Wyoming Telford
//isPrime

 
	var startNum = 1;  
	
	//logic the math to return either true if a prime or false if compound number


	var isPrime =function(num) {
   if(isNaN(num)) {return false;}
		if(num === 1) { return true;}
		if(num === 2) { return true;}
        	for(var i = 2; i < num; i++){
			if(num%i ===0 ) {return false} 
				} 
		return true;
	};
console.log(isPrime(119));