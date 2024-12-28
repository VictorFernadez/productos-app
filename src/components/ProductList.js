import React, {useEffect, useState} from 'react';
import { getProducts } from '../services/productoService';

const ProductList = () =>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.log('Error al cargar los productos', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Lista de productos</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.precio} Soles
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProductList;