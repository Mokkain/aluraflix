import { useState, useEffect, useRef } from "react";
import Banner from "../Components/Banner";
import { getVideos } from "../Services/api.jsx";
import { getCategories } from "../Services/apiCategories.jsx";
import styled from "styled-components";
import CatTitle from "../Components/CatTitle/index.jsx";
import { categoryColors } from "../Components/CatTitle/index.jsx";
import editIcon from "../assets/editar.png"
import deleteIcon from "../assets/borrar.png"
import Modal from "../Components/Modal/index.jsx";

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
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    ${(props) => props.$category && `
         scrollbar-color: #e4e0e0 ${props.$category};
    `}
`;

const VideoItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px; 
    background-color: white;
    border-radius: 10px;
    margin: 10px;
    ${(props) => props.$category && `
        box-shadow: -6px 8px 9px ${props.$category};
    `}
`;

const VideoTitle = styled.h3`
    font-size: 24px; 
    text-align: center;
    margin: 16px 0;
`;

const Thumbnail = styled.img`
    width: 100%; 
    height: auto;
    cursor: pointer;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
`;

const Button = styled.button`
    padding: 9px 40px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: ${props => (props.edit ? "#3514a3" : "#b91690")};
    background-image: url(${props => (props.edit ? editIcon : deleteIcon)});
    background-repeat: no-repeat;
    background-position: 12px center;;
    background-size: 27px 27px; 
    text-indent: 15px;
    filter: drop-shadow(-2px 3px 1px rgba(0, 0, 0, 0.7));
`;

const Home = () => {

    const [videos, setVideos] = useState(null);
    const [categories, setCategories] = useState(null);
    const [featuredVideo, setFeaturedVideo] = useState(null);
    const [videoSelected, setVideoSelected] = useState(false);
    const bannerRef = useRef(null);
    const [showModal, setShowModal] = useState(false);


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
    const handleClickThumbnail = (video) => {
        setFeaturedVideo(video);
        setVideoSelected(true);
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

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleFormSubmit = (formData) => {
        console.log("Envio de información del formulario: ", formData);
        // Aquí puedes manejar la lógica para guardar la data del formulario
    };


    return (
        <>
            {featuredVideo && (
                <Banner
                    ref={bannerRef}
                    title={videoSelected ? featuredVideo.title : ""}
                    category={featuredVideo.category}
                    image={featuredVideo.image}
                    video={featuredVideo.video}
                    description={videoSelected ? featuredVideo.description : ""}
                />
            )}
            <div>
                <SectionStyles>
                    {videosByCategory.map((category) => (
                        <div key={category.id}>
                            <CatTitle category={category.title}>
                                {category.title}
                            </CatTitle>
                            <CourseContainer as="ul" $category={categoryColors[category.title]}>
                                {category.videos.map((video) => (
                                    <VideoItem key={video.id}
                                        $category={categoryColors[category.title]}>
                                        <VideoTitle>{video.title}</VideoTitle>
                                        <Thumbnail
                                            src={video.image}
                                            alt={video.title}
                                            onClick={() => handleClickThumbnail(video)}
                                        />
                                        <ButtonContainer>
                                            <Button >Borrar</Button>
                                            <Button edit onClick={openModal}>Editar</Button>
                                            <Modal
                                                showModal={showModal}
                                                closeModal={closeModal}
                                                onSubmit={handleFormSubmit}
                                            />
                                        </ButtonContainer>
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
