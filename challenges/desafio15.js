db.produtos.createIndex({ nome: "text" });
db.articles.find({ $text: { $search: "Mc" }}).count();
