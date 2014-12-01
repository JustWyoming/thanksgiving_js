//Wyoming Telford
//compress String

var inputPattern = "AAASSSDDDDRDDSASSDDDSSSAD" 
var minimized = [];

for(var i = 0; i< inputPattern.length; i++){
	minimized.push(inputPattern[i]);
	minimized.splice(0,3,6,10,11,13,14,15,17,20,23,24); 
}
console.log(inputPattern);
