db.people.find(
  {
    "birth_date": {
      $gte:("2001"), 
      $lt: ("2100")
    }
  }, 
  { "first_name": 1, "last_name": 1, "city": 1 }
  );
