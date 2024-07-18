var reverse = function(x){

  if(x == 0){
    return 0;
  }
  let max       = Math.pow(2,31)-1;
  let min       = Math.pow(-2,31);
  let input     = Math.abs(x);
  let constant  = x<0?-1:1;

  let outputArr = input.toString().split('');
  outputArr.reverse();
  let output  = Number(outputArr.join(''))*constant;

  if(output < min || output > max){
    return 0;
  }
  return output;
}

let x = -123;
console.log(reverse(x));