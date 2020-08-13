db.produtos.count(
    {$text: {
        $search : {$in: ["frango", "hamburguer"]}
    }} 
);
