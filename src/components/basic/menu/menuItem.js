import { useDispatch } from 'react-redux';
import gray_color_bg from '../../../assets/imgs/gray_color_bg.png'
import * as m from "../../../styles/basic/menuPageBasicStyle"
import { SetMenuDetailModal, SetMenuInfo } from '../../../redux/kioskAction';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MenuItem({ name, price, explain, photoUrl, options }) {
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState(gray_color_bg); // 기본 이미지로 초기화

  const formattedPrice = price.toLocaleString('ko-KR');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`/file/static/${photoUrl}`, {
          responseType: 'blob' // 이미지 파일로 응답을 받기 위해 responseType 설정
        });

        const imageUrl = URL.createObjectURL(response.data); // Blob URL 생성
        setImageSrc(imageUrl); // Blob URL로 이미지 소스 설정
      } catch (error) {
        console.error("이미지 로드 실패:", error);
      }
    };

    if (photoUrl) {
      fetchImage();
    }
  }, [photoUrl]);

  const openDetailModal = () => {
    const menuInfo = {
      menuName : name,
      menuPrice : price,
      menuExplain : explain,
      menuPhotoUrl : imageSrc,
      menuOption : options
    }
    dispatch(SetMenuInfo(menuInfo));
    dispatch(SetMenuDetailModal(true));
  }
  
  return (
    <m.MenuItemBox 
      onClick={openDetailModal}
    >
      <img 
        src={imageSrc} 
        alt="음료 사진"
      />
      <h1 >{name}</h1>
      <p>{formattedPrice} 원</p>
    </m.MenuItemBox>
  )
}
export default MenuItem;  