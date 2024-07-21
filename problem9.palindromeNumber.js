var isPalindrome = (x)=>{
  let input = x.toString();
  let first = 0;
  let last  = input.length-1;

  while(first<last){
    if(input[first] !== input[last]){
      return false;
    }
    first++;
    last--;
  }
  return true;
}

const s = 121;
console.log(isPalindrome(s));