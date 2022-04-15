import React from 'react';
import { useClick } from 'common/customHooks';

import '../scss/footer.scss';

const Footer = () => {
  const ohmjeeminEl = useClick(() => {
    window.open('https://github.com/ohmjeemin', '_blank');
  });
  const uhjeeEl = useClick(() => {
    window.open('https://github.com/uhjee', '_blank');
  });

  return (
    <div className="footer">
      <p className="creator text--smaller text--grey">
        Designed by{' '}
        <span className="creator__link" ref={ohmjeeminEl}>
          ohmjeemin
        </span>{' '}
        and{' '}
        <span className="creator__link" ref={uhjeeEl}>
          uhjee
        </span>
      </p>
      <p className="text--smaller text--grey">
        ⓒ 2022 OHMJEEMIN, UHJEE . All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
