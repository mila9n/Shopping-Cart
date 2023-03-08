import styled from "styled-components";

export const ShopStyle = styled.section`
  & {
    margin: 70px 0;
  }

  h1 {
    font-size: 60px;
    margin: 0 0 40px;
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

  .loading {
    display: table;
    margin: 50px auto;
  }

  @media (max-width: 900px) {
    .products {
      width: 94%;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 550px) {
    .products {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
