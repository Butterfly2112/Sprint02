function sortEvenOdd(){
    arr.sort(function(a, b) {
        if (a % 2 === 0 && b % 2 !== 0 ) {
            return -1;
        }
        if (a % 2 !== 0 && b % 2 === 0) {
        return 1;
        }
        return a - b;
     });
}