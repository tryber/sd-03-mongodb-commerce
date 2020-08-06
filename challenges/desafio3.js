db.produtos.updateMany({},
{ $set: {"avaliacao": NumberInt(0)}});

const updateAvaliacao = (inc, tag) => {
  db.produtos.updateMany({tags: {$elemMatch: {$eq: tag}}},
  {$inc: {"avaliacao": NumberInt(inc)}});
}
updateAvaliacao(5, "bovino");
updateAvaliacao(3, "ave")
db.produtos.find({}, {"nome": 1, "avaliacao": 1, "_id": 0});
