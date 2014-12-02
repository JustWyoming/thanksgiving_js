//Wyoming Telford
//compress String
var stringCompress =function(str){
	var stringLength = str.length;
	var emptyString = "";
	var count = 1;
	for(var i = 0; i< stringLength; i++){
		if(i !== stringLength -1){
		 	if(str.charAt(i)===str.charAt(i-1)){
			count++;
			}
			else { 
				emptyString = emptyString + count.toString() + str.charAt(i-1);
				count=1;
			}
		}
	else {
		if (str.charAt(i) === str.charAt(i - 1)) {
		count++;	
		emptyString = emptyString + count.toString() + str.charAt(i-1);
		}
		else {
			emptyString = emptyString + count.toString() + str.charAt(i-1) + str.charAt(i);
		}
	}
	}
	return emptyString.replace(/1/g, "");
}

var x = stringCompress("AAASSSDDDDRDDSASSDDDSSSAD");

console.log(x);


