import * as md from  "../../../styles/low/modalLowStyle"
import One_shot from "../../../assets/imgs/one_shot.png"
import Two_shot from "../../../assets/imgs/two_shot.png"
import Light_drink from "../../../assets/imgs/light_drink.png"
import dark_blank_img from "../../../assets/imgs/dark_gray_bg.jpeg"
import { useState } from "react"

const DetailOptionModal = ({setIsDetailOptionModal}) => {
  const [selectedShot, setSelectedShot] = useState('');
  const [selectedSyrup, setSelectedSyrup] = useState('');


  const addDrinkOption = () => {
    setIsDetailOptionModal(false);
  }

  const handleShotClick = (shot) => {
    setSelectedShot(shot);
    if (selectedShot === shot) {
      setSelectedShot('');
    } else {
      setSelectedShot(shot);
    }
  };

  const handleSyrupClick = (syrup) => {
    setSelectedSyrup(syrup);
    if (selectedSyrup === syrup) {
      setSelectedSyrup('');
    } else {
      setSelectedSyrup(syrup);
    }
  };

  return (
    <md.DetailOptionContainer>
      <h1 className="title">음료 제조 방식을 선택해주세요.</h1>
      <h1>샷 추가</h1>
      <div style={{display:'flex',  justifyContent:'start', alignItems:'center'}}>
        <div 
          className={`shot-option light ${selectedShot === 'light' ? 'active' : ''}`}
          onClick={() => handleShotClick('light')}
        >
          <img src={Light_drink} alt="연하게"/>
          <h1>연하게</h1>
          <h3>+ 0원</h3>
        </div>
        <div 
          className={`shot-option one-shot ${selectedShot === 'one-shot' ? 'active' : ''}`}
          onClick={() => handleShotClick('one-shot')}
        >
          <img src={One_shot} alt="1샷 추가"/>
          <h1>샷 추가</h1>
          <h3>+ 500원</h3>
        </div>
        <div 
          className={`shot-option two-shot ${selectedShot === 'two-shot' ? 'active' : ''}`}
          onClick={() => handleShotClick('two-shot')}
        >
          <img src={Two_shot} alt="2샷 추가"/>
          <h1>2샷 추가</h1>
          <h3>+ 1000원</h3>
        </div>
      </div>
      <h1>시럽 추가</h1>
      <div style={{display:'flex',  justifyContent:'start', alignItems:'center'}}>
        <div 
          className={`syrup-option add-syrup ${selectedSyrup === 'add-syrup' ? 'active' : ''}`}
          onClick={() => handleSyrupClick('add-syrup')}
        >
          <img src={dark_blank_img} alt="2샷 추가"/>
          <h1>시럽 추가</h1>
          <h3>+ 200원</h3>
        </div>
        <div 
          className={`syrup-option light-syrup ${selectedSyrup === 'light-syrup' ? 'active' : ''}`}
          onClick={() => handleSyrupClick('light-syrup')}
        >
          <img src={dark_blank_img} alt="2샷 추가"/>
          <h1>저당 스테비아 추가</h1>
          <h3>+ 600원</h3>
        </div>
      </div>
      <div className="btnBox">
        <button 
          className="cancel"
          onClick={() => {setIsDetailOptionModal(false);}}
        >취소</button>
        <button 
          className="addOption"
          onClick={addDrinkOption}
        >확인</button>
      </div>

    </md.DetailOptionContainer>
  )
}
export default DetailOptionModal;