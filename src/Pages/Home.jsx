import { useState, useEffect } from "react";
import Banner from "../Components/Banner";
import { getVideos } from "../Services/api.jsx";
import { getCategories } from "../Services/apiCategories.jsx";
import styled from "styled-components";

const Thumbnail = styled.img`
    width: 400px; 
    height: 250px;
    border-radius: 10px;
    margin-right: 50px;
    filter: drop-shadow(4px 3px 5px rgb(255, 255, 255));
    cursor: pointer; /* Añade un cursor de puntero para indicar que es clicable */
`;

const Home = () => {

    const [videos, setVideos] = useState(null);
    const [categories, setCategories] = useState(null);
    const [featuredVideo, setFeaturedVideo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videosData = await getVideos();
                setVideos(videosData);
                setFeaturedVideo(videosData[0]);
                const categoriesData = await getCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error("Error al cargar datos: ", error);
            }
        };

        fetchData();
    }, []);

    if (!videos || !categories) return <p>Cargando...</p>;

    const videoToShow = videos[0];
    console.log(videoToShow);

    return (
        <>
            {featuredVideo && (
                <Banner
                    title={featuredVideo.title}
                    category={featuredVideo.category}
                    image={featuredVideo.image}
                    video={featuredVideo.video}
                />
            )}
            <div>
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>{category.title}</li>
                    ))}
                </ul>

                {videos.map((video) => (
                    <div key={video.id}>
                        <h2>{video.title}</h2>
                        <p>{video.description}</p>
                        <Thumbnail
                            src={video.image}
                            alt={video.title}
                            onClick={() => setFeaturedVideo(video)}
                        />
                        <a
                            href={video.video}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver video
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;