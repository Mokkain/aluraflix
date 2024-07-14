import { useState, useEffect, useRef } from "react";
import Banner from "../Components/Banner";
import { getVideos } from "../Services/api.jsx";
import { getCategories } from "../Services/apiCategories.jsx";
import styled from "styled-components";
import CourseTitle from "../Components/CourseTitle/index.jsx";

const SectionStyles = styled.section`
    width: auto;
    padding: 40px 27px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const CourseContainer = styled.div`
    width: 100%;
    display: flex;
    overflow-x: auto;
    gap: 30px;
    padding-bottom: 12px;
    scrollbar-width: thick;
    scrollbar-color: #e4e0e0 #e7800a;

    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`;

const VideoItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px; 
`;

const VideoTitle = styled.h3`
    font-size: 24px; 
    text-align: center;
`;

/* const VideoDescription = styled.p`
    font-size: 16px; 
    text-align: center;
`; */

const Thumbnail = styled.img`
    width: 400px; 
    height: 250px;
    border-radius: 10px;
    filter: drop-shadow(4px 3px 5px rgb(255, 255, 255));
    cursor: pointer;
`;

const Home = () => {

    const [videos, setVideos] = useState(null);
    const [categories, setCategories] = useState(null);
    const [featuredVideo, setFeaturedVideo] = useState(null);
    const bannerRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videosData = await getVideos();
                setVideos(videosData);
                setFeaturedVideo(videosData[0]);
                const categoriesData = await getCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error("Error al cargar las categorías: ", error);
            }
        };

        fetchData();
    }, []);

    if (!videos || !categories) return <p>Cargando...</p>;

    // Handle clicking on thumbnail to move to banner
    const handleClickThumbnail = () => {
        // Obtain the position of the banner with respect to the window
        const bannerPosition = bannerRef.current.offsetTop;
        // Scroll to the banner position smoothly
        window.scrollTo({
            top: bannerPosition,
            behavior: "smooth",
        });
    };

    //Classification of videos by categories
    const videosByCategory = categories.map((category) => {
        return {
            ...category,
            videos: videos.filter((video) => video.category === category.title),
        };
    });

    return (
        <>
            {featuredVideo && (
                <Banner
                    ref={bannerRef} 
                    title={featuredVideo.title}
                    category={featuredVideo.category}
                    image={featuredVideo.image}
                    video={featuredVideo.video}
                />
            )}
            <div>
                <SectionStyles>
                    {videosByCategory.map((category) => (
                        <div key={category.id}>
                            <CourseTitle category={category.title}>
                                {category.title}
                            </CourseTitle>
                            <CourseContainer as="ul">
                                {category.videos.map((video) => (
                                    <VideoItem key={video.id}>
                                        <VideoTitle>{video.title}</VideoTitle>
                                        {/* <VideoDescription>{video.description}</VideoDescription> */}
                                        <Thumbnail
                                            src={video.image}
                                            alt={video.title}
                                            onClick={() => {
                                                handleClickThumbnail();
                                                setFeaturedVideo(video);
                                            }}
                                        />
                                        {/*  <a
                                            href={video.video}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Ver video
                                        </a> */}
                                    </VideoItem>
                                ))}
                            </CourseContainer>
                        </div>
                    ))}
                </SectionStyles>
            </div>
        </>
    );
};

export default Home;