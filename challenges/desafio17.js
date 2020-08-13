db.produtos.count(
    {$text: {
        $search: "frango hamburguer",
        $language: "pt-br"
    }} 
);
