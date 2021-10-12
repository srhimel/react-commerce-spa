import { useEffect, useState } from "react";
import { loadFromDb } from "../utilities/localDb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const localData = loadFromDb();
        const localCart = [];
        if (products.length) {
            for (const key in localData) {

                const foundData = products.find(product => product.key === key);
                if (foundData) {
                    foundData.quantity = localData[key];
                    localCart.push(foundData);
                }
                setCart(localCart);
            }
        }


    }, [products]);
    return [cart, setCart];
}
export default useCart;