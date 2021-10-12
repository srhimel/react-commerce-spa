const addToLocal = id => {
    const exist = localStorage.getItem('cart');
    let shoppingCart = {};
    if (!exist) {
        shoppingCart[id] = 1;
    }
    else {
        shoppingCart = JSON.parse(exist);
        if (shoppingCart[id]) {
            const newCart = shoppingCart[id] + 1;
            shoppingCart[id] = newCart;
        } else {
            shoppingCart[id] = 1;
        }
    }
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
}

const loadFromDb = () => {
    const exist = localStorage.getItem('cart');
    return exist ? JSON.parse(exist) : {};
}

const deleteFromDb = key => {
    const exist = loadFromDb();
    delete exist[key];
    localStorage.setItem('cart', JSON.stringify(exist));

}

const deleteDb = () => {
    localStorage.removeItem('cart');
}
export { addToLocal, loadFromDb, deleteFromDb, deleteDb }