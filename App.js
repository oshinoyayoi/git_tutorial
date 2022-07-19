import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import GoodsItem from "./components/goodsItem.components";

function App() {
  const [rec, setRec] = useState([]);

  //获取所有内容,get
  useEffect(() => {
    axios
      .get("http://localhost:8080/recommendation?configType=4")
      .then((response) => setRec(response.data.data));
  }, []);

  return (
    <div>
      <h1>おすすめ商品</h1>
      <div className="goodsList">
        {rec.map((goods) => {
          return <GoodsItem key={goods.goodsId} goods={goods} />;
        })}
      </div>
    </div>
  );
}

export default App;
