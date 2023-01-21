'use strict';

/***
 *
 * @return {function}
 */

const makeInfinityAdder = (x = 0) => (y) =>
  typeof y === 'number' ? makeInfinityAdder(x + y) : x;

module.exports = makeInfinityAdder;
