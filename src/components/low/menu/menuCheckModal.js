import * as md from "../../../styles/low/modalLowStyle";
import * as m from "../../../styles/low/menuPageLowStyle";
import PaymentSelectModal from "../paymentSelectModal";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { SetPaymentModal, SetTotalMenuModal } from "../../../redux/kioskAction";
import TotalMenuList from "../totalMenuList";
import { useEffect, useState } from "react";
import fifth_step from "../../../assets/audios/7_주문확인.mp3"

function MenuCheckModal() {
  const dispatch = useDispatch();
  let totalMenuCount = useSelector((state) => state.totalMenuCount);
  let TotalPrice = useSelector((state) => state.totalPrice);
  let items = useSelector((state) => state.shoppingBagList);
  const [audio] = useState(new Audio(fifth_step)); // 오디오 객체 생성

  const playAudio = () => {
    audio.play().catch((error) => {
      console.error("오디오 재생 실패:", error);
    });
  };

  const stopAudio = () => {
    audio.pause(); // catch 제거
    audio.currentTime = 0; // 오디오 재생 위치를 처음으로 되돌림
  }
  
  useEffect(()=> {
    playAudio();
  },[]);


  let [orderData, setOrderData] = useState({}); // 장바구니 리스트 가져오기
  
  const formatDateTime = (date) => {
    const date_string = date.toISOString()
    return date_string; // 형식화된 문자열 반환
  };

  const selectHere = () => {
    stopAudio();
    const orderId = uuidv4(); // 주문 ID
    const orderDateTime = formatDateTime(new Date()); // 현재 날짜와 시간을 포맷팅
    const takeOut = false;  // 포장 여부
    const totalPrice = TotalPrice;
    const paymentMethod = "card";    
    const extraPrice = "0";

    // 주문 날짜와 시간을 포함한 객체 생성
    const orderData = {
      items,
      orderId,
      orderDateTime,
      takeOut,
      totalPrice,
      paymentMethod,
      extraPrice
    };
    
    setOrderData(orderData);
    localStorage.setItem(orderId, JSON.stringify(orderData)); // LocalStorage에 저장

    dispatch(SetTotalMenuModal(false));
    dispatch(SetPaymentModal(true));
  }
  const selectToGo = () => {
    stopAudio();
    const orderId = uuidv4(); // 주문 ID
    const orderDateTime = formatDateTime(new Date()); // 현재 날짜와 시간을 포맷팅
    const takeOut = true;  // 포장 여부
    const totalPrice = TotalPrice;
    const paymentMethod = "card";
    const extraPrice = "0";

    // 주문 날짜와 시간을 포함한 객체 생성
    const orderData = {
      items,
      orderId,
      orderDateTime,
      takeOut,
      totalPrice,
      paymentMethod,
      extraPrice
    };
    
    setOrderData(orderData);
    localStorage.setItem(orderId, JSON.stringify(orderData)); // LocalStorage에 저장

    dispatch(SetTotalMenuModal(false));
    dispatch(SetPaymentModal(true));

  }

  const backToMenu = () => {
    stopAudio();
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
            <p>{TotalPrice.toLocaleString('ko-KR')}</p>
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
            onClick={selectHere}
          >
            매장 식사
          </button>
          <button 
            className="togo"
            onClick={selectToGo}
          >
            포장 주문
          </button>
        </div>
      </md.MenuCheckContainer>
    </div>
  )
}
export default MenuCheckModal;