db.produtos.update(
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes: 1 } }
);
db.produtos.find({}, { _id: 0, nome: true, ingredientes: 1 });
