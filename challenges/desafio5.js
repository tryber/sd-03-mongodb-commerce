db.produtos.updateMany(
  {
    nome: {
      $not: { $eq: "McChicken" }
    }
  },
  {
    $addToSet: {
      ingredientes: "ketchup"
    }
  }
);
db.produtos.find(
  {},
  { _id: 0, nome: true, ingredientes: true }
);
