function highAndLow(numbers) {
  let a = numbers.split(" ").map((x) => +x);
  a.sort((a, b) => b - a);

  let b = [];
  let first = a[0];
  let last = a.slice(-1)[0];
  b.push(first, last);

  return b.join(" ");
}



highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");