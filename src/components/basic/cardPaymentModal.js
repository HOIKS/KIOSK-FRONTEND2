import * as md from "../../styles/modalStyle"
import card_pay from "../../assets/imgs/card_pay.png"
import { useDispatch, useSelector } from "react-redux"
import { SetCardPayModal, SetPaymentModal, SetReceiptModal } from "../../redux/kioskAction";
import axios from "axios";
import seventh_step from "../../assets/audios/9_카드결제.mp3"
import { useEffect, useState } from "react";


const CardPaymentModal = () => {
  const dispatch = useDispatch();
  let totalMenuCount = useSelector((state) => state.totalMenuCount);
  let totalPrice = useSelector((state) => state.totalPrice);
  const shoppingBagList = useSelector((state) => state.shoppingBagList);
  const [audio] = useState(new Audio(seventh_step)); // 오디오 객체 생성

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


  const moveToReceipt = () => {
    axios.post('/kiosk/order', shoppingBagList)
    .then(response => {
      console.log(response.data);
      dispatch(SetCardPayModal(false));
      dispatch(SetReceiptModal(true));
      stopAudio();
    })
    .catch(error => {
      console.error(error);
    });


  }
  const moveToBack = () => {
    dispatch(SetCardPayModal(false));
    dispatch(SetPaymentModal(true));
    stopAudio();
  }


  return (
    <md.CardpayContainer>
      <h1>카드 결제 (간편 결제)</h1>
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
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <button 
          className="cancel"
          onClick={moveToBack}
        >취소</button>
        <button 
          className="pay-approval"
          onClick={moveToReceipt}
        >승인 요청</button>
      </div>
      <div className="imgBox">
        <img src={card_pay}/>
      </div>
    </md.CardpayContainer>
  )
}
export default CardPaymentModal;