import styled from "styled-components"
import React from "react";
import banner from "../../assets/banner.jpg"
import CourseTitle from "../CourseTitle";

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    display: flex;
    flex-direction: row-reverse;
    background-repeat: no-repeat;
    align-items: center;
    min-height: 832px;
    margin: 0;
    max-width: 100%;
    background-size: cover;
    position:relative;
    opacity: 0.9;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 90%;
    background-color: rgba(0, 0, 0, 0.3); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 20px;
    z-index: 2; 
`;

const ThumbnailLink = styled.a`
  position: relative;
  z-index: 3; 
`;

const Thumbnail = styled.img`
    width: 400px; 
    height: 250px;
    border-radius: 10px;
    margin-right: 50px;
    filter: drop-shadow(4px 3px 5px rgb(255, 255, 255));
`;

const DescriptionContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 16px;
    color: white;
    padding-bottom: 40px;
    margin-left: 50px;
`;

const DescriptionTitle = styled.h3`
  font-size: 46px;
  font-weight: 600;
  text-align: start;
  filter: drop-shadow(4px 3px 6px rgb(0, 0, 0));
`;

const DescriptionStyles = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: justify;
  line-height: 1.5;
  filter: drop-shadow(4px 3px 6px rgb(0, 0, 0));
`;

const Banner = React.forwardRef(({title, category, image, video }, ref) => {

    return (
        <FigureEstilizada ref={ref} $backgroundImage={banner}>
            <Overlay>
                <DescriptionContainer>
                    <CourseTitle category={category}>{category}</CourseTitle>
                    <div>
                        <DescriptionTitle>Challenge React</DescriptionTitle>
                        <DescriptionStyles>
                            Este challenge es una forma de aprendizaje. Es un mecanismo donde
                            podrás comprometerte en la resolución de un problema para poder
                            aplicar todos los conocimientos adquiridos en la formación React.
                        </DescriptionStyles>
                    </div>
                </DescriptionContainer>
            </Overlay>
            <ThumbnailLink href={video} target="_blank" rel="noopener noreferrer">
                <Thumbnail src={image} alt={title} />
            </ThumbnailLink>
        </FigureEstilizada>
        );
});

export default Banner;