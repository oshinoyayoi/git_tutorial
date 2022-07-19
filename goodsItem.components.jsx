import "./goodsItem.style.css";
const GoodsItem = ({ goods }) => {
  const { goodsId, goodsName, sellingPrice, goodsCoverImg } = goods;
  return (
    <div key={goodsId} className="goods-list">
      <img alt={goodsName} src={goodsCoverImg} />
      <h2>{goodsName}</h2>
      <h3>{sellingPrice}円</h3>
    </div>
  );
};
export default GoodsItem;
