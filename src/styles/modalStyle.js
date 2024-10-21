import styled from "styled-components"

// 맨 밑의 모달을 위한 레이아웃
export const ModalBackgroundContainer = styled.div`
  position: absolute;
  width : 100%;
  height : 100%;
  z-index: 20;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0.2rem);
`

// 상 단의 모달을 위한 레이아웃
export const ModalTopBackgroundContainer = styled.div`
  position: absolute;
  width : 100%;
  height : 100%;
  z-index: 50;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
`

// 메뉴 세부사항 모달
export const DetailMenuContainer = styled.div`
  position: absolute;
  z-index: 30;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  width: 86rem;
  height: 130rem;
  padding : 2.6rem 3rem;
  border-radius : 2rem;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  h2 {
    font-family : 'Pretendard-SemiBold';
    font-size : 3rem;
  }
  .drink-detail {
    display : flex;
    height : 25rem;
    align-items : center;
    justify-content : space-between;
    img {
      width : 18rem;
      height : 23rem;
      margin : 0 3rem 0 0;
    }
    .drink-text {
      display : flex;
      flex-direction : column;
      justify-content : space-between;
      height : 22rem;
      width : 60rem;
      h1 {
        font-family : 'Pretendard-ExtraBold';
        color : ${props => props.theme.colors.blue1};
        font-size : 4.2rem;
      }
      p {
        font-size : 2.5rem;
        font-family : 'Pretendard-Light';
        letter-spacing : 0.03rem;
        height : 10rem;
        word-break : keep-all;
        line-height : 3.5rem;
        &.count {
          width : 3rem;
          font-size : 3rem;
          height : 3rem;
          margin : 0 4rem;
          color : ${props => props.theme.colors.blue1};
          font-family : 'Pretendard-SemiBold';
        }
      }
      h3 {
        font-size : 3rem;
        color : ${props => props.theme.colors.gray4};
        font-family : 'Pretendard-SemiBold';
      }
      button {
        height : 2.5rem;
        width : 2.5rem;
        font-size : 2.3rem;
        border : none;
        border-radius : 2rem;
        background-color : ${props => props.theme.colors.blue1};
        color : ${props => props.theme.colors.colorBg};
      }
    }
  }
  hr{border: 0.1rem solid ${props => props.theme.colors.blue0}}
  .drink-option {
    width : 16rem;
    height : 14.6rem;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-between;
    padding : 1rem;
    margin : 0 3rem 0 0;
    border : none;
    border-radius : 1.5rem;
    background-color : ${props => props.theme.colors.gray1};
    font-size : 3rem;
    img {
      width : 8rem;
      height : 8rem;
    }
    &.active {
      background-color : ${props => props.theme.colors.blue1};
      color : ${props => props.theme.colors.colorBg};


    }
  }
  .drink-recipe-Btn {
    margin-top : 13rem;
    margin-left : auto;
    display : flex;
    align-items : center;
    justify-content : space-around;
    width : 27rem;
    height : 5rem;
    padding : 0 0.5rem;
    border : 0.3rem solid ${props => props.theme.colors.blue1};
    color : ${props => props.theme.colors.blue1};
    border-radius : 10rem;
    font-size : 2.5rem;
    font-family : 'Pretendard-SemiBold';
    background-color : ${props => props.theme.colors.colorBg};
    img {
      width : 4rem;
      height : 4rem;
    }
  }
  .total-price {
    margin-left : auto;
    font-size : 4.2rem;
    font-family : 'Pretendard-SemiBold';
    p {
      font-family : 'Pretendard-Bold';
      display : inline-block;
      color : ${props => props.theme.colors.blue1};
      width : 20rem;
      text-align : right;
      margin : 0 2rem 0 0;
    }
  }
  .btnBox {
    display : flex;
    align-items : center;
    justify-content : space-between;
    button {
      width : 39rem;
      height : 13rem;
      border: none;
      font-size : 3.9rem;
      font-family : 'Pretendard-Bold';
      border-radius : 1.5rem;
      background-color : ${props => props.theme.colors.gray1};
      &.order {
        background-color : ${props => props.theme.colors.blue1};
        color : ${props => props.theme.colors.colorBg};
      }
    }
  }
`

// 음료 제조 방식 모달 
export const DetailOptionContainer = styled.div`
  position: absolute;
  z-index: 80;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  width: 86rem;
  height: 87.5rem;
  padding : 2.6rem 3rem;
  border-radius : 2rem;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  h1 {
    font-family : 'Pretendard-SemiBold';
    font-size : 3rem;
    &.title {
      margin-top : 3rem;
    }
  }
  &.active {
    border : 0.1rem solid ${props => props.theme.colors.blue1};
  }
  .shot-option {
    width : 22.3rem;
    height : 22.3rem;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin : 0 2rem 0 0;
    border-radius : 2rem;
    background-color : ${props => props.theme.colors.gray1};
    img{
      height : 7.7rem;
    }
    h1 {
      font-family : 'Pretendard-SemiBold';
      font-size : 3rem;
      margin : 1.8rem 0 0.6rem 0;
    }
    h3 {
      font-family : 'Pretendard-SemiBold';
      font-size : 3rem;
      margin-top : 0.5rem;
      color : ${props => props.theme.colors.blue1}
    }
    &.active {
      border : 0.5rem solid ${props => props.theme.colors.blue1};
    }
  }
  .syrup-option {
    width : 22.3rem;
    height : 22.3rem;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin : 0 2rem 0 0;
    border-radius : 2rem;
    background-color : ${props => props.theme.colors.gray1};

    img{
      width : 20.3rem;
      height : 11.6rem;
      border-radius : 1rem;
    }
    h1 {
      font-family : 'Pretendard-SemiBold';
      font-size : 2.5rem;
      margin : 1.8rem 0 0.5rem 0;
    }
    h3 {
      font-family : 'Pretendard-SemiBold';
      font-size : 3rem;
      color : ${props => props.theme.colors.blue1}
    }
    &.active {
      border : 0.5rem solid ${props => props.theme.colors.blue1};
    }

  }
  .btnBox {
    display : flex;
    align-items : center;
    justify-content : space-between;
    button {
      width : 38rem;
      height : 8.5rem;
      border : none;
      border-radius : 1rem;
      font-size : 3rem;
      font-family : 'Pretendard-Bold';
      background-color : ${props => props.theme.colors.gray1};
      &.addOption {
        background-color : ${props => props.theme.colors.blue1};
        color : ${props => props.theme.colors.colorBg};        
      }
    }
  }
`

// 메뉴 최종 확인 모달 
export const MenuCheckContainer = styled.div`
  position: absolute;
  z-index: 30;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  width: 86rem;
  height: 130rem;
  padding : 2.6rem;
  border-radius : 2rem;
  display : flex;
  flex-direction  : column;
  justify-content : space-between;
  h1 {
    margin : 2rem 0 0rem 0;
    font-size : 3rem;
    font-family : 'Pretendard-SemiBold';
    letter-spacing : 0.1rem;
    height : 4rem;
    &.colored {
      margin : 0 0 1rem 0;
      color: ${props => props.theme.colors.blue2}
    }
  }
  hr{border: 0.1rem solid ${props => props.theme.colors.blue0}}
  .infoContainer {
    display : flex;
    align-items : center;
    justify-content : space-between;
    font-family : 'Pretendard-SemiBold';
    font-size : 3rem;
    .menuCount {
      display : flex;      
      justify-content:space-between;
      p{
        text-align : center;
        background-color: ${props => props.theme.colors.blue1};
        color: ${props => props.theme.colors.colorBg};
        border-radius : 1rem;
        margin : 0 2rem;
        padding : 0 5rem;
      }
    }
    .totalPrice {
      display : flex;
      justify-content:space-between;
      p{
        text-align : right;
        font-size : 3.2rem;
        color: ${props => props.theme.colors.blue1};
        margin : 0 1.5rem 0 8rem;
      }
    }
  }
  .btnContainer {
    height : 15.7rem;
    display : flex;
    align-items : center;
    justify-content : space-between;
    align-items: center;
    button {
      font-family : 'Pretendard-Bold';
      font-size : 3.8rem;
      height : 100%;
      border : none;
      border-radius : 1rem;
      &.cancel{
        width : 13rem;
        background-color : ${props => props.theme.colors.gray1}
        cursor : pointer;
      }
      &.here{
        width : 32rem;
        background-color : ${props => props.theme.colors.blue1};
        color : ${props => props.theme.colors.colorBg};
        cursor : pointer;
      }
      &.togo{
        width : 32rem;
        background-color : ${props => props.theme.colors.blue0};
        cursor : pointer;
      }
    }
  }
`

// 결제 방식 선택 모달
export const PaymentSelectContainer = styled.div`
  position: absolute;
  z-index: 40;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  width: 86rem;
  height: 130rem;
  padding : 2.6rem;
  border-radius : 2rem;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  .close {
    position : absolute;
    top: 2%;
    right: 3%;
    margin-left : auto;
    width : 3.5rem;
  }
  h1 {
    font-family : 'Pretendard-SemiBold';
    font-size : 3rem;
    margin-bottom : 2rem;
    &.payInfo {
      margin-bottom : 0rem;
    }
  }
  .discount-option {
    width : 18rem;
    height : 14.3rem;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin : 0 2rem 5rem 0;
    background-color : ${props => props.theme.colors.colorBg};
    border : 0.2rem solid ${props => props.theme.colors.gray1};
    border-radius : 1.5rem;
    font-size : 3rem;
    img {
      width : 8rem;
      height : 8rem;
      border-radius : 1rem;
      margin : 0 0 1rem 0;
    }
    &.active {
      border : 0.4rem solid ${props => props.theme.colors.blue1};
    }
  }
  .payment-option {
    width : 29rem;
    height : 14rem;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin : 0 2rem 0 0;
    background-color : ${props => props.theme.colors.colorBg};
    border : 0.2rem solid ${props => props.theme.colors.gray1};
    border-radius : 1.5rem;
    font-size : 3rem;
    font-family : 'Pretendard-SemiBold';
    img {
      height : 6rem;
      border-radius : 1rem;
      margin : 0 0 1rem 0;
    }
  }
  hr{
    margin : 60rem 0 0 0;
    border: 0.1rem solid ${props => props.theme.colors.blue0};
  }
  .infoContainer {
    display : flex;
    align-items : center;
    justify-content : space-between;
    font-family : 'Pretendard-SemiBold';
    font-size : 3rem;
    margin-bottom : 2rem;
    .menuCount {
      display : flex;      
      justify-content:space-between;
      p{
        text-align : center;
        background-color: ${props => props.theme.colors.blue1};
        color: ${props => props.theme.colors.colorBg};
        border-radius : 1rem;
        margin : 0 2rem;
        padding : 0 5rem;
      }
    }
    .totalPrice {
      display : flex;
      justify-content:space-between;
      p{
        text-align : right;
        font-size : 3.2rem;
        color: ${props => props.theme.colors.blue1};
        margin : 0 1.5rem 0 8rem;
      }
    }
  }
`

// 결제 화면 모달
export const CardpayContainer = styled.div`
  position: absolute;
  z-index: 90;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  width: 86rem;
  height: 80rem;
  padding : 4rem;
  border-radius : 2rem;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  h1 {
    font-family : 'Pretendard-SemiBold';
    font-size : 3rem;
  }
  hr{border: 0.1rem solid ${props => props.theme.colors.blue0}}
  .infoContainer {
    display : flex;
    align-items : center;
    justify-content : space-between;
    font-family : 'Pretendard-SemiBold';
    font-size : 3rem;
    .menuCount {
      display : flex;      
      justify-content:space-between;
      p{
        text-align : center;
        background-color: ${props => props.theme.colors.blue1};
        color: ${props => props.theme.colors.colorBg};
        border-radius : 1rem;
        margin : 0 2rem;
        padding : 0 5rem;
      }
    }
    .totalPrice {
      display : flex;
      justify-content:space-between;
      p{
        text-align : right;
        font-size : 3.2rem;
        color: ${props => props.theme.colors.blue1};
        margin : 0 1.5rem 0 8rem;
      }
    }
  }
  button {
    height : 11rem;
    border : none;
    font-size : 3.8rem;
    font-family : 'Pretendard-Bold';
    border-radius : 1rem;
    &.cancel {
      width : 16rem;
    }
    &.pay-approval {
      width : 57rem;
      background-color : ${props => props.theme.colors.blue1};
      color : ${props => props.theme.colors.colorBg};

    }
  }
  .imgBox {
    background-color : ${props => props.theme.colors.gray1};
    height : 40rem;
    display : flex;
    align-items : center;
    justify-content : center;
    border-radius : 1rem;
    img {
      height : 30rem;
    }
  }
`


// 영수증 출력 모달
export const ReceiptModalContainer = styled.div`
  position: absolute;
  z-index: 90;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  width: 86rem;
  height: 50rem;
  padding : 2rem;
  border-radius : 2rem;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  h1 {
    font-family : 'Pretendard-SemiBold';
    font-size : 3.5rem;
    margin : 1.5rem 0;
  }
  .btnBox {
    margin : 2rem 0 0 0;
    width : 90%;
    display : flex;
    align-items : center;
    justify-content : space-between;
    button {
      width : 35rem;
      height : 15rem;
      font-size : 3.8rem;
      font-family : 'Pretendard-SemiBold';
      letter-spacing : 0.15rem;
      border : none;
      border-radius : 1rem;
      &.print {
        background-color : ${props => props.theme.colors.blue1};
        color : ${props => props.theme.colors.colorBg};
      }
    }
  }
`