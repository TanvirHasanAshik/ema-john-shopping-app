/* Add data to localStorage Database */

const addToLocalStorage = (id) => {
    let shoppingCart = {};
    const getCart = localStorage.getItem('shopping-cart');
    if (getCart) {
        shoppingCart = JSON.parse(getCart);
    }
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

/* Get data from localStorage Database */
const getLocalStorage = () => {
    const getData = localStorage.getItem('shopping-cart');
    const parseGetData = JSON.parse(getData);
    return parseGetData;
}

export { addToLocalStorage, getLocalStorage }


