db.produtos.updateMany({
  "ingredientes" : { $all : ["cebola"] }
}, {
  $pull : {
    "ingredientes" : { $all : ["cebola"] }
  }
});

db.produtos.find({}, {
  "_id" : 0,
  "nome" : 1,
  "ingredientes" : 1,
});
