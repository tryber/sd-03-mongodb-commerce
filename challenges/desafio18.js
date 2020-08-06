db.produtos.createIndex({descricao: "text" });
db.articles.find({ $text: {$search: "feito com", $language: "pt"}}).count();
