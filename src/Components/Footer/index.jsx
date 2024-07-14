import styled from "styled-components";
import logo from "../../assets/logo.png"

const FooterStyles = styled.footer`
    padding: 60px 0;
    margin-top: 80px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(to right bottom, #26158a, #6db4d0);
    img{
        width: 18%;
        height: 18%;
        margin: 0 auto;
        filter: drop-shadow(4px 3px 5px rgb(0, 0, 0));
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <img src={logo} alt="Logo de Aluraflix" />
        </FooterStyles>
    );
};

export default Footer;