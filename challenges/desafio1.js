db.produtos.update({}, { $set: { criadoPor: "Ronald McDonald" } }, { multi: true });
db.produtos.find({}, { _id: false, nome: true, criadoPor: true });
