interface callbacks {
    (arr: any): boolean;
}
interface forEaCallbaack {
    (key: any, index: number): void;
}
interface Entre {
    next(): object;
}
declare function everys(arrs: Array<any>, callback: callbacks): boolean;
declare function somes(arrs: Array<any>, callback: callbacks): boolean;
declare function finds(arrs: Array<any>, callback: callbacks): boolean;
declare function maps(arr: Array<any>, callback: callbacks): boolean[];
declare function filters(arr: Array<any>, callback: callbacks): any[];
declare function forEachs(arr: Array<any>, callback: forEaCallbaack): void;
declare function findIndexs(arr: Array<any>, callback: callbacks): number;
declare function joins(arr: Array<any>): string;
declare class Ent implements Entre {
    arr: Array<any>;
    value: any;
    done: boolean;
    key: number;
    arrObj: object;
    constructor(arr: Array<any>);
    next(): object;
}
declare function entriess(arr: Array<any>): Ent;
