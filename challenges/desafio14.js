db.produtos.updateMany({"nome": {$in: ["Quarteirão com Queijo","Cheddar McMelt","McChicken"] }},
{ $push: { "tags": "contém sódio"}}
);

db.produtos.find({}, {nome: 1, tags:1, _id: 0});
