db.people.aggregate([
  {
    $match: { nationality: 'Poland', sex: 'Female' }
  },
  {
    $unwind: {
      path: '$credit'
    }
  },
  {
    $group: {
      _id: '$credit.currency',
      total: {
        $sum: '$credit.balance'
      },
      avarage: {
        $avg: '$credit.balance'
      }
    }
  }
]);
