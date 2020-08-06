db.produtos.updateMany(
  { avaliacao: { $exists: false } },
  { $set: { avaliacao: NumberInt("0") } },
);
db.produtos.updateMany(
  { tags: { $all: ['bovino'] } },
  { $inc: { avaliacao: 5 } },
);
db.produtos.updateMany(
  { tags: { $all: ['ave'] } },
  { $inc: { avaliacao: 3 } },
  { multi: true }
);
db.produtos.find(
  {},
  { _id: false, nome: true, avaliacao: true }
);
