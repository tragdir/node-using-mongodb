import { addnewProduct, getProducts, getProductWithID, updateProduct, deleteProduct } from '../controllers/controllers';

const routes = (app) => {
    app.route('/products');
    app.get(getProducts);
    app.post(addnewProduct);
    
    app.route('/products/:ProductID');
    app.get(getProductWithID);
    app.put(updateProduct);
    app.delete(deleteProduct);
}

export default routes;