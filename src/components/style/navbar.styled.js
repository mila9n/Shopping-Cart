import styled from "styled-components";

export const NavbarStyle = styled.header`
  background-color: #000;
  position: fixed;
  top: 0;
  width: 100%;

  & > nav {
    max-width: 1100px;
    padding: 15px 10px;
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

    & > a:hover {
      color: lightblue;
    }
  }

  .cart {
    position: relative;
  }

  .totalitem {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: tomato;
    color: #fff;
    width: 17px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 800;
    border-radius: 100px;
    z-index: 2;
  }

  .selected {
    color: skyblue;
  }
`;
