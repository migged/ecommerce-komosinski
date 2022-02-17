import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const item = ({ id, tittle, price, pictureUrl, stock }) => {
  return (
    <div className="box">
      <div className="item">{tittle}</div>
      <img src={pictureUrl} alt="pic" className="boxImage"></img>
      <div className="grid">
        <div className="center">${price}.00</div>
      </div>

      <ItemCount stock={stock} />

      <div className="description center">more info</div>
    </div>
  );
};

export default item;
