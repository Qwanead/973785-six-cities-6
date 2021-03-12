import React from 'react';
import PropTypes from 'prop-types';

const PremiumMark = (props) => {
  if (props.isPremium) {
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

const PlaceCard = (props) => {
  const {isPremium, image, value, stars, isBookmarked, name, type} = props.card;

  return (
    <article key="card1" className="cities__place-card place-card">
      <PremiumMark isPremium={isPremium}/>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} alt="Place image" width={260} height={200} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{value} </b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isBookmarked ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${stars * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  card: PropTypes.shape({
    isPremium: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })
  .isRequired
};

export default PlaceCard;
