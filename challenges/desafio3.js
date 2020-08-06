db.produtos.updateMany({"avaliacao": {$exists: 0}},{$set: {"avaliacao": NumberInt("0")}},{multi: true});
db.produtos.updateMany({"tags":{$all: ["bovino"]}},{$inc: {"avaliacao": 5}});
db.produtos.updateMany({"tags":{$all: ["ave"]}},{$inc: {"avaliacao": 3}});
db.produtos.find({},{"_id": 0,"nome": 1, "avaliacao":1}).pretty();
