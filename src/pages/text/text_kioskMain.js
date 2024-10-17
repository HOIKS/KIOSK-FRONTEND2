import { useNavigate } from "react-router-dom";
import * as m from "../../styles/text/mainPageTextStyle";
import LanguageSelect from "../../components/text/languageSelect";
import axios from "axios";
import ScreenSelect from "../../components/text/screenSelect";


function TextVersionKioskMain() {
  const navigate = useNavigate();
  const moveToMenu = () => {
    axios.get('/kiosk/items')
    .then(response => {
      console.log(response.data);

      // response 데이터의 topCategories를 localStorage에 저장
      localStorage.setItem('menuData', JSON.stringify(response.data));
      
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