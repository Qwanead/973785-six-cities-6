import React from 'react';
import PropTypes from 'prop-types';

const PremiumMark = ({isPremium}) => {
  if (isPremium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }

  return null;
};

PremiumMark.propTypes = {
  isPremium: PropTypes.bool.isRequired
};

export default PremiumMark;
