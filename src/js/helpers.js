/**
 * generate nth fibonacci number using iteration
 * @param {integer} n - index in the sequence
 * @return {integer} value at specified index in the sequence
 */
function fib(n) {
	var a = 0;
	var b = 1;
	var t;

	while (n-- > 0) {
		t = a;
		a = b;
		b += t;
	}

	return a;
}

/**
 * determine if a number is prime
 * @param {integer} n - a number to check
 * @return {boolean} if the number is prime
 */
function isPrime(n) {
	if (n <= 3) { return n > 1; }
	if (n % 2 === 0 || n % 3 === 0) { return false; }
	for (var  i = 5; i * i <= n; i += 6) {
		if (n % i === 0 || n % (i + 2) === 0) { return false; }
	}

	return true;
}

/**
 * parse string into an array of single characters (integers) and compute their product
 * @param {string} string - string of integers
 * @return {integer} final product value
 */
function prod(string) {
	var array = string.split('');
	var product = 1;

	for (var i = 0, l = array.length; i < l; i++) {
		product *= parseInt(array[i]);
	}

	return product;
}

/**
 * calculate the square value of a sum of incrementing integers
 * @param {integer} start - start value
 * @param {integer} end - end value
 * @return {integer} value of the sum squared
 */
function squareOfSums(start, end) {
	var sum = 0;

	for (var i = start; i <= end; i++) {
		sum += i;
	}

	return sum * sum;
}

/**
 * calculate the summation of incrementing integers squared
 * @param {integer} start - start value
 * @param {integer} end - end value
 * @return {integer} value of the sum of squares
 */
function sumOfSquares(start, end) {
	var sum = 0;

	for (var i = start; i <= end; i++) {
		sum += i * i;
	}

	return sum;
}

/**
 * determine if three natural numbers are a pythagorean triple
 * @param {integer} a
 * @param {integer} b
 * @param {integer} c
 * @return {boolean} if a^2 + b^2 === c^2
 */
function triple(a, b, c) {
	return a * a + b * b === c * c;
}