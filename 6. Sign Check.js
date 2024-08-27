function signCheck(num1, num2, num3) {
    function firstSecM(num1, num2) {
        return num1 * num2;
    }
    let firstSecRes = firstSecM(num1, num2);
    let final = firstSecRes * num3;

    if (final < 0) {
        console.log(`Negative`);
    } else {
        console.log(`Positive`);

    }
}
signCheck(5,
    12,
    -15);
