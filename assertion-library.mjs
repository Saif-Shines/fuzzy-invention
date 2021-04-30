import { sum, subtract } from './simple.js';

test(' sum adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test(' subtract adds numbers', () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
    console.log(`✅  Passed: ${title}`);
  } catch (error) {
    console.log(`❌ Failed: ${title}`);
    console.log(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  };
}
