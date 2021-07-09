import React from 'react';

const Item = (props) => {
  return (
    <div className="item">
      <p>
        <strong>{props.titulo}</strong>
        {props.item}
      </p>
    </div>
  );
};

export default Item;
