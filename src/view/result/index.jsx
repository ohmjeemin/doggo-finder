import React from 'react';
import { useState } from 'react';

import { isNil } from 'utils/commonUtil';
import { RESULT_VIEWTYPE } from 'constant/stringEnum';

import Progressive from 'view/result/Progressive';
import Confirm from 'view/result/Confirm';
import { APP_STATE } from 'constant/stringEnum.js';

import { useMainState } from 'common/customHooks.js';

const Result = ({ history }) => {
  useMainState(APP_STATE.RESULT);

  const [view, setView] = useState(RESULT_VIEWTYPE.PROGRESSIVE_BAR);
  return (
    <>
      <div
        className={`result-container${
          view === RESULT_VIEWTYPE.DESCRIPTION ? ' olive' : ''
        }`}
      >
        {!isNil(view) && view === 0 && <Progressive setView={setView} />}
        {!isNil(view) && view === 1 && <Confirm history={history} />}
      </div>
    </>
  );
};

export default Result;
