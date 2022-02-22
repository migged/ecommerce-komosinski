import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="container">
        <div className="listTittle">Ultimos lanzamientos</div>
        <div className="list">
          {items.map((items) => {
            return (
              <Item
                key={items.id}
                id={items.id}
                tittle={items.tittle}
                pictureUrl={items.pictureUrl}
                price={items.price}
                stock={items.stock}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ItemList;
