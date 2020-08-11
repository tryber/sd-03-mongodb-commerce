db.produtos.update(
  {},
  {
    $push: {
      tags: {
        $each: ["combo", "tasty"],
        $sort: 1
      }
    }
  },
  { multi: true }
);
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });

