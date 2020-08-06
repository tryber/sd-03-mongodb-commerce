db.produtos.updateMany({"criadoPor": {$exists: 0}},{$set: {"criadoPor": "Ronald McDonald"}}, {multi: true});
db.produtos.find({},{"_id": 0,"nome": 1, "criadoPor":1}).pretty();
