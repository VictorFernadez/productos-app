import React, {useState} from "react";
import { createProduct } from "../services/productoService";

const ProductForm = ({onProductAdded}) =>{
    const [product, setProduct] = useState({nombre: '', precio:0.0});

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Formulario:", product);
            
            const newProduct = await createProduct(product);
            onProductAdded(newProduct);
            setProduct({name: '', precio: 0.0});
        } catch (error) {
            console.log('Error al crear el producto', error);
            
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre del producto:</label>
                <input
                    type="text"
                    name="nombre"
                    value={product.nombre}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label>Precio del producto:</label>
                <input
                    type="text"
                    name="precio"
                    value={product.precio}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit">Agregar producto</button>
        </form>
    );
};

export default ProductForm;