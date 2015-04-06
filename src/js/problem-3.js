/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143?
 */
function problem3() {
	var lpf = 0;

	for (var i = 0; i < Math.floor(Math.sqrt(600851475143)); i++) {
		if (isPrime(i) && 600851475143 % i === 0) { lpf = i; }
	}

	return lpf;
}