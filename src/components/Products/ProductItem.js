import React from 'react';
import Card from '../UI/Card';
import { useStore } from '../../hooksStore/store';
import './ProoductItem.css';

const ProductItem = props => {
/*false parameterfor useStore it is for should listen so this component will not sett up 
a listener in my global listener array because this item changes here i can reach it anyway
because it is something that i lisen to it in product.js
*/
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    dispatch("TOGGLE_FAV", props.id);
  };
  
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};
export default ProductItem;