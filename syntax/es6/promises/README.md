# Promise

- A `Promise` is a proxy for a value not necessarily known when the promise is created.

- A Promise is in one of these states:

    - `pending`: initial state, neither fulfilled nor rejected.

    - `fulfilled`: meaning that the operation was completed successfully.

    - `rejected`: meaning that the operation failed.


When either of these options occur, the associated handlers queued up by a promise's `then` method are called.

A promise is said to be settled if it is either 
fulfilled or rejected, but not pending.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png

