function charToInt(char) {
    switch(char) {
        case 'I': 
        return 1;
        case 'V':
        return 5;
        case 'X':
        return 10;
        case  'L':
        return 50;
        case 'C':
        return 100;
        case 'D':
        return 500;
        case 'M':
        return 1000;
        default: return -1;
    }
}

function romanToNumeric(romanNumber) {
    var num = charToInt(romanNumber.charAt(0));
    var pre, curr;

    for(var i = 1 ; i<romanNumber.length ; i++) {
        curr = charToInt(romanNumber.charAt(i));
        pre = charToInt(romanNumber.charAt(i-1));
        if(curr <= pre) {
            num +=curr;
        } else {
            num = num - pre*2 + curr;
        }
    }
    return num;
}