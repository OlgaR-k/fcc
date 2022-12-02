function solution(number){
    if (number < 0) {
      return 0;
    }
    
    let num = new Set();
    let startNumber = 1;
    
    while (startNumber < number ) {
      if ( (startNumber % 3 == 0) || (startNumber % 5 == 0) ) {
        num.add(startNumber);
      }
      startNumber++;
    }
    let sum = 0;

    for (let val of num) {
        sum += val;
      }
    return sum;
  }

    console.log(solution(10));
