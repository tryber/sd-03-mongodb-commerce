db.produtos.updateMany({},
  {$sort: {"valoresNutricionais": {"percentual": -1}}});
