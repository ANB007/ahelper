// log.test.ts
import { sum } from '../src/sum';

describe('sum', () => {
 it('sum 5+6', () => {
     expect(sum(5,6)).toEqual(11);
 });
})
