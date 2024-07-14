import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

const HeaderContainer = styled.header`
   padding: 60px 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-image: linear-gradient(to right bottom, #26158a, #6db4d0);
   img{
    width: 100%;
    height: 100%;
    margin: 0 30px;
    filter: drop-shadow(4px 3px 5px rgb(0, 0, 0));
   }
`

const Navigation = styled.nav`
    display: flex;
    align-items: center;
    & ul {
        list-style: none;
        display: flex;
        filter: drop-shadow(4px 3px 4px rgba(0, 0, 0, 0.7));
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
        filter: drop-shadow(4px 3px 4px rgba(0, 0, 0, 0.7));
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
                    <NavLink ><Link to="/" >Home</Link></NavLink>
                    <NavLink ><Link to="/NewVideo" >Nuevo Video</Link></NavLink>
                </ul>
            </Navigation>
        </HeaderContainer>

    )
}

export default Header