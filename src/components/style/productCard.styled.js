import styled from "styled-components";

export const ProductCardStyle = styled.div`
  text-align: center;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  h2 {
    font-size: 18px;
    margin: 5px 0;
    font-weight: 600;
  }

  span {
    display: block;
  }

  button {
    border-radius: 100px;
    padding: 2px 10px;
    margin: 8px 0;
    background-color: transparent;
    cursor: pointer;
  }
`;
