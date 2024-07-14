import styled from "styled-components";
import logo from "../../assets/logo.png"

const FooterStyles = styled.footer`
    padding: 60px 0;
    margin-top: 80px; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right bottom, #26158a, #6db4d0);
    box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.5);
`;

const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(4px 3px 4px rgba(0, 0, 0, 0.7));
    gap: 20px;
    & p, img{
        color: #ece7e7;
        font-weight: 100;
        font-size: 17px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        text-align: center;
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <FooterInfo>
                <img src={logo} alt="Logo de Aluraflix" />
                <p>Desarrollado por Daniela Mejía Ventura</p>
                <p>Alura Latam 2024</p>
            </FooterInfo>
        </FooterStyles>
    );
};

export default Footer;