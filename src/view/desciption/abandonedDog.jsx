import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { isNil } from 'utils/commonUtil';

const AbandonedDog = ({
  kindCd, // 견종
  age,    // 생년
  sexCd,  // 성별
  orgNm,  // 보관 지역명
  careNm, // 보관 기관명
  popfile, // 이미지
  officetel,  // 보관 기관 번호
}) => {
  return (
    <div className="abandoned-item-box">
      {!isNil(popfile) ? (
        <img
          className="abandoned-item__img"
          src={popfile}
          alt={kindCd + orgNm}
        />
      ) : (
        <div className="abandoned-item__empty-img" />
      )}
      <div className="abandoned-item__desc">
        <div className="row">
          <span>{kindCd}</span>
          <span>{age}</span>
          <span>{sexCd}</span>
        </div>
        <div className="row care-info">
          <span>{orgNm}</span>
          <span>{careNm}</span>
        </div>
        <div className="row care-info">
          <FontAwesomeIcon icon={faPhone} className="mr-4" />
          {officetel}
        </div>
      </div>
    </div>
  );
};

export default AbandonedDog;
