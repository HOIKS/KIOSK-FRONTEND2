import styled, { keyframes } from 'styled-components';

// 반짝임 애니메이션 정의
const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const PhotoLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.colorBg};

  h1 {
    margin: 3rem;
    font-size: 8rem;
    line-height: 11rem;
    text-align: center;
    color: #9A4BFF;

    span {
      color: ${props => props.theme.colors.blue1};
    }
  }

  .photo {
    width: 70rem;
    height: 70rem;
    background-color: #777777;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      color: #ffffff;
      font-size: 11rem;
    }
  }

  // 반짝임 효과
  .blink {
    animation: ${blink} 0.5s ease; /* 0.5초 동안 한 번 반짝임 */
  }
`;


export const ButtonLayout = styled.div`
  width : 90vw;
  display : flex;
  justify-content : space-between;
  align-items : center;
  margin-bottom : 10rem;
  button {
    width : 43.7rem;
    height : 20.4rem;
    font-size : 6rem;
    border : none;
    border-radius : 3rem;
    cursor : pointer;
    &.again {
      background : #D9BBFF;
      color : ${props => props.theme.colors.blue1};
      }
      &.print {
        background : ${props => props.theme.colors.blue1};
        color : ${props => props.theme.colors.colorBg};
    }
  }
`