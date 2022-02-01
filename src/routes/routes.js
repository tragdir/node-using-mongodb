import { addnewProduct, getProducts, getProductWithID } from '../controllers/controllers';

const routes = (app) => {
    app.route('/products');
    app.get(getProducts);
    app.post(addnewProduct);
    
    app.route('/products/:ProductID');
    app.get(getProductWithID);
}

export default routes;