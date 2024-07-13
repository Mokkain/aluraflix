import { useEffect, useState } from "react";

const api = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            try {
                const response = await fetch('http://localhost:3000/videos');
                const data = await response.json();
                console.log(data);
                setVideos(data)
            } catch (error) {
                console.error("Error al buscar videos", error);
                throw error;
            }
        }
        getVideos()
    }, [])

}

export default api;