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
    background-color: ${(props) => props.$color};
`;

const categoryColors = {
    "Lofi": "#740d7f",
    "Clásica": "#0b1182",
    "Sonidos Ambientales": "#db3b06",
};

const CatTitle = ({children, category }) => {
    const color = categoryColors[category] || "#1b091d"; // Default color if category not found
    return <TitleStyles $color={color}>{children}</TitleStyles>;
};

export default CatTitle;