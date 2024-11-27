import * as md from "../../styles/text/modalTextStyle"
import KT from "../../assets/imgs/KT.png"
import CJONE from "../../assets/imgs/CJONE.png"
import credit_card from "../../assets/imgs/credit-card.png"
import coupon from "../../assets/imgs/coupon.png"
import quit_btn from "../../assets/imgs/quit_btn.png"
import { useEffect, useState } from "react"
import CardPaymentModal from "./cardPaymentModal"
import { useDispatch, useSelector } from "react-redux"
import { SetCardPayModal, SetPaymentModal } from "../../redux/kioskAction"
import sixth_step from "../../assets/audios/8_결제방식선택.mp3"


const PaymentSelectModal = () => {
  const dispatch = useDispatch();

  let totalMenuCount = useSelector((state) => state.totalMenuCount);
  let totalPrice = useSelector((state) => state.totalPrice);


  const [selectedDiscount, setSelectedDiscount] = useState('');
  const [isCouponUse, setIsCouponUse] = useState('');

  const [audio] = useState(new Audio(sixth_step)); // 오디오 객체 생성

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


  const handleDiscountClick = (discount) => {
    setSelectedDiscount(discount);
    if (selectedDiscount === discount) {
      setSelectedDiscount('');
    } else {
      setSelectedDiscount(discount);
    }
  };
  const handleCouponClick = (coupon) => {
    setIsCouponUse(coupon);
    if (isCouponUse === coupon) {
      setIsCouponUse('');
    } else {
      setIsCouponUse(coupon);
    }
  };
  
  const clickCardPay = () => {
    stopAudio();
    dispatch(SetPaymentModal(false));
    dispatch(SetCardPayModal(true));
  };
  const moveToBack = () => {
    stopAudio();
    dispatch(SetPaymentModal(false));
  };


  return (
    <md.PaymentSelectContainer>
      <img 
        className="close" 
        onClick={moveToBack}
        src={quit_btn} alt="닫기"
      />
      <h1>결제 수단</h1>
      <h1 className="payInfo">1. 제휴 할인 선택</h1>
      <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
        <button 
          className={`discount-option KT ${selectedDiscount === 'KT' ? 'active' : ''}`}
          onClick={() => handleDiscountClick('KT')}
        ><img src={KT} alt="임시"/>KT</button>
        <button 
          className={`discount-option CJONE ${selectedDiscount === 'CJONE' ? 'active' : ''}`}
          onClick={() => handleDiscountClick('CJONE')}
        ><img src={CJONE} alt="임시"/>CJONE</button>
      </div>
      <h1 className="payInfo">2. 결제 수단 선택</h1>
      <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
        <button 
          className="payment-option"
          onClick={clickCardPay}
        ><img src={credit_card} alt="임시"/>카드</button>
        <button 
          className="payment-option"
        ><img src={coupon} alt="임시"/>쿠폰 사용</button>
      </div>
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
    </md.PaymentSelectContainer>
  )
}

export default PaymentSelectModal;