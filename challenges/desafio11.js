db.produtos.updateMany(
    {},
    { 
      $push: { "ingredientes": {$each: ["combo","tasty"]}},
      $sort: {"ingredientes": 1}
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
