db.produtos.updateMany({
  nome:  { $in: ["Big Mac","Quarteirão com Queijo","Cheddar McMelt","Extra Chicken"]}},{
        $addToSet: {"ingredientes": "ketchup" }
    }
);
    
db.produtos.find({}, {nome: 1, ingredientes:1, _id: 0});
