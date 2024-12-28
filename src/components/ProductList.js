import React, {useEffect, useState} from 'react';
import { getProducts } from '../services/productoService';
import ProductForm from './ProductForm';

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

    const handleProductAdded = (newProduct) =>{
        setProducts([...products, newProduct])
    };

    return (
        <div>
            <h1>Lista de productos</h1>
            <ProductForm onProductAdded={handleProductAdded}/>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.nombre} - {product.precio} Soles
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProductList;