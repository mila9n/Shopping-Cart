import styled from "styled-components";

export const ShopStyle = styled.section`
  h1 {
    font-size: 60px;
    text-align: center;
  }

  .products {
    max-width: 1100px;
    margin: 0 auto;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;
