import * as md from "../../styles/low/modalLowStyle"
import KT from "../../assets/imgs/KT.png"
import CJONE from "../../assets/imgs/CJONE.png"
import credit_card from "../../assets/imgs/credit-card.png"
import coupon from "../../assets/imgs/coupon.png"
import quit_btn from "../../assets/imgs/quit_btn.png"
import { useState } from "react"
import CardPaymentModal from "./cardPaymentModal"
import { useDispatch, useSelector } from "react-redux"
import { SetCardPayModal, SetPaymentModal } from "../../redux/kioskAction"

const PaymentSelectModal = () => {
  const dispatch = useDispatch();

  let totalMenuCount = useSelector((state) => state.totalMenuCount);
  let totalPrice = useSelector((state) => state.totalPrice);


  const [selectedDiscount, setSelectedDiscount] = useState('');
  const [isCouponUse, setIsCouponUse] = useState('');

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
    dispatch(SetPaymentModal(false));
    dispatch(SetCardPayModal(true));
  };
  const moveToBack = () => {
    dispatch(SetPaymentModal(false));
  };


  return (
    <md.PaymentSelectContainer>
      <img 
        className="close" 
        onClick={moveToBack}
        src={quit_btn} alt="닫기"
      />
      <h1>결제 수단을 선택해주세요.</h1>
      <h1 className="payInfo">1. 제휴 할인 선택</h1>
      <div style={{display:'flex', alignItems:'center', justifyContent:'start', marginTop:'3rem'}}>
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
      <div style={{display:'flex', alignItems:'center', justifyContent:'start', marginTop:'3rem'}}>
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