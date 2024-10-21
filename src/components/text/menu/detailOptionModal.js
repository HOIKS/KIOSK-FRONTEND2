import * as md from  "../../../styles/text/modalTextStyle"
import One_shot from "../../../assets/imgs/one_shot.png"
import Two_shot from "../../../assets/imgs/two_shot.png"
import Light_drink from "../../../assets/imgs/light_drink.png"
import dark_blank_img from "../../../assets/imgs/dark_gray_bg.jpeg"
import { useState } from "react"

const DetailOptionModal = ({setIsDetailOptionModal, setSelectedOptions}) => {
  const [selectedShot, setSelectedShot] = useState('');
  const [selectedSyrup, setSelectedSyrup] = useState('');


  const addDrinkOption = () => {
    const options = [];   //기존 배열
    let optionTotalPrice = 0; // 옵션 가격을 합산할 변수


    // 샷 옵션 추가
    if (selectedShot) {
      const shotPrice = selectedShot === 'one-shot' ? 500 : selectedShot === 'two-shot' ? 1000 : 0;
      optionTotalPrice += shotPrice; // 샷 가격 추가
      options.push({
        id: 3, // 예시 ID
        name: "샷",
        optionInfo: [
          {
            id: selectedShot === 'light' ? 1 : selectedShot === 'one-shot' ? 2 : 3,
            name: selectedShot === 'light' ? '연하게' : selectedShot === 'one-shot' ? '샷 추가' : '2샷 추가',
            price: shotPrice
          },
        ],
      });
    }

    // 시럽 옵션 추가
    if (selectedSyrup) {
      const syrupPrice = selectedSyrup === 'add-syrup' ? 200 : 600;
      optionTotalPrice += syrupPrice; // 시럽 가격 추가
      options.push({
        id: 4, // 예시 ID
        name: "시럽",
        optionInfo: [
          {
            id: selectedSyrup === 'add-syrup' ? 1 : 2,
            name: selectedSyrup === 'add-syrup' ? '시럽 추가' : '저당 스테비아 추가',
            price: syrupPrice,
          },
        ],
      });
    }

    // 선택된 옵션과 총 가격을 부모 컴포넌트로 전달
    console.log(optionTotalPrice);
    setSelectedOptions(options, optionTotalPrice);
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
          <h1>연하게</h1>
          <h3>+ 0원</h3>
        </div>
        <div 
          className={`shot-option one-shot ${selectedShot === 'one-shot' ? 'active' : ''}`}
          onClick={() => handleShotClick('one-shot')}
        >
          <h1>샷 추가</h1>
          <h3>+ 500원</h3>
        </div>
        <div 
          className={`shot-option two-shot ${selectedShot === 'two-shot' ? 'active' : ''}`}
          onClick={() => handleShotClick('two-shot')}
        >
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
          <h1>시럽 추가</h1>
          <h3>+ 200원</h3>
        </div>
        <div 
          className={`syrup-option light-syrup ${selectedSyrup === 'light-syrup' ? 'active' : ''}`}
          onClick={() => handleSyrupClick('light-syrup')}
        >
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