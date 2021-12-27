import React from 'react';
import { IntroWrapper } from './styled';
import GrapesVideo from '@/assets/grapes.mp4';

const Intro: React.FC = () => {
  return (
    <IntroWrapper>
      <div className="intro-img">
        <video
          src={GrapesVideo}
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
        />
      </div>
      <div className="intro-text">
        <p className="content">
          우리는 한 눈에 탁자 위에 있는 세 개의 컵을 감지하지만, 푸네스는 포도
          덩굴에 달린 모든 포도알과 포도줄기, 그리고 덩굴손을 감지할 수 있었다.
          그는 1882년 4월 20일 동틀 무렵 남쪽 하늘의 구름 모양을 알고 있었으며,
          기억 속의 구름과 딱 한 번 보았을 뿐인 어느 책의 가죽장정줄무늬, 혹은
          케브라초 전투 전야의 네그로 강에서 어떤 노가 일으킨 물보라를 비교할 수
          있었다... 그는 나에게 이렇게 말했다. &quot;나 혼자 지니고 있는 기억이
          이 세상이 생긴 이래 모든 인간이 가졌을지도 모르는 기억보다 더 많을
          거예요.&quot;
        </p>
        <p className="excerpt">- [기억의 천재 푸네스] 본문 중에서 -</p>
      </div>
    </IntroWrapper>
  );
};

export default Intro;
