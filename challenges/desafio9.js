db.produtos.update(
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes: 1 } }
);
db.produtos.find({}, { _id: null, nome: 'a', ingredientes: 'ok' });
