import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../config';
import { useParams } from 'react-router-dom';
import ProductsHeader from './ProductsHeader/ProductsHeader';
import ProductsSlider from './ProductsSlider/ProductsSlider';
import ProductsMain from './ProductsMain/ProductsMain';
import './ProductsDetail.scss';
import '../../styles/reset.scss';
import '../../styles/variables.scss';

function ProductsDetail() {
  const [product, setProduct] = useState([]);
  const [productSlider, setProductSlider] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/skin/products/${params.productId}`)
      .then(res => res.json())
      .then(result => {
        setProduct(result.message);
        console.log(result.message);
      });
  }, [params.productsId]);

  useEffect(() => {
    fetch(`${BASE_URL}/skin/products`)
      .then(res => res.json())
      .then(result => setProductSlider(result.message));
  }, []);

  return (
    <div className="ProductsDetail">
      <title>Products Detail</title>
      <ProductsHeader product={product} />
      <aside className="message">
        <div className="leftMsg">
          <p>무료 선물 포장 서비스</p>
          <p>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다.</p>
        </div>
        <div className="rightMsg">
          <p>샘플 & 코튼 백 증정</p>
          <p>
            모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다. (샘플 종류는
            임의 지정이 불가합니다.)
          </p>
        </div>
      </aside>
      <ProductsMain product={product} />
      <ProductsSlider productSlider={productSlider} />
    </div>
  );
}

export default ProductsDetail;
