/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
function problem5() {
	var n = 1;
	while (n <= 9007199254740991) {
		for (var i = 1; i <= 20; i++) {
			if (n % i !== 0) {
				n++;
				break;
			} else if (i === 20) {
				return n;
			}
		}
	}

	return false;
}