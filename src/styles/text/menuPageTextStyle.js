import styled from "styled-components";

// 전체 페이지 레이아웃
export const MenuSelectContainer = styled.div`
  width : 100vw;
  height : 100vh;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  background-color : ${props => props.theme.colors.colorMain};
  align-items : center;
  .go_to_credit {
    width : 100%;
    height : 40rem;
    display : flex;
    justify-content : space-between;
    padding : 2.05rem;
    align-items : center;
    background-color : #373737;
    box-shadow : 0 -35px 50px -10px rgba(0, 0, 0, 0.2);

  }
`

// 상위 메뉴 카테고리 UI
export const TopCategoryBox = styled.div`
  width : 100%;
  margin : 0 auto;
  height : 8rem;
  display : flex;
  margin-top : 1rem;
  align-items: end;
  justify-content : space-around;
  box-shadow : 0 35px 40px -10px rgba(0, 0, 0, 0.1);
`
// 상위 카테고리 메뉴 버튼 UI
export const TopCategoryBtn = styled.button`
  height : 8rem;
  width :  15rem;
  font-size : 3rem;
  font-family : 'Pretendard-SemiBold';
  background-color : ${props => props.theme.colors.colorMain};
  color : ${props => props.theme.colors.colorBg};
  border : none;
  &.active {
  border-bottom : 0.5rem solid ${props => props.theme.colors.primaryMain}
  }
`
// 하위 메뉴 카테고리 UI 
export const SubCategoryBox = styled.div`
  width : 100%;
  margin : 0 auto;
  height : 4.5rem;
  margin-top : 2rem;
  display : grid;
  grid-template-columns : repeat(5, 1fr);
  align-items : center;
  justify-content : center;
  
`
// 하위 카테고리 메뉴 버튼 UI
export const SubCategoryBtn = styled.button`
  height : 4rem;
  width : 15.2rem;
  margin : 0 auto;
  font-size : 2.5rem;
  font-family : 'Pretendard-SemiBold';
  border : none;
  background-color:transparent;
  color : ${props => props.theme.colors.colorBg};
  &.active {
    background-color : ${props => props.theme.colors.primaryMain};
    color : ${props => props.theme.colors.colorBg};
    border-radius : 100rem;
  }
`

// 전체 메뉴 보여주기 레이아웃
export const MenuItemContainer = styled.div`
  width: 100%;
  height: 126.6rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  row-gap: 3rem;
  column-gap : 6rem;
  margin-top: 1rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

// 메뉴 Item 레이아웃
export const MenuItemBox = styled.div`
  width : 28.617rem;
  height : 39.662rem;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : space-around;
  cursor : pointer;
  
  img {
    width: 24.9rem;
    height : 24.9rem;
    border-radius : 1rem;
  }
  h1 {
    width : 35rem;
    text-align : center;
    margin-top : 1.4rem;
    margin-bottom : 0.7rem;
    font-size : 3.765rem;
    font-family : 'Pretendard-SemiBold';
    color : ${props => props.theme.colors.colorBg};
    }
    p {
      font-size : 3.138rem;
      font-family : 'Pretendard-SemiBold';
      color : ${props => props.theme.colors.colorBg};
  }
`

// 작은 장바구니 UI
export const SmallShoppingBag = styled.div`
  width : 65.6rem;
  height : 35.9rem;
  border-radius : 1rem;
  background-color : ${props => props.theme.colors.colorMain};
  padding : 1.5rem;
`
// 장바구니 짧은 ITEM UI
export const SmallShoppingItem = styled.div`
  width : 100%;
  height : 4.9rem;
  display : flex;
  align-items : center;
  justify-content : space-between;
  font-size : 2.5rem;
  font-family : 'Pretendard-Medium';
  border-bottom : 0.1rem solid ${props => props.theme.colors.primaryLight};
  color : ${props => props.theme.colors.colorBg};
  .menu-info {
    width : 41.5rem;
    display : flex; 
    align-items : center;
    justify-content : space-between;
    }
    .quantity-info {
      .quantity {
        display : inline-block;
        width : 7rem;
        text-align : center;
      }
      .updown-btn {
        width : 1.74rem;
        height : 1.74rem;
        margin : 0 0.5rem;
      }
  }
  img {
    width : 1.273rem;
    height : 1.273rem;
  }
`
// 큰 장바구니 UI
export const BigShoppingBag = styled.div`
  width : 80.8rem;
  height : 80rem;
  border-radius : 1rem;
  background-color : ${props => props.theme.colors.colorMain};
`
// 장바구니 큰 ITEM UI
export const BigShoppingItem = styled.div`
  width : 80.8rem;
  height : 4.9rem;
  display : flex;
  align-items : center;
  justify-content : space-between;
  font-size : 2.5rem;
  font-family : 'Pretendard-Medium';
  padding : 0 2rem;
  border-radius : 1rem;
  margin : 0 0 1rem 0;

  &:nth-child(odd) {
    background-color : ${props => props.theme.colors.primaryMain};
  }

  .menu-info {
    width : 41.5rem;
    display : flex; 
    align-items : center;
    justify-content : space-between;
    }
    .quantity {
      display : inline-block;
      width : 7rem;
      text-align : center;
    }
  }
`

// 현재 장바구니 현황
export const CurrentBagContainer = styled.div`
  width : 36rem;  
  height : 35.9rem;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  color : ${props => props.theme.colors.colorBg};
  h3 {
    font-size : 2.8rem;
    font-family : 'Pretendard-Regular';
    text-align: right;
  }
  p {
    display : inline-block;
    width : 11.4rem;
    height : 4rem;
    text-align : center;
    font-size : 3rem;
    font-family : 'Pretendard-SemiBold';
    margin : 0 2rem;
    border-radius : 1rem;
    color : ${props => props.theme.colors.primaryMain};
    &.selected-menu {
      background-color : ${props => props.theme.colors.primaryMain};
      color : ${props => props.theme.colors.colorBg};
    } 
  }
  button {
    width : 36rem;
    color : ${props => props.theme.colors.colorBg};
    border : none;
    border-radius : 1rem;
    &.payBtn {
      height : 15.2rem;
      background-color : ${props => props.theme.colors.primaryMain};
      font-size : 3.7rem;
      font-family : 'Pretendard-Bold';
      letter-spacing : 0.2rem;
      }
    &.backBtn {
      height : 8.6rem;
      font-size : 3rem;
      background-color : ${props => props.theme.colors.gray5};
      font-family : 'Pretendard-SemiBold';
      color : ${props => props.theme.colors.colorMain};
    }
  }

`

