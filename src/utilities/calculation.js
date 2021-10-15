
export const calculatePower = (names) => {

    // make this a function later (rounds up to the next power of 2);
    let numGiven = names.length;

    let n = numGiven - 1;
    while ((n & n - 1) !== 0) {
      n = n & n - 1;
    }
    n = n << 1;

    console.log("numGiven: " + numGiven);
    console.log("nextPowerOf2: " + n);
    for (let i = 0; i < n - numGiven; i++) {
      names.push("BYE");
    }
  }

