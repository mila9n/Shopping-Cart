import styled from "styled-components";

export const CartStyle = styled.div`
  /* border: 1px solid black; */
  margin: 90px 0;

  & > div > h2 {
    text-align: center;
    font-size: 40px;
  }

  .total {
    font-size: 30px;
    font-weight: 600;
    width: 80%;
    padding: 20px 10px 30px;
    max-width: 1100px;
    margin: 20px auto;
    display: block;
    /* border: 1px solid black; */
  }

  .total__word {
    color: gray;
    font-size: 30px;
  }

  @media (max-width: 530px) {
    .total {
      width: 94%;
    }
  }
`;
