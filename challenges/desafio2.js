db.produtos.update(
  { valorUnitario: { $exists: false } },
  { $set: { valorUnitario: NumberDecimal("0.00") } },
  { multi: true }
);
db.produtos.find(
  {},
  { _id: false, nome: true, valorUnitario: true }
);

