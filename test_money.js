const assert = require('assert');
const { monitorEventLoopDelay } = require('perf_hooks');

class Dollar {
    constructor(amount) {
        this.amount = amount;
    }

    times(multiplier) { 
        return new Dollar(this.amount * multiplier);       
    }
}

class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency);
    }

    divide(divisor) {
        return new Money(this.amount / divisor, this.currency);
    }
}

class Portfolio {
    constructor() {
        this.moneys = [];
    }
    
    add(...moneys) {
        this.moneys = this.moneys.concat(moneys);
    }

    evaluate(currency) {
        let total = this.moneys.reduce( (sum, money) => {
            return sum + money.amount;
        }, 0);
        return new Money(total, currency)
    }
}

let fiveDollars = new Money(5, "USD");
let tenDollars = new Money(10, "USD");
assert.deepStrictEqual(fiveDollars.times(2), tenDollars);

let tenEuros = new Money(10, "EUR");
let twentyEuros = new Money(20, "EUR");
assert.deepStrictEqual(tenEuros.times(2), twentyEuros);
assert.strictEqual(twentyEuros.currency, "EUR");

let originalMoney = new Money(4002, "KRW")
let actualMoneyAfterDivision = originalMoney.divide(4)
let expectedMoneyAfterDivision = new Money(1000.5, "KRW")
assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision)

let fifteenDollars = new Money(15, "USD")
let portfolio = new Portfolio();
portfolio.add(fiveDollars, tenDollars);
assert.deepStrictEqual(portfolio.evaluate("USD"), fifteenDollars)