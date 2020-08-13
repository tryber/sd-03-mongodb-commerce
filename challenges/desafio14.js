db.produtos.updateMany(
    {"valoresNutricionais": {$elemMatch:{"percentual": {$lt: 40, $gt: 20},
    "tipo": "sódio"}}},
    { 
      $push: { "tags": "contém sódio"}
    }
);

db.produtos.find(
    {},
    {
      "nome": 1,
      "tags":1,
      "_id": 0    
    }
);
