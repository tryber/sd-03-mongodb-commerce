db.produtos.update(
  {
    nome: {
      $not: { $eq: "McChicken" }
    }
  },
  {
    $addToSet: {
      ingredientes: "ketchup"
    }
  },
  { multi: true }
);
db.produtos.find(
  {},
  { _id: 0, nome: true, ingredientes: true }
);
