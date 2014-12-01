//Wyoming Telford 
//zip.js

//zip(array, array2)
// Take two arrays, and combine them.

// create a new empty array. create a function and use .forEach to 
// push to new array return combined array and console log result


var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];


// Monsanto's super Dry version//

// var zip = function(array1, array2){
//  return array1.map(function(artist, index){
//  	return [artist, array2[index]];
//  })		
// }
// console.log(zip(artists, albums));


// Wyoming's long way//

var zip = function(array1, array2){
	var combinedArray = [];
	array1.forEach(function(element,index){
		var newArray =[];
		newArray.push(array1[index])
		newArray.push(array2[index])
		combinedArray.push(newArray)	
	})	
	return combinedArray;
};
var lockedUp = zip(artists, albums);

console.log(lockedUp);

	

