/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */
function problem7() {
	var i = 0;
	var n = 0;

	while (n <= 9007199254740991) {
		if (isPrime(n)) {
			i++;
			if (i === 10001) { break; }
		}
		n++;
	}

	return n;
}