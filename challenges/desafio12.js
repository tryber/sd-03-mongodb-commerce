db.produtos.updateMany({},
  {
    $push: { valoresNutricionais: {
        $sort: { percentual: -1 },
        $each: [],
      },
    },
  }
);

db.produtos.find({}, {nome: 1, valoresNutricionais:1, _id: 0});
