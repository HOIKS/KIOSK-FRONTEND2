import { useNavigate } from "react-router-dom";
import * as m from "../../styles/text/mainPageTextStyle";
import LanguageSelect from "../../components/text/languageSelect";
import axios from "axios";
import ScreenSelect from "../../components/text/screenSelect";
import { useEffect, useState } from "react";
import second_step from "../../assets/audios/2_포장여부선택_강화.mp3"



function TextVersionKioskMain() {
  const navigate = useNavigate();
  const [audio] = useState(new Audio(second_step)); // 오디오 객체 생성

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


  const moveToMenu = () => {
    axios.get('/kiosk/items')
    .then(response => {
      console.log(response.data);

      // response 데이터의 topCategories를 localStorage에 저장
      localStorage.setItem('menuData', JSON.stringify(response.data));
      stopAudio();
      navigate("/text/menu");
    })
    .catch(error => {
      console.error(error);
    });
  };
  
  return (
    <m.KioskMainContainer>
      <m.MenuHeader>
        <ScreenSelect/>
        <LanguageSelect/>
      </m.MenuHeader>
      <m.startBtnContainer>
        <button 
          onClick={moveToMenu}
        >매장 식사</button>
        <button 
          onClick={moveToMenu}
        >포장 주문</button>
      </m.startBtnContainer>
    </m.KioskMainContainer>
  )
}
export default TextVersionKioskMain;  