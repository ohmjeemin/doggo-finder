import React from 'react';
import '../../scss/abandonedDogSkeleton.scss';

const AbandonedDogSkeleton = () => {
  return (
    <div className="skeleton-item-box">
      <div className="skeleton-item__img" />
      <div className="skeleton-item__desc">
        <div className="row skeleton-title" />
        <div className="row skeleton-info" />
        <div className="row skeleton-call" />
      </div>
    </div>
  );
};

export default AbandonedDogSkeleton;
