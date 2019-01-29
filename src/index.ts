interface callbacks {
    (arr:any):boolean
}
interface forEaCallbaack {
    (key:number,value:any):void;
    
}
interface Entre {
    next():object;
}
//Array.every
function everys(arrs:Array<any>, callback: callbacks):boolean {
    let arr = []
    for(var i = 0;i < arrs.length;i ++) {
        if (!callback(arrs[i])) {
                return false
            }
        }
        return true
    }
//Array.some
function somes(arrs: Array<any>, callback: callbacks):boolean {
    let arr = []
    for (var i = 0; i < arrs.length; i++) {
        if (callback(arrs[i])) {
            return true
        }
    }
    return false
}
//Array.find
function finds(arrs: Array<any>, callback: callbacks):boolean {
    let arr = []
    for (var i = 0; i < arrs.length; i++) {
        if (callback(arrs[i])) {
            return arrs[i]
        }
    }
    return false
}
//Array.map
function maps(arr: Array<any>, callback: callbacks) {
    let newArr = []
    for(var i = 0;i < arr.length;i ++) {
        newArr.push(callback(arr[i])) 
    }
    return newArr
}
//Array.filter
function filters(arr: Array<any>, callback: callbacks) {
    let newArr = []
    for (var i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
//Array.forEach
function forEachs(arr: Array<any>, callback: forEaCallbaack) {
    for(var i = 0;i <arr.length;i ++) {
        callback(i,arr[i])
    }
}
//Array.findIndex
function findIndexs(arr: Array<any>, callback: callbacks) {
    for(var i = 0;i < arr.length;i ++) {
        if (callback(arr[i])) {
            return i
        }
    }
}
//Array.join
function joins(arr: Array<any>) {
    let str = ''
    for(var i = 0;i < arr.length;i ++) {
        str += arr[i] + ','
    }
    return str.substring(0, str.length - 1);  
}
// Array.entries
class Ent implements Entre {
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