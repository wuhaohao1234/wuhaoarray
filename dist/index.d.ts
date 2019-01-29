interface callbacks {
    (arr: any): boolean;
}
interface forEaCallbaack {
    (key: any, index: number): void;
}
declare function everys(arrs: any, callback: callbacks): boolean;
declare function somes(arrs: any, callback: callbacks): boolean;
declare function finds(arrs: any, callback: callbacks): any;
declare function maps(arr: any, callback: callbacks): boolean[];
declare function filters(arr: any, callback: callbacks): any[];
declare function forEachs(arr: any, callback: forEaCallbaack): void;
declare function findIndexs(arr: any, callback: callbacks): number;
declare function joins(arr: any): string;
declare class Ent {
    arr: Array<any>;
    value: any;
    done: boolean;
    key: number;
    arrObj: object;
    constructor(arr: Array<any>);
    next(): object;
}
declare function entriess(arr: Array<any>): Ent;
