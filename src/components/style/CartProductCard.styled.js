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

  h3 {
    font-size: 20px;
    color: gray;
  }

  h4 {
    font-size: 18px;
    margin: 5px 0;
  }

  button {
    padding: 4px 15px;
    border-radius: 8px;
    cursor: pointer;
    background-color: transparent;
  }

  button:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 900px) {
    & > div:nth-of-type(1) {
      width: 20%;
    }

    & > div:nth-of-type(2) {
      width: 60%;
    }
  }

  @media (max-width: 530px) {
    width: 94%;

    & > div:nth-of-type(1) {
      width: 20%;
    }

    & > div:nth-of-type(2) {
      width: 60%;
    }

    h3 {
      font-size: 16px;
      line-height: 1.2;
    }

    h4 {
      font-size: 14px;
    }

    button {
      padding: 2px 10px;
    }

    .quantity__button {
      margin-top: 20px;
      width: 80px;

      span {
        width: 20px;
        height: 20px;
      }

      .quantity {
        width: 30px;
      }
    }
  }

  @media (max-width: 424px) {
    & > div:nth-of-type(1) {
      width: 20%;
    }

    & > div:nth-of-type(2) {
      width: 60%;
    }
  }
`;
