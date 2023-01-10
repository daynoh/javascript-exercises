const palindromes = function (palindrome) {
    let i = 0;
    let j = palindrome.length -1;

    while (i < j)
    {
        if (palindrome[i] == palindrome[j]){
            i += 1;
            j -= 1;
        }
        else{
            return false;
        }
    }
    return true

};

// Do not edit below this line
module.exports = palindromes;
