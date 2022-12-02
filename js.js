function numberJoy(n) {
    let arr = String(n).split('');
    let num1 = 0;
    let num2 = 0;

    for (i = 0; i < arr.length; i++ ) {
        num1 += +arr[i];
    }
    // console.log(num1);

    num2 = +String(num1).split('').reverse().join('');
    // console.log(num2);
    return num1 * num2 == n;
    
}

console.log(numberJoy(1729));