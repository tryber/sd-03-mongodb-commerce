db.produtos.count(
    {$text: {
        $search : "frango hamburguer"
    }} 
);
