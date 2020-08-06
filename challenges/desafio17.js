db.produtos.createIndex({descricao: "text" });
db.articles.find({ $text: {$search: "frango hamburguer", $language: "pt"}}).count();
