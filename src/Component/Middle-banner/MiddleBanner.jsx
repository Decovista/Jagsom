import React from 'react';
import resourse from '../../../public/assets/resourse';

function MiddleBanner() {
  return (
    <div className="MiddleBanner h-auto w-full">
      <picture>
        <source
          srcSet={resourse.middleMobileBanner}
          media="(max-width: 768px)"
        />
        <img
          src={resourse.middlebanner}
          alt="promo-banner"
          className="h-auto w-full object-fill"
        />
      </picture>
    </div>
  );
}

export default MiddleBanner;
