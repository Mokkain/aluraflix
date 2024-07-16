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

export const createVideo = async (videoData) => {
    try {
        const response = await api.post("/videos", videoData);
        return response.data;
    } catch (error) {
        console.error("Error al crear un nuevo video", error);
        throw error;
    }
};

export const updateVideo = async (videoData) => {
    try {
        const { id, title, description, image, video, category } = videoData;

        const updatedVideo = {
            title: title,
            category: category,
            image: image,
            video: video,
            description: description,
        };

        const response = await api.put(`/videos/${id}`, updatedVideo);
        console.log(response);
        console.log("Los objetos de la actualización son: ", updatedVideo);
        return response.data;
    } catch (error) {
        console.error("Error al actualizar un video", error);
        throw error;
    }
};

export const deleteVideo = async (videoData) => {
    try {
        const { id } = videoData;
        const response = await api.delete(`/videos/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error al actualizar un video", error);
        throw error;
    }
};

export default api;