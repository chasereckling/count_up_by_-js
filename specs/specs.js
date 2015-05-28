describe('countBy', function() {
it('It will return an array up to the first number given and will count by the second number given', function() {
  expect(countBy(25,5)).to.eql([5,10,15,20,25]);
  });
});
