db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $push: { ingredientes: "ketchup" } },
  { upsert: true }
);

db.produtos.find(
  { },
  { _id: 0, nome: 1, ingredientes: 1 }
);
