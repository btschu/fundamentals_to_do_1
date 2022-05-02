// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

function countingTheDojoWay() {
    for (var i = 1; i < 101; i++) {
        if (i % 10 == 0) {
            console.log("Dojo");
        }
        else if (i % 5 == 0) {
            console.log("Coding");
        }
        else {
            console.log(i);
        }
    }
}

countingTheDojoWay()
