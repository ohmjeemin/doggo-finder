import { convertTwoDigitDate } from 'utils/dateUtil';
import axios from 'axios';

const BASE_URL =
  'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc';

// url 명령
const OPERS = {
  KIND: 'kind', // 품종 조회
  ABANDONMENT_PUBLIC: 'abandonmentPublic', // 유기 동물 조회
};
// 키
const KEY_ENCODING = process.env.REACT_APP_OPEN_API_KEY;

/** ----------------------------------PARAM DATA------------------------------------ */
// 축종코드
const UPKIND = '417000'; // 개

// 페이지 번호
const PAGE_NO = 1;

// 페이지 당 보여줄 데이터 개수
const NUM_OF_ROWS = '3';

// 유기 날짜 시작일
const BGNDE = '20170101'; // 2017년도부터 고정

// 유기 날짜 종료일
const today = new Date();
const year = today.getFullYear();
const month = convertTwoDigitDate(today.getMonth() + 1);
const date = convertTwoDigitDate(today.getDate());

const ENDDE = `${year}${month}${date}`;

export const getAbandonedDogList = async kindCd => {
  // let url = `${BASE_URL}/${OPERS.ABANDONMENT_PUBLIC}`;
  // let url = `/openapi/service/rest/abandonmentPublicSrvc/${OPERS.ABANDONMENT_PUBLIC}?serviceKey=${KEY_ENCODING}`;

  let payload = {
    bgnde: BGNDE,
    endde: ENDDE,
    upkind: UPKIND,
    pageNo: PAGE_NO,
    numOfRows: NUM_OF_ROWS,
  };
  if (kindCd) {
    payload.kindCd = kindCd;
  }
  /**
   * 기존 개발 proxy 환경에서 배포 시, netlify serverless functin 기능으로 변경
   */
  // return new Promise((resolve, reject) => {
  //   axios
  //     .get(url, {
  //       params,
  //     })
  //     .then(res => {
  //       if (res.data.Error) {
  //         reject(res.data.Error);
  //       }
  //       console.log({ res });
  //       resolve(res.data.response.body.items.item);
  //     })
  //     .catch(error => {
  //       reject(error.message);
  //     });
  // });
  return await axios.post(`/.netlify/functions/abandonedDog`, payload)
};
