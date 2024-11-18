import ShoppingBag from "../../components/text/shoppingBag";
import MenuCategory from "../../components/text/menu/menuCategory";
import LanguageSelect from "../../components/text/languageSelect";
import * as main from "../../styles/text/mainPageTextStyle";
import * as m from "../../styles/text/menuPageTextStyle";
import * as md from "../../styles/modalStyle";
import DetailMenuModal from "../../components/text/menu/detailMenuModal";
import MenuCheckModal from "../../components/text/menu/menuCheckModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentSelectModal from "../../components/text/paymentSelectModal";
import CardPaymentModal from "../../components/text/cardPaymentModal";
import { useDispatch, useSelector } from "react-redux";
import { SetPayListInfo, SetTotalCount, SetTotalMenuModal, SetTotalPrice } from "../../redux/kioskAction";
import ReceiptModal from "../../components/text/receiptModal";
import ScreenSelect from "../../components/text/screenSelect";
import third_step from "../../assets/audios/3_메뉴선택.mp3"



function TextVersionMenuSelect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let menuDetailModalState = useSelector( (state)=>{ return state.menuDetailModalState } );
  let checkMenuModalState = useSelector( (state)=>{ return state.checkMenuModalState } );
  let paymentSelectModalState = useSelector( (state)=>{ return state.paymentSelectModalState } );
  let cardPayModalState = useSelector( (state)=>{ return state.cardPayModalState } );
  let receiptModalState = useSelector( (state)=>{ return state.receiptModalState } );
  let totalMenuCount = useSelector((state) => state.totalMenuCount);
  let totalPrice = useSelector((state) => state.totalPrice);
  const shoppingBagList = useSelector((state) => state.shoppingBagList);

  const [audio] = useState(new Audio(third_step)); // 오디오 객체 생성

  const playAudio = () => {
    audio.play().catch((error) => {
      console.error("오디오 재생 실패:", error);
    });
  };

  const stopAudio = () => {
    audio.pause(); // catch 제거
    audio.currentTime = 0; // 오디오 재생 위치를 처음으로 되돌림
  }


  useEffect(() => {
    // stopAudio();
    // playAudio(); // 버튼 클릭 시 오디오 재생
    const updateTotalInfo = () => {
      const totalQuantity = shoppingBagList.reduce((acc, item) => acc + item.quantity, 0);
      const totalPriceValue = shoppingBagList.reduce((acc, item) => acc + item.totalPrice, 0);
      dispatch(SetTotalCount(totalQuantity));
      dispatch(SetTotalPrice(totalPriceValue));
    };
    updateTotalInfo();
  }, [shoppingBagList, dispatch]);

  

  const moveToCheckMenu = () => {
    stopAudio();
    dispatch(SetTotalMenuModal(true));
  }

  const moveToMain = () => {
    stopAudio();
    dispatch(SetPayListInfo([]));
    dispatch(SetTotalPrice(0));
    dispatch(SetTotalCount(0));
    navigate('/text');

  }
  

  return (
      <div>
        {
          menuDetailModalState &&
          <md.ModalBackgroundContainer>
            <DetailMenuModal/>
          </md.ModalBackgroundContainer>
        }
        {
          checkMenuModalState &&
          <md.ModalBackgroundContainer>
            <MenuCheckModal/>
          </md.ModalBackgroundContainer>
        }
        {
          paymentSelectModalState && 
            <md.ModalBackgroundContainer>
              <PaymentSelectModal/>
            </md.ModalBackgroundContainer>
        }
        {
          cardPayModalState && 
          <md.ModalTopBackgroundContainer>
            <CardPaymentModal />
          </md.ModalTopBackgroundContainer>
        }
        {
          receiptModalState && 
          <md.ModalTopBackgroundContainer>
            <ReceiptModal />
          </md.ModalTopBackgroundContainer>
        }
        <m.MenuSelectContainer>
          <main.MenuHeader>
            <ScreenSelect/>
            <LanguageSelect/>
          </main.MenuHeader>
          <MenuCategory/>
          <div className="go_to_credit">
              <ShoppingBag/>
              <m.CurrentBagContainer>
              <h3 >선택 메뉴<p className="selected-menu">{totalMenuCount}</p>개</h3>
                <h3 >총 주문 금액 <p>{totalPrice.toLocaleString('ko-KR')}</p>원</h3>
                <button 
                  className="payBtn"
                  onClick={moveToCheckMenu}
                >
                  결제하기
                </button>
                <button 
                  className="backBtn"
                  onClick={moveToMain}
                >
                  처음부터 다시하기
                </button>
              </m.CurrentBagContainer>
          </div>
        </m.MenuSelectContainer>
      </div>
  )
}

export default TextVersionMenuSelect;