db.people.aggregate([
  {
    $addFields: {
      bmi: {
        $divide: [
          '$weight',
          {
            $multiply: [
              { $divide: ['$height', 100] },
              { $divide: ['$height', 100] }
            ]
          }
        ]
      }
    }
  },
  {
    $group: {
      _id: '$nationality',
      avarageBmi: { $avg: '$bmi' },
      highestBmi: { $max: '$bmi' },
      lowestBmi: { $min: '$bmi' }
    }
  }
]);
