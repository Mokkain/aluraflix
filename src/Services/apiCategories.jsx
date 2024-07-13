import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000", 
});

export const getCategories = async () => {
    try {
        const response = await api.get("/categories"); 
        console.log(response);
        return response.data; 
    } catch (error) {
        console.error("Error al obtener las categorías: ", error);
        throw error;
    }
};

export default api;
