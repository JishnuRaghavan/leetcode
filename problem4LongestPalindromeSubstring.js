var longestPalindrome = function(s) {
    let i   =   0;
    let prevPal =   s[0];
    while(i<s.length){
        if(prevPal.length >=s.length){
            break;
        }
        let flag    =   0;
        let str =   s.slice(i);
        function palindromeCheck(str){
            if(str.length<2){
                return;
            }
            let first   =   0;
            let last    =   str.length-1;
            while(first<last){
                if(str[first] == str[last]){
                    first++;
                    last--;
                    flag    =   1;
                }
                else{
                    let n   =   str.slice(0,-1);
                    return palindromeCheck(n);
                }
            }
            if(flag == 1 && prevPal.length < str.length){
                prevPal =   str;
                return prevPal;
            }
        }
        palindromeCheck(str);
        i++;
    }
    return prevPal;
};

const s = 'cbbdbbc';
console.log(longestPalindrome(s));







































































































































