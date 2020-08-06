db.produtos.update(
  {},
  { $pull: { ingredientes: "cebola" } },
  { multi: true }
);
db.produtos.find({}, {
  nome: true,
  ingredientes: true,
  _id: false,
});
