var myAtoi = function(s) {
  let max   =   2147483647;
  let min   =   -2147483648;
  let output=   '';
  let constant  = 1;
  for(let i=0;i<s.length;i++){
    if(s[i] == '0'){
        if(output.length == 0)continue;
        else{
          output+=  s[i];
        }
    }
    else if(s[i] == ' '){
      if(s[i-1] == '0' || s[i-1] == '-' || s[i-1] == '+' || output.length !== 0)break;
      if(output.length == 0)continue;
    }
    else if(s[i] == '-' || s[i] == '+'){

        if(s[i-1] == '0' || s[i-1] == '-' || s[i-1] == '+' || output.length !== 0 )break;
        constant    =   s[i] == '-'?-1:1;
        continue;
    }
    else if(isNaN(Number(s[i])) == true){
        break;
    }
    else{
        output+=    s[i];
    }
  }
  if(output.length == 0){
    return 0;
  }
  let parsed  = Number(output)*constant;
  if(parsed >max){
    return max;
  }
  else if(parsed < min){
    return min;
  }
  else{
    return parsed;
  }
};

const s = "    -88827   5655  U";
console.log(myAtoi(s));