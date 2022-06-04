db.people.insertOne({
  sex: 'Female',
  first_name: 'Kinga',
  last_name: 'Konieczna',
  job: 'Student',
  email: 'kingakonieczna00@gmail.com',
  location: {
    city: 'Warsaw',
    address: { streetname: 'Wolska', streetnumber: '96' }
  },
  description: "Rara Avis",
  height: 175,
  weight: 55,
  birth_date: '1998-07-06T10:59:59Z',
  nationality: 'Poland',
  credit: [
    {
      type: 'mastercard',
      number: '1234567890123456',
      currency: 'PLN',
      balance: '4634'
    }
  ]
});
