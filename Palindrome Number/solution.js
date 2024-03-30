/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversed =  String(x).split('').reverse().join('');
    console.log(reversed);
    return parseInt(reversed) === x;
};

var isPalindromeWithoutConvertingToString = function(x) {
    if (x < 0) return false;
    let reversed = 0;
    let original = x;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return reversed === original;
};

isPalindrome(121); 