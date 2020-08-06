db.produtos.updateOne({
    "nome" : "Big Mac"
  },
  { $currentDate : {
    "ultimaAtualizacao" : { $type : "timestamp" }
  }
})

db.produtos.findOne({
  "ultimaAtualizacao" : { $exists : true },
},
{
  "_id" : 0,
  "nome" : 1,
});
