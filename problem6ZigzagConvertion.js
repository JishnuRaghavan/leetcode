var convert = function(s, numRows) {
  let outputArr = [];
  let k = 0;
  if(numRows == 1){
    return s;
  }
  for(let i=0;i<numRows;i++){
    let j = i;
    let diff    = (numRows-1)*2;
    let newVal  = diff-i;
    while(j < s.length || newVal < s.length){
      if(j<s.length){
        outputArr[k++]  = s[j];
      }
      if(newVal%diff != 0 && newVal < s.length && newVal != j){
        outputArr[k++]  = s[newVal];
      }
      newVal+=  diff;
      j+= diff;
    }
  }
  return outputArr.join('');
};

//"PAHNAPLSIIGYIR"
const s = 'paypalishiring'
console.log(convert(s,3));