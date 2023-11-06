# Callbacks and promises

A simple example for learning about callbacks and promises.

Two functions are provided to multiply a number by two in a (completely unnecessary!) asynchronous way

## Code

### Callback implementation

```
import { timesTwoCallback } from './src';

timesTwoCallback(2, (err, res) => {
  // res = 4
});
```

### Promise implementation

```
import { timesTwoPromise } from './src';

timesTwoPromise(2).then((res) => {
  // res = 4
});

// or

const res = await timesTwoPromise(2);
```

## Exercises

See `test/index.test.ts`

### Part one

Write tests to exercise a single use of the `timesTwoCallback` or `timesTwoPromise` function for

- Callbacks
- Promises (without async/await)
- async/await

### Part two

As above but now try to use the `timesTwo` function three times in series i.e. run it once as above then take the result from the first execution as the input to the second execution, and then the result from the second execution as the input to the third execution.

### Bonus

As part two for callbacks, but using the `async` library

## Resources

- [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [The Node.js Event Loop, Timers, and `process.nextTick()`](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick)