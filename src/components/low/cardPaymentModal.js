import * as md from "../../styles/low/modalLowStyle"
import card_pay from "../../assets/imgs/card_pay.png"
import { useDispatch, useSelector } from "react-redux"
import { SetCardPayModal, SetPaymentModal, SetReceiptModal } from "../../redux/kioskAction";
import axios from "axios";

const CardPaymentModal = () => {
  const dispatch = useDispatch();
  let totalMenuCount = useSelector((state) => state.totalMenuCount);
  let totalPrice = useSelector((state) => state.totalPrice);
  const shoppingBagList = useSelector((state) => state.shoppingBagList);

  const moveToReceipt = () => {
    axios.post('/kiosk/order', shoppingBagList)
    .then(response => {
      console.log(response.data);
      dispatch(SetCardPayModal(false));
      dispatch(SetReceiptModal(true));
    })
    .catch(error => {
      console.error(error);
    });


  }
  const moveToBack = () => {
    dispatch(SetCardPayModal(false));
    dispatch(SetPaymentModal(true));
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