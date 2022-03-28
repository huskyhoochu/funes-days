import React, { useState } from 'react';
import GrapesVideo from '@/assets/grapes.mp4';
import { IntroWrapper } from './styled';
import useIntersect from '@/hooks/useIntersect';
import useTheme from '@/hooks/useTheme';
import { Theme } from '@/styles/theme';

const text = `우리는 한 눈에 탁자 위에 있는 세 개의 컵을 감지하지만, 푸네스는 포도
덩굴에 달린 모든 포도알과 포도줄기, 그리고 덩굴손을 감지할 수 있었다.
그는 1882년 4월 20일 동틀 무렵 남쪽 하늘의 구름 모양을 알고 있었으며,
기억 속의 구름과 딱 한 번 보았을 뿐인 어느 책의 가죽장정줄무늬, 혹은
케브라초 전투 전야의 네그로 강에서 어떤 노가 일으킨 물보라를 비교할 수
있었다... 그는 나에게 이렇게 말했다. "나 혼자 지니고 있는 기억이
이 세상이 생긴 이래 모든 인간이 가졌을지도 모르는 기억보다 더 많을
거예요."  - [기억의 천재 푸네스] 본문 중에서 -`;

const Intro: React.FC = () => {
  const [ThemeClass, screen, theme, ReversedThemeClass] = useTheme();
  const [textState, setTextState] = useState<string>('');
  const [isWrittenComplete, setIsWrittenComplete] = useState<boolean>(false);

  const writeText = () => {
    const timer = (ms: number) => new Promise(res => setTimeout(res, ms));

    const delayAddText = async () => {
      for (let i = 0; i < text.length; i++) {
        setTextState(state => state + text[i]);
        await timer(100);
      }
    };

    delayAddText()
      .then(() => timer(100))
      .then(() => setIsWrittenComplete(true));
  };

  const callIntersect = useIntersect(true, writeText);

  return (
    <IntroWrapper
      themeClass={ThemeClass}
      reversedThemeClass={ReversedThemeClass}
    >
      <div className="intro-text" ref={callIntersect}>
        <p className={`content ${isWrittenComplete ? 'complete' : ''}`}>
          {textState}
        </p>
      </div>
      <div className="intro-img">
        <svg
          id="wave-bottom"
          style={{ transform: 'rotate(180deg)' }}
          viewBox="0 0 1440 130"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={Theme[screen][theme].text}
            d="M0,52L40,62.8C80,74,160,95,240,88.8C320,82,400,48,480,39C560,30,640,48,720,60.7C800,74,880,82,960,78C1040,74,1120,56,1200,52C1280,48,1360,56,1440,65C1520,74,1600,82,1680,75.8C1760,69,1840,48,1920,36.8C2000,26,2080,26,2160,39C2240,52,2320,78,2400,80.2C2480,82,2560,61,2640,56.3C2720,52,2800,65,2880,75.8C2960,87,3040,95,3120,82.3C3200,69,3280,35,3360,36.8C3440,39,3520,78,3600,88.8C3680,100,3760,82,3840,73.7C3920,65,4000,65,4080,69.3C4160,74,4240,82,4320,78C4400,74,4480,56,4560,49.8C4640,43,4720,48,4800,43.3C4880,39,4960,26,5040,36.8C5120,48,5200,82,5280,82.3C5360,82,5440,48,5520,36.8C5600,26,5680,39,5720,45.5L5760,52L5760,130L5720,130C5680,130,5600,130,5520,130C5440,130,5360,130,5280,130C5200,130,5120,130,5040,130C4960,130,4880,130,4800,130C4720,130,4640,130,4560,130C4480,130,4400,130,4320,130C4240,130,4160,130,4080,130C4000,130,3920,130,3840,130C3760,130,3680,130,3600,130C3520,130,3440,130,3360,130C3280,130,3200,130,3120,130C3040,130,2960,130,2880,130C2800,130,2720,130,2640,130C2560,130,2480,130,2400,130C2320,130,2240,130,2160,130C2080,130,2000,130,1920,130C1840,130,1760,130,1680,130C1600,130,1520,130,1440,130C1360,130,1280,130,1200,130C1120,130,1040,130,960,130C880,130,800,130,720,130C640,130,560,130,480,130C400,130,320,130,240,130C160,130,80,130,40,130L0,130Z"
          />
        </svg>
        <video
          src={GrapesVideo}
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
        />
      </div>
    </IntroWrapper>
  );
};

export default Intro;
