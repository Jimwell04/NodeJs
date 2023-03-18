const { readFile, writeFile } = require('fs')

readFile('./folder/first.txt', 'utf8',(err,result) => {
  if (err) {
    console.log(err);
    return;
  }
  const second = result;
  writeFile(
    './folder/result-async.txt',
    `Result: ${second}`,
    { flag: 'a' },
    (err,result) => {
      if (err,result) {
        console.log(err);
        return;
      }
      console.log(result);
    }
    );
});