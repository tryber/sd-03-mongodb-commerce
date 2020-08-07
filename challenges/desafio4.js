db.produtos.updateMany(
  { },
  { $currentDate: { ultimaModificacao: true } }
);

db.produtos.find(
  { },
  { _id: 0, nome: 1 }
);
