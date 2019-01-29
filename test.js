"use strict";
exports.__esModule = true;
//Array.every
function everys(arrs, callback) {
    var arr = [];
    for (var i = 0; i < arrs.length; i++) {
        if (!callback(arrs[i])) {
            return false;
        }
    }
    return true;
}
exports.everys = everys;
//Array.some
function somes(arrs, callback) {
    var arr = [];
    for (var i = 0; i < arrs.length; i++) {
        if (callback(arrs[i])) {
            return true;
        }
    }
    return false;
}
exports.somes = somes;
//Array.find
function finds(arrs, callback) {
    var arr = [];
    for (var i = 0; i < arrs.length; i++) {
        if (callback(arrs[i])) {
            return arrs[i];
        }
    }
    return false;
}
exports.finds = finds;
//Array.map
function maps(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}
exports.maps = maps;
//Array.filter
function filters(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
exports.filters = filters;
//Array.forEach
function forEachs(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(i, arr[i]);
    }
}
exports.forEachs = forEachs;
//Array.findIndex
function findIndexs(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return i;
        }
    }
}
exports.findIndexs = findIndexs;
//Array.join
function joins(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += arr[i] + ',';
    }
    return str.substring(0, str.length - 1);
}
exports.joins = joins;
// Array.entries
var Ent = /** @class */ (function () {
    function Ent(arr) {
        this.arr = arr;
        this.key = 0;
    }
    Ent.prototype.next = function () {
        var arrs = [this.key, this.arr[this.key]];
        this.arrObj = {
            done: false,
            value: arrs
        };
        this.key++;
        return this.arrObj;
    };
    return Ent;
}());
function entriess(arr) {
    return new Ent(arr);
}
exports.entriess = entriess;
