import ItemCount from "../ItemCount/ItemCount";
import "./ItemBox.css";

const itemBox = () => {
  return (
    <div className="box">
      <div className="item">Nike X Off-White</div>
      <div className="description">Air Jordan 4 off-white sail sneakers</div>
      <ItemCount stock="8" />
    </div>
  );
};

export default itemBox;
