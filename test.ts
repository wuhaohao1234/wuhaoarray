interface callbacks {
    (any):boolean
}
//Array.every
export function everys(arrs, callback: callbacks) {
    let arr = []
    for(var i = 0;i < arrs.length;i ++) {
        if (!callback(arrs[i])) {
                return false
            }
        }
        return true
    }
//Array.some
export function somes(arrs, callback: callbacks) {
    let arr = []
    for (var i = 0; i < arrs.length; i++) {
        if (callback(arrs[i])) {
            return true
        }
    }
    return false
}
//Array.find
export function finds(arrs, callback: callbacks) {
    let arr = []
    for (var i = 0; i < arrs.length; i++) {
        if (callback(arrs[i])) {
            return arrs[i]
        }
    }
    return false
}
//Array.map
export function maps(arr, callback: callbacks) {
    let newArr = []
    for(var i = 0;i < arr.length;i ++) {
        newArr.push(callback(arr[i])) 
    }
    return newArr
}
//Array.filter
export function filters(arr, callback: callbacks) {
    let newArr = []
    for (var i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
//Array.forEach
export function forEachs(arr,callback) {
    for(var i = 0;i <arr.length;i ++) {
        callback(i,arr[i])
    }
}
//Array.findIndex
export function findIndexs(arr, callback: callbacks) {
    for(var i = 0;i < arr.length;i ++) {
        if (callback(arr[i])) {
            return i
        }
    }
}
//Array.join
export function joins(arr) {
    let str = ''
    for(var i = 0;i < arr.length;i ++) {
        str += arr[i] + ','
    }
    return str.substring(0, str.length - 1);  
}


// Array.entries
class Ent {
    public arr
    public value
    public done
    public key
    public arrObj
    constructor(arr) {
        this.arr = arr
        this.key = 0
    }
    next() {
        let arrs = [this.key,this.arr[this.key]]
        this.arrObj = {
            done:false,
            value:arrs 
        }
        this.key ++
        return this.arrObj
    }
}
export function entriess(arr) {
    return new Ent(arr)
}