import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const CARDS = [
  {
    isPremium: true,
    image: `img/apartment-01.jpg`,
    value: 120,
    stars: 4,
    isBookmarked: false,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  },
  {
    isPremium: false,
    image: `img/room.jpg`,
    value: 80,
    stars: 4,
    isBookmarked: true,
    name: `Wood and stone place`,
    type: `Private room`,
  },
  {
    isPremium: false,
    image: `img/apartment-02.jpg`,
    value: 132,
    stars: 4,
    isBookmarked: false,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
  },
  {
    isPremium: true,
    image: `img/apartment-03.jpg`,
    value: 180,
    stars: 3,
    isBookmarked: false,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
  },
  {
    isPremium: false,
    image: `img/room.jpg`,
    value: 80,
    stars: 4,
    isBookmarked: true,
    name: `Wood and stone place`,
    type: `Private room`,
  },
];

ReactDOM.render(
    <App cards={CARDS} />,
    document.querySelector(`#root`)
);
