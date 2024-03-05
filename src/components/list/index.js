import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({ list, onAddToCart, deleteItemCart, textButton, cartVisible }) {
  return (
    <div className="List">
      {list.map((item) => (
        <div key={item.code} className="List-item">
          <Item className="item" item={item} onAddToCart={onAddToCart} deleteItemCart={deleteItemCart} textButton={textButton} cartVisible={cartVisible} />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onAddToCart: PropTypes.func,
};

List.defaultProps = {
  onAddToCart: () => {
  },
}

export default React.memo(List);
