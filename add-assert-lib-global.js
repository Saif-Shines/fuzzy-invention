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

global.test = test;
global.expect = expect;
