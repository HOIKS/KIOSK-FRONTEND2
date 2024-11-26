import { useEffect, useState } from "react";
import * as p from "../styles/photoStyle";
import { useNavigate } from "react-router-dom";
import axios from 'axios';  // Import axios

function PhotoPrint() {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);
  const [isActive, setIsActive] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false); // 반짝임 상태 추가
  const [photoUrl, setPhotoUrl] = useState(''); // 사진 URL 상태 추가

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount > 0) {
            return prevCount - 1;
          } else {
            clearInterval(timer);
            setIsActive(false);
            setIsBlinking(true); // 카운트가 0이 되면 반짝임 시작
            fetchPhoto(); // Call the API when the countdown reaches zero
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  const fetchPhoto = async () => {
    try {
      const response = await axios.get('http://raymondcty.duckdns.org:6133/shot', {
        responseType: 'blob' // 응답을 Blob으로 설정
      });

      const imageUrl = URL.createObjectURL(response.data); // Blob을 URL로 변환
      setPhotoUrl(imageUrl); // 사진 URL을 상태에 저장
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  };

  const handleRetry = () => {
    setCount(5);
    setIsActive(true);
    setIsBlinking(false); // 반짝임 초기화
    setPhotoUrl(''); // 사진 URL 초기화
  };

  const handlePrint = async () => {
    await fetchPhoto(); // Call the API when the print button is clicked
    navigate('/');
  };

  return (
    <p.PhotoLayout>
      <h1>HOIKS PHOTO</h1>
      <div className={`photo ${isBlinking ? 'blink' : ''}`}>
        {photoUrl ? ( // 사진 URL이 있으면 이미지를 표시
          <img src={photoUrl} alt="Captured" />
        ) : (
          <h3>{count}</h3> // 카운트가 남아있으면 카운트 표시
        )}
      </div>
      <p.ButtonLayout>
        <button className="again" onClick={handleRetry}>재촬영</button>
        <button className="print" onClick={handlePrint}>출력</button>
      </p.ButtonLayout>
    </p.PhotoLayout>
  );
}

export default PhotoPrint;
