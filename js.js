function nextPal(val) {

    let num1 = val; 
    let nextPalindrome = 0;

    do {
        num1++;
        nextPalindrome = +String(num1).split('').reverse().join('');

    } while ( num1 !== nextPalindrome);

    return nextPalindrome;
}



console.log(nextPal(188));