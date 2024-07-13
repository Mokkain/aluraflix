import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

const HeaderContainer = styled.header`
   padding: 60px 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-image: radial-gradient(circle, #1fe7bf, #ffffff);
   img{
    width: 100%;
    height: 100%;
    margin: 0 30px;
    filter: drop-shadow(4px 3px 5px rgb(255, 255, 255));
   }
`

const Navigation = styled.nav`
    display: flex;
    align-items: center;
    & ul {
        list-style: none;
        display: flex;
    }
`
const NavLink = styled.li`
    & a{
        color: #ffffff;
        text-decoration: none;
        font-size: 22px;
        font-weight: normal;
        border-radius: 15px;
        border: 2px solid #FFFF;
        padding:10px;
        margin-right: 50px;
        background-color: #3b4f8a;
    }
`

const Header = () => {

    return (
        <HeaderContainer>
            <Link to="/">
                <img src={logo} alt="Logo de Aluraflix" />
            </Link>
            <Navigation>
                <ul >
                    <NavLink ><Link to="/home" >Home</Link></NavLink>
                    <NavLink ><Link to="/" >Nuevo Video</Link></NavLink>
                </ul>
            </Navigation>
        </HeaderContainer>

    )
}

export default Header