const Money = require('./money');
const Portfolio = require('./portfolio');
const assert = require('assert');
//const { monitorEventLoopDelay } = require('perf_hooks');

/*class Dollar {
    constructor(amount) {
        this.amount = amount;
    }

    times(multiplier) { 
        return new Dollar(this.amount * multiplier);       
    }
}*/

class MoneyTest {
    testMultiplication() {
        let tenEuros = new Money(10, "EUR");
        let twentyEuros = new Money(20, "EUR");
        assert.deepStrictEqual(tenEuros.times(2), twentyEuros);
    }
    testDivision() {
        let originalMoney = new Money(4002, "KRW");
        let expectedMoneyAfterDivision = new Money(1000.5, "KRW");
        assert.deepStrictEqual(originalMoney.divide(4), expectedMoneyAfterDivision);
    }  
    testAddition() {
        let fiveDollars = new Money(5, "USD");
        let tenDollars = new Money(10, "USD");
        let fifteenDollars = new Money(15, "USD");
        let portfolio = new Portfolio();
        portfolio.add(fiveDollars, tenDollars);
        assert.deepStrictEqual(portfolio.evaluate("USD"), fifteenDollars);
    }

    testAdditionofDollarsAndEuros () {
        let fiveDollars = new Money(5, "USD");
        let tenEuros = new Money(10, "EUR");
        let portfolio = new Portfolio();
        portfolio.add(fiveDollars, tenEuros);
        let expectedValue = new Money(17, "USD");
        assert.deepStrictEqual(portfolio.evaluate("USD"), expectedValue);
    }

    runAllTests() {
     let testMethods = this.getAllTestMethods();
     testMethods.forEach(m => {
         console.log("Running: %s()", m);
         let method = Reflect.get(this, m);
         try {
            Reflect.apply(method, this, []);
         }
         catch (e) {
             if (e instanceof assert.AssertionError) {
                 console.log(e);
             }
             else {
                 throw e;
             }
         }
     });
    }

    getAllTestMethods() {
        let moneyPrototype = MoneyTest.prototype;
        let allProps = Object.getOwnPropertyNames(moneyPrototype);
        let testMethods = allProps.filter(p => {
            return typeof moneyPrototype[p] === 'function' && p.startsWith("test");
        });
        return testMethods;
    }
}

new MoneyTest().runAllTests();

let tenEuros = new Money(10, "EUR");
let twentyEuros = new Money(20, "EUR");
assert.deepStrictEqual(tenEuros.times(2), twentyEuros);

let originalMoney = new Money(4002, "KRW")
let actualMoneyAfterDivision = originalMoney.divide(4)
let expectedMoneyAfterDivision = new Money(1000.5, "KRW")
assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision)

let fiveDollars = new Money(5, "USD");
let tenDollars = new Money(10, "USD");
let fifteenDollars = new Money(15, "USD")
let portfolio = new Portfolio();
portfolio.add(fiveDollars, tenDollars);
assert.deepStrictEqual(portfolio.evaluate("USD"), fifteenDollars)

//assert.deepStrictEqual(fiveDollars.times(2), tenDollars);




