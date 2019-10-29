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