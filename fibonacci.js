function fibs(num) {
    let seq = [0,1];
    let a = 0;
    let b = 1;
    for (let i=2; i< num ; i++){
        let c = a + b;
        seq.push(c);
        a = b;
        b = c;
    }
    return seq;
}

console.log(fibs(8));

function fibsRec(n) {
    if (n < 1) return 'Error: input must be greater than 0';
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    // recursive step: fibsRec(n - 1)
    const arr = fibsRec(n - 1);
  
    // return arr concat'd with sum of last 2 nums
    return arr.concat(arr[n - 3] + arr[n - 2]);
  }
  
  console.log(fibsRec(6));