const leapYears = function(year) {
    // testing if the year is divisible by 4

    if (year % 4 == 0){
        // checking if year if it's divisible by 100
        if (year % 100 == 0){
            // making sure then it is also divisible by 400
            if (year % 400 == 0)
            {
                return true
            }
            else
            {
                return false
            }
        }
        return true
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
