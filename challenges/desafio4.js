db.produtos.updateMany(
  { },
  { $currentDate: { ultimaModificacao: true } }
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: 0, nome: 1 }
);
