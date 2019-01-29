// add.test.js
var { everys, somes, finds, maps, filters, forEachs, findIndexs, joins, entriess } = require('./dist/index');
var expect = require('chai').expect;

let arr = [19, 2, 3, 4]
function callback(item) {
    return item >= 18    
}
describe('everys测试',function () {
    it('输出为false',function () {
        expect(everys(arr,callback)).to.be.equal(false)
    })
})