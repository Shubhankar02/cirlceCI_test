/**
 * Sample test for jest runner
 */

 const sum = require('./../lib');

 test('adds 1 + 2 to equal 3', () => {
     expect(sum(1,2).toBe(3));
 })