# MongoDB Aggregation: Handling Empty Arrays in $unwind

This example demonstrates a common error when using the `$unwind` stage in MongoDB aggregation pipelines: attempting to unwind an empty array.  The `$unwind` operator expects an array; if it encounters an empty array, it throws an error.

The `bug.js` file shows the erroneous code.  The `bugSolution.js` file provides a solution using `$ifNull` to handle cases where the array to be unwound is empty.