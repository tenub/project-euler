/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */
function problem10() {
	var sum = 0;

	for (var i = 0; i < 2000000; i++) {
		if (isPrime(i)) { sum += i; }
	}

	return sum;
}