import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <div>
      <HeaderContainer>
        <Logo>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/VR_Logo_Virtual_Reality_Logo.svg/512px-VR_Logo_Virtual_Reality_Logo.svg.png"
            alt="vr-device"
          />
        </Logo>
        <Navbar>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Docs</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </Navbar>
      </HeaderContainer>
    </div>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  height: 90%;
  img {
    object-fit: contain;
    height: 100%;
  }
`;
const Navbar = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 300px;
    li > a {
      color: #d8d6d6;
      font-size: 14px;
      transition: color 0.2s ease;
      &:hover {
        color: #fff;
      }
    }
  }
`;
