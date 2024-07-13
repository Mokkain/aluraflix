import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const getVideos = async () => {
    try {
        const response = await api.get("/videos");
        console.log(response);
        return response.data;

    } catch (error) {
        console.log("Error al mostrar la lista de videos", error);
        throw error;
    }
};

export default api;