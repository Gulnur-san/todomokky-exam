import React from 'react'
import styled from 'styled-components';


export default function Header() {
    return (
        <StyledHeader>
          <h1>Logo</h1>
          <StyledNav>
            <a href="#">Products</a>
            <a href="#">About us</a>
            <a href="#">Contacts</a>
          </StyledNav>
          <StyledButton>Login</StyledButton>
        </StyledHeader>
      );
    }
    
    const StyledHeader = styled.header`
      width: 100%;
      height: 80px;
      background-color: #056342;
      display: flex;
      justify-content: space-between;
      align-items: center;
    
      > h1 {
        color: #ffffff;
        padding-left: 20px;
      }
    `;
    
    const StyledNav = styled.nav`
      display: flex;
      gap: 30px;
      font-weight: 600;
      font-size: larger;
    
      > a {
        display: flex;
        text-decoration: none;
        cursor: pointer;
        color: white;
      }
    `;
    
    const StyledButton = styled.button`
      width: 100px;
      height: 35px;
      margin-right: 30px;
      font-weight: 500;
      font-size: larger;
      border-radius: 15px;
      border: none;
      font-family: Georgia, 'Times New Roman', Times, serif;
    `;

