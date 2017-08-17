const chai = require('chai');
const cal = require('../src/cal');
const algo = require('../src/algo');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai);

describe('summary function in javascript', () => {
    // beforeEach(() => { do first before all do test case })
    // before(() => { do only one time for one test case })
    // afterEach(() => { after do test case always do this })
    // after(() => { after end only one function that was set do this})

    // unit test contains => 3A { Arrange, Act, Assert }

    it('should be a function', () => {
        expect(cal.sum).to.be.a('function')
    })
    it('should return 10 when set i = 6 and j = 4', () => {
        const i = 6;
        const j = 4;
        var sum = cal.sum(i, j);
        expect(10).to.be.equal(sum);
    })
    it('should return input as integer', () => {
        const i = 6;
        const j = 4;
        var sum = cal.sum(i, j);
        expect(sum).to.be.a('number');
    })
    it('should not equal 100 when i = 40, j = 61', () => {
        const i = 40;
        const j = 61;
        var sum = cal.sum(i, j);
        expect(sum).not.equal(100);
    })

})

describe('minus function in javascript', () => {

    it('should be a function', () => {
        expect(cal.minus).to.be.a('function');
    })
    it('should return -1 when i = 6 and j = 7', () => {
        const i = 6, j = 7
        var minus = cal.minus(i, j);
        expect(-1).to.be.equal(minus);
    })
})

describe('multiply function in javascript', () => {
    it('should be a function', () => {
        expect(cal.mul).to.be.a('function');
    })
    it('should return 900 when i = 45, j = 20', () => {
        const i = 45, j = 20
        var mul = cal.mul(i, j);
        expect(900).to.be.equal(mul);
    })
})

describe('factorial function', () => {
    it('should return 3628800 when add n = 10', () => {
        const n = 10
        expect(3628800).to.be.equal(algo.factorial(n));
    })
    it('should accept input as number only', () => {
        const n = "number"
        expect(algo.factorial(n)).to.be.false
    })
    it('should return something when add number', () => {
        const n = 5
        expect(algo.factorial(n)).to.be.a('number');
    })
})

describe('isLeapYear function', () => {
    it('should return is leap year when y = 4', () => {
        const y = 4;
        expect(algo.isLeapYear(y)).to.be.equal('is leap year');
    })
    it('should return false when input as odd integer', () => {
        const y = -999;
        expect(algo.isLeapYear(y)).to.be.false
    })
    it('should return false when input decimal number', () => {
        const y = 2017.25;
        expect(algo.isLeapYear(y)).to.be.false
    })
    it('should return false when input y = 1000', () => {
        const y = 1000;
        expect(algo.isLeapYear(y)).to.be.equal('is not leap year')
    })
})

describe('findMin function', () => {
    it('should be a function', () => {
        expect(algo.findMin).to.be.a('function');
    })
    it('should return 1 as min when input are 1, 2, 3, 4', () => {
        expect(algo.findMin([1, 2, 3, 4])).to.be.equal(1);
    })
    it('should return 1 as min when input are 23, 65, 123, 32, 42, 34, 10, 1, 23, 34', () => {
        expect(algo.findMin([23, 65, 123, 32, 42, 34, 10, 1, 23, 34])).to.be.equal(1);
    })
    it('should return 21 as min when input are 121, 21, 323, 22', () => {
        expect(algo.findMin([121, 21, 323, 22])).to.be.equal(21);
    })
    it('should accept array lenght more than 1', () => {
        expect(algo.findMin([])).to.be.equal('arr must to have value');
    })
})

describe('randStr function', () => {
    it('should return result lenght equal 8 when randStr(8)', () => {
        expect(algo.randStr(8).length).to.be.equal(8);
    })
})

describe('once function', () => {
    it('should call once', () => {
        // create spy => create fake callback for check is function called
        var cb = sinon.spy();
        var func = cal.once(cb);
        func();
        expect(cb).have.been.called
    })
    it('should call once one time', () => {
        // create spy => create fake callback for check is function called
        var cb = sinon.spy();
        var func = cal.once(cb);
        func();
        expect(cb).have.been.calledOnce
    })
    it('should call once one time when call 2 times', () => {
        // create spy => create fake callback for check is function called
        var cb = sinon.spy();
        var func = cal.once(cb);
        func();
        func();
        expect(cb).have.been.calledOnce
    })
    it('should call once with args', () => {
        var cb = sinon.spy();
        var func = cal.once(cb);
        var obj = {};

        func.call(obj, 1, 2, 3);

        // call on
        expect(cb).have.been.calledOn(obj)

        // with
        expect(cb).have.been.calledWith(1, 2, 3)
    })
    it("returns the return value from the original function", function () {
        // fake callback value => behavior test
        var cb = sinon.stub().returns(42);
        var func = cal.once(cb);
        // once will return value 42 
        expect(func()).to.be.equal(42);
    });

})