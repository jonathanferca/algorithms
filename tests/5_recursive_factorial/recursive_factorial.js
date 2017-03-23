/**
 *
 * Algorithms - Recursive Factorial
 *
 **/

function factorial(n) {
	if(n === 0) {
		return 1;
	}

	return factorial(n - 1) * n;
}


/**
 *
 * Testing
 *
 **/

console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(5));