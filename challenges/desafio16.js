db.produtos.count(
    {$size: {
        "ingredientes": 4
    }} 
);
