db.produtos.update({"valorUnitario": {$exists: 0}},{$set: {"valorUnitario": NumberDecimal("0.00")}},{multi: true});
db.produtos.find({},{"_id": 0,"nome": 1, "valorUnitario":1}).pretty();
