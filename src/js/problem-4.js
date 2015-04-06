/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
function problem4() {
	var prod;
	var palindrome = 0;

	for (var i = 100; i <= 999; i++) {
		for (var j = 100; j <= 999; j++) {
			prod = i * j;
			if (prod.toString() === prod.toString().split('').reverse().join('') && prod > palindrome) {
				palindrome = prod;
			}
		}
	}

	return palindrome;
}