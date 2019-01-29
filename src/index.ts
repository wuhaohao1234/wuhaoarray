interface callbacks {
    (arr:any):boolean
}
interface forEaCallbaack {
    (key:any,index:number):void
}

//Array.every
function everys(arrs:any, callback: callbacks) {
    let arr = []
    for(var i = 0;i < arrs.length;i ++) {
        if (!callback(arrs[i])) {
                return false
            }
        }
        return true
    }
//Array.some
function somes(arrs: any, callback: callbacks) {
    let arr = []
    for (var i = 0; i < arrs.length; i++) {
        if (callback(arrs[i])) {
            return true
        }
    }
    return false
}
//Array.find
function finds(arrs: any, callback: callbacks) {
    let arr = []
    for (var i = 0; i < arrs.length; i++) {
        if (callback(arrs[i])) {
            return arrs[i]
        }
    }
    return false
}
//Array.map
function maps(arr: any, callback: callbacks) {
    let newArr = []
    for(var i = 0;i < arr.length;i ++) {
        newArr.push(callback(arr[i])) 
    }
    return newArr
}
//Array.filter
function filters(arr: any, callback: callbacks) {
    let newArr = []
    for (var i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
//Array.forEach
function forEachs(arr: any, callback: forEaCallbaack) {
    for(var i = 0;i <arr.length;i ++) {
        callback(i,arr[i])
    }
}
//Array.findIndex
function findIndexs(arr: any, callback: callbacks) {
    for(var i = 0;i < arr.length;i ++) {
        if (callback(arr[i])) {
            return i
        }
    }
}
//Array.join
function joins(arr: any) {
    let str = ''
    for(var i = 0;i < arr.length;i ++) {
        str += arr[i] + ','
    }
    return str.substring(0, str.length - 1);  
}


// Array.entries
class Ent {
    public arr:Array<any>
    public value:any
    public done:boolean
    public key:number
    public arrObj:object
    constructor(arr:Array<any>) {
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
function entriess(arr:Array<any>) {
    return new Ent(arr)
}

module.exports = {
    everys, somes, finds, maps, filters, forEachs, findIndexs, joins, entriess 
}