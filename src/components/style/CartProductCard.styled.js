import styled from "styled-components";

export const CartProductStyle = styled.div`
  width: 80%;
  max-width: 1100px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 10px gray;
  padding: 20px;

  & > div:nth-of-type(1) {
    width: 10%;
  }

  & > div:nth-of-type(2) {
    width: 80%;
  }

  .quantity__button {
    display: flex;
    margin-top: 20px;
    width: 100px;
    justify-content: space-between;
    align-items: center;

    span {
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid gray;
      cursor: pointer;
    }

    .quantity {
      cursor: default;
      width: 40px;
    }
  }
`;
