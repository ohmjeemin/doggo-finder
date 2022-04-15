import React, { useEffect } from 'react';

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  }, []);
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Link.createDefaultButton({
        // 해당 위치에 카카오링크 공유하기 버튼을 추가하고, 해당 버튼을 클릭했을 때 메세지 보내기를 요청
        container: '#kakao-share-btn',
        objectType: 'feed',
        content: {
          title: '도고 파인더',
          description:
            '내 성격과 가장 잘 맞는 강아지 종류는 뭘까? 나와 딱 맞는 강아지 찾기 테스트',
          imageUrl: 'https://cranky-mclean-5611df.netlify.app/logo528.png',
          // imageUrl: 'https://cdn.pixabay.com/photo/2020/04/01/01/02/science-4989678_960_720.png',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '테스트하러 gogo 🐶🚗',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
  return (
    <>
      <div
        id="kakao-share-btn"
        style={{
          width: '20rem',
          marginTop: '5px',
          display: 'flex',
          justifyContent: 'center',
          boxSizing: 'border-box',
          border: '1px solid #eaeaea',
          padding: '5px 8px',
          borderRadius: '10px',
          color: '#7b6f66',
          background: '#ffffff',
        }}
      >
        <div
          style={{
            fontSize: '12px',
            marginRight: '10px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Share with your friends
        </div>
        <div id="kakao-link-btn">
          <img
            src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
            alt="kakao-share-icon"
            style={{ width: '30px', height: '30px', display: 'flex' }}
          />
        </div>
      </div>
    </>
  );
};
export default KakaoShareButton;
