import React, { useState, cloneElement } from 'react';
import 'scss/spinner.scss';

const Spinner = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="my-spinner-container">
      {isLoading && (
        <div className="my-spinner">
          {' '}
          <div></div>
          <div></div>{' '}
        </div>
      )}
      {/* <div className={isLoading ? 'my-spinner-content' : ''}> */}
      {cloneElement(children, { setIsLoading })}
      {/* </div> */}
    </div>
  );
};

export default Spinner;
