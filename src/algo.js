// 10! = 10 * 9! or 2! = 2 * 1 and 0! = 1
function factorial(n) {
    if (typeof (n) == 'number') {
        if (n == 1) {
            return n * 1
        } else {
            return n * factorial(n - 1)
        }
    } else {
        return false
    }
}

function isLeapYear(year) {
    if (typeof (year) == 'number' && year > 0 && year === parseInt(year)) {
        if (year % 4 == 0 && year % 100 != 0 && year % 400 != 0) {
            return 'is leap year'
        } else {
            return 'is not leap year'
        }
    } else {
        return false;
    }
}

// process
// arr = [2, 3, 4, 1]
// min = 2
// if min > 3 => min = 2
// if min > 4 => min = 2
// if min > 1 => min = 1
// return 1

function findMin(arr) {
    var min = arr[0];
    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i]
            }
        }
        return min;
    }else {
        return 'arr must to have value'
    }
}

function randStr(char){
    const charList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*?!#%&^*+=|'

    var cipher = '', length = charList.length
    for (var i = 0; i < char; i++){
        cipher += charList.charAt(Math.floor(Math.random() * length));
    }
    return cipher;
}

module.exports = { factorial, isLeapYear, findMin, randStr }

// cont http://javascript-html5-tutorial.com/algorithms-and-data-structures-in-javascript.html
// chai document http://chaijs.com/api/bdd/
// add more comment for testing