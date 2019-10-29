var repeat = function (elem) {
    // returns an array with element elem repeated 3 times.
    var n = 3;
    var arr = [];

    for (var i = 0; i <= n - 1; i++) {
        arr = arr.concat(elem);
    };

    return arr;
};

var reformat = function (str) {
    var result = str.replace(/[aeiou]/gi, '').toLowerCase();
    return result.charAt(0).toUpperCase() + result.slice(1);
}

var next_binary_number = function (elem) {
    var size = elem.length
    var lastArrayValue = elem[size - 1]

    if (lastArrayValue === 0) {
        elem.pop();
        elem.push(1);
    } else if (lastArrayValue === 1) {
        elem.pop();
        elem.push(0);
        elem.push(0);
    }
    return elem
}