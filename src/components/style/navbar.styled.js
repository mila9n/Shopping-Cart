import styled from "styled-components";

export const NavbarStyle = styled.header`
  border: 1px solid black;
  background-color: #000;

  & > nav {
    max-width: 1100px;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    column-gap: 25px;
    justify-content: flex-end;

    & > a {
      color: #fff;
      text-decoration: none;
      font-size: 20px;
    }
  }

  .cart {
    position: relative;
  }

  .totalitem {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: lightblue;
    color: #000;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 800;
    border-radius: 100px;
    z-index: 2;
  }
`;
