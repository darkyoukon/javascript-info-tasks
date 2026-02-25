// What’s wrong in the test of pow below?

// it("Raises x to the power n", function() {
//   let x = 5;

//   let result = x;
//   assert.equal(pow(x, 1), result);

//   result *= x;
//   assert.equal(pow(x, 2), result);

//   result *= x;
//   assert.equal(pow(x, 3), result);
// });

// describe function call skipped, also the result parameter value
// after multiplication holds another value
describe("pow(x, n) - rises x to power n", () => {
  const x = 5;

  for (let i = 1; i <= 3; ++i) {
    createPowTest(x, i);
  }

  function createPowTest(baseNumber, exponent) {
    it(`Raises ${baseNumber} to the power ${exponent} = `, () => {
      assert.strictEqual(pow(baseNumber, exponent), baseNumber ** exponent);
    });
  }
});
