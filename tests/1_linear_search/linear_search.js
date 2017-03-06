/**
 *
 * Algorithms - Linear Search
 *
 **/

function linearSearch(inputArray, targetValue) {
	for (var index = 0; index < inputArray.length; index++) {
		if(inputArray[index] === targetValue) {
			console.log('Found targetValue '+targetValue+' at index: '+index);
			return index;
		}
	}

	return -1;
}

/**
 *
 * Testing
 *
 **/
 
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

linearSearch(primes, 73);