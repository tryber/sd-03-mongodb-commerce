db.produtos.update(
  { avaliacao: { $exists: false } },
  { $set: { avaliacao: NumberInt("0") } },
  { multi: true }
);
db.produtos.update(
  { tags: { $all: ['bovino'] } },
  { $inc: { avaliacao: 5 } },
  { multi: true }
);
db.produtos.update(
  { tags: { $all: ['ave'] } },
  { $inc: { avaliacao: 3 } },
  { multi: true }
);
db.produtos.find(
  {},
  { _id: false, nome: true, avaliacao: true }
);
