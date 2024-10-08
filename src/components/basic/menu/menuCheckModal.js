import * as md from "../../../styles/modalStyle";
import * as m from "../../../styles/basic/menuPageBasicStyle";
import PaymentSelectModal from "../paymentSelectModal";
import { useDispatch, useSelector } from "react-redux";
import { SetPaymentModal, SetReceiptModal, SetTotalMenuModal } from "../../../redux/kioskAction";
import TotalMenuList from "../totalMenuList";
import { useState } from "react";


function MenuCheckModal() {
  const dispatch = useDispatch();
  let totalMenuCount = useSelector((state) => state.totalMenuCount);
  let totalPrice = useSelector((state) => state.totalPrice);
  let shoppingBagList = useSelector((state) => state.shoppingBagList);

  let [orderData, setOrderData] = useState({}); // 장바구니 리스트 가져오기
  
  const formatDateTime = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월
    const day = String(date.getDate()).padStart(2, '0'); // 일
    const hours = String(date.getHours()).padStart(2, '0'); // 시
    const minutes = String(date.getMinutes()).padStart(2, '0'); // 분
    return `${month}/${day} ${hours}:${minutes}`; // 형식화된 문자열 반환
  };

  const generateRandomKey = () => {
    return '주문번호_' + Math.floor(1000 + Math.random() * 9000); // 랜덤 키 생성
  };

  const selectPackage = () => {
    dispatch(SetTotalMenuModal(false));
    dispatch(SetPaymentModal(true));

  }

  const selectHere = () => {
    const randomKey = generateRandomKey(); // 랜덤 키 생성
    const orderDateTime = formatDateTime(new Date()); // 현재 날짜와 시간을 포맷팅
    const packaging = '매장';
    const TotalMenuCount = totalMenuCount;
    const TotalPrice = totalPrice;

    // 주문 번호를 localStorage에서 가져와서 1 증가
    let orderNumber = parseInt(localStorage.getItem('orderNumber')) || 100; // 주문 번호 가져오기, 없으면 0
    orderNumber += 1; // 주문 번호 증가

    // 주문 날짜와 시간을 포함한 객체 생성
    const orderData = {
      shoppingBagList,
      orderDateTime,
      orderNumber, // 증가된 주문 번호 추가
      packaging,
      TotalPrice,
      TotalMenuCount
    };
    
    setOrderData(orderData);
    localStorage.setItem(randomKey, JSON.stringify(orderData)); // LocalStorage에 저장
    localStorage.setItem('orderNumber', orderNumber);
    localStorage.setItem('orderID', randomKey); // 업데이트한 주문 번호 저장

    dispatch(SetTotalMenuModal(false));
    dispatch(SetReceiptModal(true));
  }
  const selectToGo = () => {
    const randomKey = generateRandomKey(); // 랜덤 키 생성
    const orderDateTime = formatDateTime(new Date()); // 현재 날짜와 시간을 포맷팅
    const packaging = '포장';
    const TotalMenuCount = totalMenuCount;
    const TotalPrice = totalPrice;

    // 주문 번호를 localStorage에서 가져와서 1 증가
    let orderNumber = parseInt(localStorage.getItem('orderNumber')) || 100; // 주문 번호 가져오기, 없으면 0
    orderNumber += 1; // 주문 번호 증가

    // 주문 날짜와 시간을 포함한 객체 생성
    const orderData = {
      shoppingBagList,
      orderDateTime,
      orderNumber, // 증가된 주문 번호 추가
      packaging,
      TotalMenuCount,

    };

    setOrderData(orderData);
    localStorage.setItem(randomKey, JSON.stringify(orderData)); // LocalStorage에 저장
    localStorage.setItem('orderNumber', orderNumber);
    localStorage.setItem('orderID', randomKey); // 업데이트한 주문 번호 저장

    dispatch(SetTotalMenuModal(false));
    dispatch(SetReceiptModal(true));

  }

  const backToMenu = () => {
    dispatch(SetTotalMenuModal(false));
  }
    return (
      <div>
        <md.MenuCheckContainer>
          <h1>주문 내역을 다시 한번 확인하여 주세요.</h1>
          <hr/>
          <TotalMenuList/>
          <h1 className="colored">※ 매장 식사 시, 일회용 컵 사용 불가합니다 ※</h1>
          <hr/>
          <div className="infoContainer">
            <div className="menuCount">
              <h3>선택메뉴</h3>
              <p>{totalMenuCount}</p>
              <h3>개</h3>
            </div>
            <div className="totalPrice">
              <h3>총 금액</h3>
              <p>{totalPrice.toLocaleString('ko-KR')}</p>
              <h3>원</h3>
            </div>
          </div>
          <div className="btnContainer">
            <button 
              className="cancel"
              onClick={backToMenu}
            >
              취소
            </button>
            <button 
              className="here"
              onClick={selectPackage}
            >
              매장 식사
            </button>
            <button 
              className="togo"
              onClick={selectPackage}
            >
              포장 주문
            </button>
          </div>
        </md.MenuCheckContainer>
      </div>
    )
  }
export default MenuCheckModal;