import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SkinProduct.scss';

//캐러셀
function SkinProduct({ name, detail }) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/skin/products/${detail[0].product_id}`);
  };
  return (
    <div className="product" onClick={goToDetail}>
      <img
        className="productImage"
        src="/images/products/product.webp"
        alt={name}
      />
      {/* 추후 product 데이터에 img src 추가되면 그 때 다시 작업해주는 걸로 */}
      <div className="subcatProductsDetailList">
        <div className="productsDetail">
          <p className="productsName">{name}</p>
          <div className="productsDetailDescription">
            <span className="size">{detail[0].size}</span>
            <span> /</span>
            <span className="price">
              <span> ₩ </span>
              {(+detail[0].price).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkinProduct;