// Question 1: Find the First Non-Repeated Character in a String

// Write a function that takes a string as input and returns the first non-repeated character in the string. If there are no non-repeated characters, return null.

// Example:
// Input: "programming"
// Output: "p" (as 'p' is the first non-repeated character)

const firstNonRepeatedCharacter = (str) => {
	// time Complexity: O(n^2)
	// space Complexity: O(n) // n is the number of characters in str
	let repeated = [];
	str = str.split('');
	for (let i = 0; i < str.length; i++) {
		let isRepeated = false;
		if (repeated.includes(str[i])) {
			isRepeated = true;
			continue;
		}
		for (let j = i + 1; j < str.length; j++) {
			if (str[j] == str[i]) {
				repeated.push(str[i]);

				isRepeated = true;
				continue;
			}
		}
		if (!isRepeated) {
			return str[i];
		}
	}
	return null;
};

const firstNonRepeated = (str) => {
	// time Complexity : O(n)
	// space Complexity : O(1) / n is the number of characters in str
	const charCount = {};
	for (let char of str) {
		charCount[char] = (charCount[char] || 0) + 1;
	}
	for (let char of str) {
		if (charCount[char] === 1) {
			return char;
		}
	}
	return null;
};

console.log(firstNonRepeated('pprogramming'));
