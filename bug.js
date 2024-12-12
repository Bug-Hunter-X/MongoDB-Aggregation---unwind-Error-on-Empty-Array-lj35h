```javascript
// Assuming you have a MongoDB collection named 'myCollection'

db.myCollection.aggregate([
  {
    $lookup: {
      from: 'anotherCollection',
      localField: 'foreignKey',
      foreignField: '_id',
      as: 'joinedData'
    }
  },
  {
    $unwind: '$joinedData' // This will cause an error if 'joinedData' is empty
  }
])
```