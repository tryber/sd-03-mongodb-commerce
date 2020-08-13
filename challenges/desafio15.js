db.produtos.count(
    {$text: {
        $search: "Mc"
    }} 
);
