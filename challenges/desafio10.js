db.produtos.updateMany({}, {
  $set: { "vendasPorDia": [0, 0, 0, 0, 0, 0, 0] }
});

db.produtos.updateOne({ "nome": "Big Mac" }, {
  $inc: { "vendasPorDia.3": NumberInt(60) }
});

db.produtos.updateMany({ "tags": { $in: ["pao", "bovino"] } }, {
  $inc: { "vendasPorDia.6": NumberInt(120) }
});

db.produtos.find({}, { "nome": 1, "vendasPorDia": 1, "_id": 0 });
