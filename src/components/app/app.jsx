import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = (props) => {
  const {cards} = props;

  return (
    <Main cards={cards}/>
  );
};

App.propTypes = {
  cards: PropTypes.arrayOf(
      PropTypes.shape({
        isPremium: PropTypes.bool.isRequired,
        image: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        stars: PropTypes.number.isRequired,
        isBookmarked: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
  ).isRequired
};

export default App;
