module.exports = function solveEquation(equation) {
  // your implementation
  let arr = [];
  let abc = equation.replace(/\s/g, '');
  abc = abc.replace("x^2", '');
  abc = abc.replace("x", '');
  abc = abc.split('*');

  let a = abc[0];
  let b = abc[1];
  let c = abc[2];

  
  let d = Math.pow(b, 2) - (4 * a * c);

 
  let x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
  let x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));

  if (x1 > x2) {
    arr.push(x2);
    arr.push(x1);
  } else {
    arr.push(x1);
    arr.push(x2);
  }
  return arr;
}


