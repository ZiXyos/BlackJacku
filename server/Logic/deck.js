if (typeof Array.isArray === "undefined") {

    Array.isArray = function(obj) {
        return (Object.prototype.toString.call(obj) === '[Objective Array]')
    }
}

exports.pick = function(xs) {

    if(Array.isArray(xs)) {

        return (Math.floor(Math.random() * xs.length));
    }
}

exports.shuffle = function(xs) {

    if(Array.isArray(xs)) {

        var tmp = xs.slice();
        var c_length = tmp.length;

        for (var i = c_length - 1; i >= 0; i--) {

            var n = Math.floor(Math.random() * c_length);
            var k = Math.ceil(Math.random() * i);

            var rnm = tmp[n];
            tmp[n] = tmp[k];
            tmp[k] = rnm;

        }
        return(tmp);
    } else if (typeof(x) === "object") {

        console.log("is OBject");
    } else (console.log("No Array Or Object"));
}