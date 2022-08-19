import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styled from "styled-components";

const Header = () => {
 return (
    <MainHeader>
        <NavLink to = "/">
            <img src='./images/logo.png' alt='logo' className='logo'/>

        </NavLink>
        <Navbar />
    </MainHeader>
 );
  
};

const MainHeader = styled.header`
background: #E8CBC0;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #636FA4, #E8CBC0);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #636FA4, #E8CBC0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */







  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 23%;
  }


`;

export default Header;