db.produtos.updateMany(
    {"name": {$ne: "McChicken"}},
    { 
        $addToSet: {"ingredients": "ketchup"}
    }
);

db.produtos.find(
    {"ultimaModificacao": {$exists: true}},
    {
      "nome": 1,
      "ingredients":1,
      "_id": 0    
    }
);
