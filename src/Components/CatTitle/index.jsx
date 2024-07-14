import styled from "styled-components";
import React from "react";

const TitleStyles = styled.h2`
    font-size: 33px;
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;
    padding: 20px;
    width: 260px;
	border-radius: 15px;
	color: #ffffff;
    width: auto;
    filter: drop-shadow(4px 3px 4px rgba(0, 0, 0, 0.737));
    background-color: ${(props) => props.$color};
`;

 export const categoryColors = {
    "Lofi": "#740d7f",
    "Clásica": "#0b1182",
    "Sonidos Ambientales": "#db3b06",
};

const CatTitle = ({children, category }) => {
    const color = categoryColors[category] || "#1b091d"; // Default color if category not found
    return <TitleStyles $color={color}>{children}</TitleStyles>;
};

export default CatTitle;