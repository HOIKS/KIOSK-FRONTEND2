import { useDispatch } from "react-redux";
import * as md from "../../styles/text/modalTextStyle";
import { SetPayListInfo, SetReceiptModal, SetTotalCount, SetTotalPrice } from "../../redux/kioskAction";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import last_step from "../../assets/audios/10_영수증출력.mp3"


const ReceiptModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(9);

  const [audio] = useState(new Audio(last_step)); // 오디오 객체 생성

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


  const NoReceipt = () => {
    dispatch(SetPayListInfo([]));
    dispatch(SetTotalPrice(0));
    dispatch(SetTotalCount(0));
    dispatch(SetReceiptModal(false));
    stopAudio();
    navigate('/');
  }

  const ReceiptPrint = () => {
    dispatch(SetPayListInfo([]));
    dispatch(SetTotalPrice(0));
    dispatch(SetTotalCount(0));
    dispatch(SetReceiptModal(false));
    stopAudio();
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
