const assert = require('assert');
const counter = require('../src/counter');

describe('testando contador', function() {

  beforeEach(function() {
    counter.count = 0;
  });

  it('contador deve ser iniciar com valor zero', function() {
    const counterResult = counter.count;
    assert.equal(counterResult, 0);
  });

  it('teste de incremento de 1', function() {
    counter.increment();
    const counterResult = counter.count;
    assert.equal(counterResult, 1);
  });

  it('teste de decremento de 1', function() {
    counter.decrement();
    const counterResult = counter.count;
    assert.equal(counterResult, -1);
  });

  it('teste de incremento de 10', function() {
    counter.increment(10);
    const counterResult = counter.count;
    assert.equal(counterResult, 10);
  });
});