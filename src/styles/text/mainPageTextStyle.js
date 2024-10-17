import styled from "styled-components";

export const KioskMainContainer = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    background-color : ${props => props.theme.colors.colorMain};
    h1 {
      font-size : 10rem;
    }
`
export const startBtnContainer = styled.div `
    width : 100%;
    height : 95vh;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    margin-top : 15rem;
    button {
      margin : 0 0 10rem 0;
      width : 86.904rem;
      height : 49.92rem;
      font-size : 12rem;
      background : ${props => props.theme.colors.primaryMain};
      color : ${props => props.theme.colors.colorBg};
      border : none;
      border-radius : 3rem;
      cursor : pointer;
    }
`
export const MenuHeader = styled.div`
    width : 100vw;
    height : 8rem;
    display : flex;
    justify-content : space-around;
    align-items: start;
    margin-top : 2rem;
`

export const ScreenBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 4rem;
  margin-top: 2rem;

  button {
    width: 15.9rem;
    height: 4.8rem;
    color: ${props => props.theme.colors.colorBg};
    background-color: ${props => props.theme.colors.gray5};
    font-size: 2.5rem;
    font-family : 'Pretendard-Medium';
    margin: 0 0.5rem;
    border: none;
    border-radius: 5rem;

    &.active {
      background-color: ${props => props.theme.colors.primaryMain};
    }
  }
`;
export const languageBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 4rem;
  margin-top: 2rem;

  button {
    width: 14.2rem;
    height: 4.8rem;
    color: ${props => props.theme.colors.colorBg};
    background-color: ${props => props.theme.colors.gray5};
    font-size: 2.5rem;
    font-family : 'Pretendard-Medium';
    margin: 0 0.5rem;
    border: none;
    border-radius: 5rem;

    &.active {
      background-color: ${props => props.theme.colors.primaryMain};
    }
  }
`;