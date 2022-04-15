/**
 * netlify serverless function - nodeJS 기반
 */
const axios = require('axios');

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

// netlify serverless 함수
const handler = async function (event, context) {
  const payload = JSON.parse(event.body);

  try {
    // let url = `${BASE_URL}/${OPERS.ABANDONMENT_PUBLIC}`;
    let url = `${BASE_URL}/${OPERS.ABANDONMENT_PUBLIC}?serviceKey=${KEY_ENCODING}`;

    const { data } = await axios.get(url, {
      params: {
        ...payload,
      },
    });
    if (data.Error) {
      return {
        statusCode: 400,
        body: data.Error,
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data.response.body.items.item),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.message.toString(),
    };
  }
};

module.exports = { handler };
