db.produtos.updateMany(
  {},
  {
    $push: {
      valoresNutricionais: {
        $sort: { percentual: -1 },
        $each: [],
      },
    },
  }
);

db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });
