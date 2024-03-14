
const timer = function(...seconds) {
  
  let secondsFiltered = seconds.filter((num) => num > 0 && typeof num === 'number');

  const secondsSorted = secondsFiltered.sort(function(a, b){ return a - b } );

  for (const val of secondsSorted) {
    let x = 0;
    x += val * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, x);
  }
};

timer(5, 6, 11, 2, 1); // returns beeps at indicated seconds
timer(); // returns immediately without beeps
timer(2, 4, -1, -6, -5);
timer('hello', 'world', 2, 3);
