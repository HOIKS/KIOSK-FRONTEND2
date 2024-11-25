import { useEffect, useState } from "react";
import * as p from "../styles/photoStyle";
import { useNavigate } from "react-router-dom";

function PhotoPrint() {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);
  const [isActive, setIsActive] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false); // 반짝임 상태 추가

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
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  const handleRetry = () => {
    setCount(10);
    setIsActive(true);
    setIsBlinking(false); // 반짝임 초기화
  };

  const handlePrint = () => {
    navigate('/');
  };

  return (
    <p.PhotoLayout>
      <h1>HOIKS PHOTO</h1>
      <div className={`photo ${isBlinking ? 'blink' : ''}`}>
        <h3>{count}</h3>
      </div>
      <p.ButtonLayout>
        <button className="again" onClick={handleRetry}>재촬영</button>
        <button className="print" onClick={handlePrint}>출력</button>
      </p.ButtonLayout>
    </p.PhotoLayout>
  );
}

export default PhotoPrint;
