// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function multiplesOfThreeButNotAll() {
    for (var i = -300; i < 1; i += 3) {
        if (i == -6 || i == -3) {
            continue;
        }
        console.log(i);
    }
}

multiplesOfThreeButNotAll()
