// Exercise 1
function exercise1(num1) {
    var answer1 = 'num1 is small';
    if (num1 > 10) {
        var str1 = 'The value of num1 is ';
        str2 = ' and is greater than 10';
        answer1 = str1 + num1 + str2;
        return answer1;
    } else {
        return answer1;
    };
};

// Exercise 2
function excercise2(num2) {
    var answer2;
    if (num2 % 2 == 0) {
        answer2 = num2 += ' is even';
        return answer2;
    } else {
        answer2 = num2 += ' is odd';
        return answer2;
    };
};

// Excercise 3
function excercise3(num3) {
    var answer3;
    Math.sign(num3);
    if (Math.sign(num3) === 1) {
        answer3 = num3 += ' is positive';
        return answer3;
    } else if (Math.sign(num3) === -1) {
        answer3 = num3 += ' is negative';
        return answer3;
    } else {
        (Math.sign(num3) === 0 || -0);
        answer3 = num3 += ' is zero';
        return answer3;
    }
};

// Exercise 4
function exercise4(varA, varB) {
    var answer4;
    if (varA == varB) {
        answer4 = 'varA and varB are equal';
        return answer4;
    } else {
        answer4 = 'varA and varB differ';
        return answer4;
    };
};

// Exercise 5
// I assumed passing 'four' and 'five' as parameters would return true since they're both strings of the same length.

// Exercise 6
function exercise6(varA, varB, varC) {
    var answer6
    if (varA == varB && varA && varB != varC) {
        answer6 = true;
        return answer6;
    } else {
        answer6 = false;
        return answer6;
    };
};

// Excercise 7
function exercise7(num7) {
    var answer7;
    switch (num7) {
        case 1:
            answer7 = 'You won!';
            break;
        case 7:
            answer7 = 'You are lucky!';
            break;
        case 101:
            answer7 = 'Welcome to coding 101!';
            break;
        case 1000000:
            answer7 = 'You are one in a million!';
            break;
        default:
            answer7 = 'Thanks for that!';
    };
    return answer7;
};

// Excercise 8
function exercise8(amount1, amount2, minimum, maximum) {
    var answer8;
    if (amount1 >= minimum && amount1 <= maximum && amount2 >= minimum && amount2 <= maximum) {
        answer8 = true
        return answer8;
    } else {
        answer8 = false;
        return answer8;
    };
};

// Exercise 9
function exercise9(item) {
    var answer9;
    if (typeof item == 'number') {
        answer9 = exercise7(item);
    } else {
        answer9 = 'Please send a number, that was a ' + typeof item
    };
    return answer9;
};

//Exercise 10
function exercise10(num10) {
    return num10 % 15 === 0 ? 'Fizz Buzz'
        : num10 % 3 === 0 ? 'Fizz'
            : num10 % 5 === 0 ? 'Buzz'
                : num10;
};



