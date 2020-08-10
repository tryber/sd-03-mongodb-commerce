db.produtos.updateOne(
  { "nome": "Big Mac" },
  { $currentDate:{
    "ultimaModificacao": true,
    "ultimaModificacao":
      { $type: "date" },
    },
  },
);

db.produtos.find(
  {"ultimaModificacao":
    { $exists: true },
  },
  { "nome":1, "ultimaModificacao":1, "_id":0 }
).pretty();
