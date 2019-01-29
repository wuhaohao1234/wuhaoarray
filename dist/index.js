function everys(arrs, callback) {
    let arr = [];
    for (var i = 0; i < arrs.length; i++) {
        if (!callback(arrs[i])) {
            return false;
        }
    }
    return true;
}
function somes(arrs, callback) {
    let arr = [];
    for (var i = 0; i < arrs.length; i++) {
        if (callback(arrs[i])) {
            return true;
        }
    }
    return false;
}
function finds(arrs, callback) {
    let arr = [];
    for (var i = 0; i < arrs.length; i++) {
        if (callback(arrs[i])) {
            return arrs[i];
        }
    }
    return false;
}
function maps(arr, callback) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}
function filters(arr, callback) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function forEachs(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(i, arr[i]);
    }
}
function findIndexs(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return i;
        }
    }
}
function joins(arr) {
    let str = '';
    for (var i = 0; i < arr.length; i++) {
        str += arr[i] + ',';
    }
    return str.substring(0, str.length - 1);
}
class Ent {
    constructor(arr) {
        this.arr = arr;
        this.key = 0;
    }
    next() {
        let arrs = [this.key, this.arr[this.key]];
        this.arrObj = {
            done: false,
            value: arrs
        };
        this.key++;
        return this.arrObj;
    }
}
function entriess(arr) {
    return new Ent(arr);
}
module.exports = {
    everys, somes, finds, maps, filters, forEachs, findIndexs, joins, entriess
};
//# sourceMappingURL=index.js.map