import axios from 'axios';

//URL base de tu API
const API_URL = 'http://localhost:8080/api/productos';

// Obtener todos los productos

export const getProducts = async () =>{
    try{
        const response = await axios.get(API_URL);
        return response.data;
    } catch(error){
        console.log('Error al obtener los productos', error);
        throw error;
    }
};

// Crear un nuevo producto
export const createProduct = async (product) => {
    try {
        const response = await axios.post(product);
        return response.data;
    } catch (error) {
        console.log('Error al crear el producto: ', error);
        throw error;
    }
};

// Actualizar un producto
export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, product);
        return response.data;
    } catch (error) {
        console.log('Error al actualizar el producto: ', error);
        throw error;
    }
};

// Eliminar un producto

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error al eliminar el producto: ', error);
        throw error;
    }
};