db.people.mapReduce(
  function () {
    this.credit.forEach(cc => {
      emit(cc.currency, cc.balance);
    });
  },
  function (key, values) {
    return Array.sum(values);
  },
  { out: 'balance_sums' }
);
