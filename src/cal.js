function sum(i, j) {
    return i + j;
}

function minus(i, j) {
    return i - j;
}

function mul(i, j) {
    return i * j;
}

function once(fn) {
    // initial variable
    var returnValue, called = false;

    // return function
    return function () {
        // if called => defined false to true then apply returnValue as input args
        if (!called) {
            called = true;
            // apply this to args then return as returnValue
            returnValue = fn.apply(this, arguments);
        }
        return returnValue
    }
}
module.exports = { sum, minus, mul, once }