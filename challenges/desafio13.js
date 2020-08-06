db.produtos.updateMany({
  "valoresNutricionais": {
    $elemMatch: {
      tipo: "sódio",
      percentual: { $gte: 40}
    }
  }
},{
  $push: { "tags": "muito sódio" }
}
);

db.produtos.find({}, {nome: 1, tags:1, _id: 0});

// db.produtos.updateMany({ "nome": "Big Mac" },
//   { $push: { "tags": "muito sódio" } }
// );

// db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });
