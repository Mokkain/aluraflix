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

const CourseTitle = ({children, color }) => {
    return <TitleStyles $color={color}>{children}</TitleStyles>;
};

export default CourseTitle;