import { useDispatch } from "react-redux";
import * as md from "../../styles/text/modalTextStyle";
import { SetPayListInfo, SetReceiptModal, SetTotalCount, SetTotalPrice } from "../../redux/kioskAction";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ReceiptModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(9);

  const NoReceipt = () => {
    dispatch(SetPayListInfo([]));
    dispatch(SetTotalPrice(0));
    dispatch(SetTotalCount(0));
    dispatch(SetReceiptModal(false));
    navigate('/');
  }

  const ReceiptPrint = () => {
    dispatch(SetPayListInfo([]));
    dispatch(SetTotalPrice(0));
    dispatch(SetTotalCount(0));
    dispatch(SetReceiptModal(false));
    navigate('/');
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    if (countdown === 0) {
      NoReceipt();
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [countdown, NoReceipt]);

  return (
    <md.ReceiptModalContainer>
      <h1>[정상 승인]</h1>
      <h1>영수증을 출력하시겠습니까?</h1>
      <h1>{countdown} 초 후 자동 미출력</h1>
      <div className="btnBox">
        <button 
          onClick={ReceiptPrint}
          className="print"
        >출력</button>
        <button 
          onClick={NoReceipt}
          className="no-print"
        >미출력</button>
      </div>
    </md.ReceiptModalContainer>
  )
}
export default ReceiptModal;
