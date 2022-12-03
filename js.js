function digitalRoot(n) {
    let rez = n;

    while (rez >= 10 ) {
        rez = String(rez).split('').reduce( (sum, current) => sum + +current, 0);
    }

    return rez;
  }

console.log(digitalRoot(942  ));