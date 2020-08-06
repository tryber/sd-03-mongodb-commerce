db.produtos.update({}, { $set: {"criadoPor": "Ronald McDonald"}});
db.produtos.find({ "criadoPor": "Ronald McDonald"},
{ "nome": 1, "criadoPor": 1}
);
