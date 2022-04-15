import React, { useState, useEffect } from 'react';
import AbandonedDog from './abandonedDog';
import { isNil, isEmpty } from 'utils/commonUtil';

import '../../scss/abandonedDogList.scss';

import { getAbandonedDogList } from 'api/abandonedDog';
import AbandonedDogSkeleton from './abandonedDogSkeleton';

const AbandonedDogList = ({ kindCd, setIsLoading }) => {
  const [dogList, setDogList] = useState([]);

  /**
   * api 를 호출해 dogList 를 세팅한다.
   * @author  uhjee
   */
  useEffect(() => {
    if (!kindCd) return;
    setIsLoading(true); // change spinner flag state
    let _kindCd = kindCd;
    if (kindCd === 'ALL') _kindCd = null;
    const fetchGetAbandonDogList = async () => {
      try {
        const item = await getAbandonedDogList(_kindCd);
        console.log(item);

        if (isNil(item) || isEmpty(item)) setDogList([]);
        const _dogList = item.map(item => ({
          ...item,
          age: item.age.replaceAll(/(\(|\))/g, ''),
          kindCd: item.kindCd.substring(4),
          sexCd: item.sexCd === 'F' ? '여아' : '남아',
        }));
        setDogList(_dogList);
      } catch (error) {
        console.log(error);
        setDogList([]);
      } finally {
        setIsLoading(false); // initailize spinner flag state
      }
    };

    fetchGetAbandonDogList();
    return () => {
      setDogList([]);
    };
  }, [kindCd, setIsLoading]);
  return (
    <>
      <div className="abandoned-list-box">
        {!isEmpty(dogList)
          ? dogList.map(dog => (
              <AbandonedDog
                key={dog.desertionNo}
                kindCd={dog.kindCd}
                careNm={dog.careNm}
                age={dog.age}
                orgNm={dog.orgNm}
                sexCd={dog.sexCd}
                popfile={dog.popfile}
                officetel={dog.officetel}
              />
            ))
          : // SKELETON-UI 적용 - api response가 너무 느림
            new Array(3) // abandonedDogItem 개수 3개 고정
              .fill(1)
              .map((_, i) => <AbandonedDogSkeleton key={i} />)}
      </div>
    </>
  );
};

export default AbandonedDogList;
