db.produtos.updateMany({},{$rename:{"descricao":"descricaoSite"}});
db.produtos.find({},{"descricaoSite":1, "descicao":1, "nome":1, "_id":0});
