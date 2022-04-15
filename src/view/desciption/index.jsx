import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../../scss/description.scss';

import { RESULT_DESC_INFO } from 'constant/description';
import { APP_STATE } from 'constant/stringEnum.js';
import Button from 'components/Button';
import Spinner from 'components/Spinner';
import AbandonedDogList from './abandonedDogList';

import { isNil } from 'utils/commonUtil';
import { useMainState } from 'common/customHooks.js';

const Description = ({ history }) => {
  useMainState(APP_STATE.DESC);

  const { dogType } = useParams();
  const [descInfo, setDescInfo] = useState({});

  /**
   * match.params 의 dogType이 변경되면, descInfo를 세팅한다.
   * @author uhjee
   */
  useEffect(() => {
    if (!isNil(dogType)) {
      const upperDogType = dogType.toUpperCase();
      setDescInfo({ ...RESULT_DESC_INFO[upperDogType] });
    }
    return () => setDescInfo({});
  }, [dogType]);

  /**
   * Home 화면으로 라우팅한다.
   * @author  uhjee
   */
  const goHome = () => history.push('/');

  return (
    <div className="desc-container">
      <h1 className="desc-title text--white">{descInfo.title}</h1>
      <div className="desc-box">
        <img
          className="desc-box__img"
          src={descInfo.imagePath}
          alt={descInfo.title}
        />
        <div className="desc-box__text">
          <h3
            className="desc-box_subtitle"
            // ! dangerouslySetInnerHTML :: react 내에서 innerHTML 사용하는 방법(XSS 방지 목적)
            dangerouslySetInnerHTML={{ __html: descInfo.subTitle }}
          ></h3>
          <p dangerouslySetInnerHTML={{ __html: descInfo.descText }}></p>
        </div>
      </div>
      <Spinner>
        <AbandonedDogList kindCd={descInfo.kindCd} />
      </Spinner>
      <Button text="테스트 다시 하기" handler={goHome} />
    </div>
  );
};

export default Description;
