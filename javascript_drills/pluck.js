// Wyoming Telford
// Thanksgiving Javascript Drill

//Pluck


var pluck = function(array, key){
	var newArray = array.map(function(currentValue){
		return currentValue[key];
	});
		return newArray;	
	};




var albums = [
    {'name': 'Gossamer', 'artist': 'Passion Pit'},
    {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
    {'name': 'Time to Pretend', 'artist': 'MGMT'}
];

 var plucked = pluck(albums, "artist")
 		 console.log(plucked);
 
 

 