db.produtos.updateMany(
    {},
    { 
        "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
    }
);

db.produtos.update(
    {"nome": "Big Mac"},
    {
        "vendasPorDia.3": {$inc: 60}
    }
);

db.produtos.updateMany(
    {"tag": {$in: ["bovino","pão"]}},
    {
        "vendasPorDia.6": {$inc: 120}
    }
);

db.produtos.find(
    {},
    {
      "nome": 1,
      "vendasPorDia":1,
      "_id": 0    
    }
);
