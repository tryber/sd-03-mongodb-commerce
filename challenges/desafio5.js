db.produtos.updateMany(
    {"nome": {$ne: "McChicken"}},
    { 
        $addToSet: {"ingredientes": "ketchup"}
    }
);

db.produtos.find(
    {"ultimaModificacao": {$exists: true}},
    {
      "nome": 1,
      "ingredientes":1,
      "_id": 0    
    }
);
