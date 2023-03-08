import styled from "styled-components";

export const ProductCardStyle = styled.div`
  text-align: center;
  box-shadow: 2px 1px 10px lightgray;
  padding: 10px 15px;

  img {
    width: 100%;
  }

  h2 {
    font-size: 17px;
    margin: 10px 0 5px;
    line-height: 1.4;
    font-weight: 500;
    color: gray;
  }

  span {
    display: block;
    font-size: 15px;
    font-weight: 700;
  }

  button {
    border-radius: 100px;
    border: 2px solid gray;
    padding: 4px 20px;
    margin: 10px 0;
    font-size: 15px;
    background-color: transparent;
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }

  button:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 550px) {
    img {
      margin: 0 auto;
      width: 200px;
    }
  }
`;
