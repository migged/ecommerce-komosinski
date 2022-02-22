import "./ItemDetail.css";

const itemDetail = ({ items }) => {
  return (
    <div className="boxDetail">
      <div className="item">{items.tittle}</div>

      <img src={items.pictureUrl} alt="pic" className="boxImage"></img>
      <div className="grid">
        <div className="center">${items.price}.00</div>
      </div>
      <div className="description center">{items.description}</div>
    </div>
  );
};

export default itemDetail;
