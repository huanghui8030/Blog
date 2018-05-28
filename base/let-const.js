var funcs1 = [];
for (var i = 0; i < 3; i++) {
    funcs1[i] = function () {
        console.log(i);
    };
}
funcs1[0]();//3

var funcs2 = [];
for (var j = 0; j < 3; j++) {
    funcs2[j] = (function (j) {
        return function(){
            console.log(j);
        }
    }(j));
}
funcs2[0]();//0

var funcs3 = [];
for (let i = 0; i < 3; i++) {
    funcs3[i] = function () {
        console.log(i);
    };
}
funcs3[0]();//0


var funcs = [], object = {a: 1, b: 1, c: 1};
for (const key in object) {
    funcs.push(function(){
        console.log(key)
    });
}

funcs[0]() //c
