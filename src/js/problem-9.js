/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a^2 + b^2 = c^2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */
function problem9() {
	for (var i = 1; i <= 1000; i++) {
		for (var j = 1; j <= 1000; j++) {
			for (var k = 1; k <= 1000; k++) {
				if (triple(i, j, k) && i + j + k === 1000) {
					return i * j * k;
				}
			}
		}
	}

	return false;
}