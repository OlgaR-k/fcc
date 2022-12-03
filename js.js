function maxIntChain(n) {
    if (n < 5) return -1;

    let c = 2;
    let d = n - c;
    let rez = -1;

    while ( c < d ) {

        if (rez < c*d ) {
            rez = c * d;
        }
        c++;
        d--;
    }
    return rez; // an integer
}

console.log(maxIntChain(26));