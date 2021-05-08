const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplmentation = (newImpl) => (impl = newImpl);
  return mockFn;
}

function spyOn(obj, prop) {
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
}

// actual code
spyOn(utils, 'getWinner');
utils.getWinner.mockImplmentation((p1, p2) => p1);

const winner = thumbWar('Donald Duck', 'Amitabh B');
assert.strictEqual(winner, 'Donald Duck');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Donald Duck', 'Amitabh B'],
  ['Donald Duck', 'Amitabh B']
]);

utils.getWinner.mockRestore();
