//Wyoming Telford
//object pairs

var obj = {
    "Anil": "Bridgpal",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
}

var theNamed = function(object){
	var newArray = [];
	for(key in object){
		newArray.push( [key, object[key]])
	}
	return newArray;
};
console.log(theNamed(obj));