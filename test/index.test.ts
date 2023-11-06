/* eslint-disable no-warning-comments */
import { timesTwoCallback, timesTwoPromise } from '../src';
import async from 'async';

describe('Callbacks and promises tutorial', () => {
  describe('2 times two = 4', () => {
    it('Using callbacks', (done) => {
      timesTwoCallback(2, /* TODO = 4 */);
    });

    it('Using promises', (done) => {
      timesTwoPromise(2)
        .then(/* TODO = 4 */);
    });

    it('Using async/await', async () => {
      /* TODO = 4 */
    });
  });

  describe('2 times two times two times two = 16', () => {
    it('Using callbacks', (done) => {
      /* TODO = 16 */
      done(); // delete this
    });

    it('Using promises', (done) => {
      /* TODO = 16 */
      done(); // delete this
    });

    it('Using async/await', async () => {
      /* TODO = 16 */
    });

    it('BONUS: using callbacks and the async library', (done) => {
      /* TODO = 16 */
      done(); // delete this
    });
  });
});
