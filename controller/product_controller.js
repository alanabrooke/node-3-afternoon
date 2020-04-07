createProduct = (req, res) => {
    let db = req.app.get('db');
    let { name, description, price, image_url } = req.body;
    db.create_product(name, description, price, image_url)
    .then( () => res.sendStatus(200) )
    .catch( () => res.status(500).send('Looks like the product did not get made. Check stuff, try again') );
    
}
getProducts = (req, res) => {
    let db = req.app.get('db');
    db.read_products()
    .then( allProducts => res.status(200).send(allProducts) )
    .catch( () => res.status(500).send('Obviusly it isn\'t working, or you would see all the products. Check stuff, try again.') );

}
getProduct = (req, res) => {
    let db = req.app.get('db');
    let { id } = req.params;
    db.read_product(id)
    .then( singleProduct => res.status(200).send(singleProduct) )
    .catch( () => res.status(500).send('Obviusly it isn\'t working, or you would see the product you want to see. Check stuff, try again.') )

}
updateProduct = (req, res) => {
    let db = req.app.get('db');
    let { id } = req.params;
    let { desc } = req.query;
    db.update_product(id, desc)
    .then( () => res.sendStatus(200) )
    .catch( () => res.status(500).send('Your product did not get updated properly. Check stuff, try again.')  );

}
deleteProduct = (req, res) => {
    let db = req.app.get('db');
    let { id } = req.params;
    db.delete_product(id)
    .then( () => res.sendStatus(200) )
    .catch( () => res.status(500).send('For some reason, the product you tried deleting didn\'t get deleted. Check stuff, try again.')  );

}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}