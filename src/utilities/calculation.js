export const calculatePower = (numGiven) => {
  let n = numGiven - 1;
  while ((n & n - 1) !== 0) {
    n = n & n - 1;
  }
  n = n << 1;
}

export const namesFillBye = (names) => {
  // make this a function later (rounds up to the next power of 2);
  const numGiven = names.length;
  const n = calculatePower(numGiven);

  console.log("numGiven: " + numGiven);
  console.log("nextPowerOf2: " + n);
  for (let i = 0; i < n - numGiven; i++) {
    names.push("BYE");
  }
}

