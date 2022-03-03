import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./Item.css";

const item = ({ id, tittle, price, pictureUrl, stock }) => {
  return (
    <div className="box">
      <div className="item">{tittle}</div>
      <Link to={`/item/${id}`} className="link">
        <img src={pictureUrl} alt="pic" className="boxImage"></img>
      </Link>
      <div className="grid">
        <div className="center">${price}.00</div>
      </div>

      {/* <ItemCount stock={stock} /> */}

      <div className="description center">
        <Link to={`/item/${id}`}>more info</Link>
      </div>
    </div>
  );
};

export default item;
