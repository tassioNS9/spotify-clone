import React from "react";
import SingleItem from "./SingleItem";
//import { Link } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // console.log(items);

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a to={path} className="item-list__link">
          Mostrar tudo
        </a>
      </div>

      <div className="item-list__container">
        {itemsArray.map((currObj, index) => (
          <SingleItem
            // id={currObj.id}
            // name={currObj.name}
            // image={currObj.image}
            // banner={currObj.banner}
            idPath={idPath}
            {...currObj}
            key={`${title}-${index}`}
          />
        ))}
        {/* {Array(items)
          .fill()
          .map((element, index) => (
            <SingleItem key={`${title}-${index}`} />
          ))} */}
      </div>
    </div>
  );
};

export default ItemList;
