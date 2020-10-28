import styled from 'styled-components';

export const Card = styled.div`
  width: 25%;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid #000;
  }
`

export const CardThumb = styled.div`
 & img {
  width: 100%;
 }
`

export const CardBtn = styled.div`
  background-color: ${props=>(props.outlined ? '#333' : "red")};
    color: ${props=>(props.outlined ? '#fff' : "#000")};
    padding: 15px 0;
    margin-top: 10px;
    cursor: pointer;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    :hover {
      background-color: green;
      border: ${props=>(props.outlined ? '5px solid red' : "none")};
    }
`

export const CardItemTitle = styled.p`
    position: relative;
    padding: 0 20px;
    height: 45px;
    .&:before {
      content: "";
      width: 20px;
      height: 2px;
      background-color: #eabf00;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -10px;
    }
`

export const CardPrice = styled.div`
    padding: 10px 0;
    & installment{
      color: #9c9b9b;
    }
`

