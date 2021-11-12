let input = (process.argv).splice(2);

if (input.length !== 0) {
  for (let time of input) {
    if((typeof Number(time) === 'number') && (Number(time) >= 0)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * Number(time));
    } else {
      continue;
    }
  }
} 

