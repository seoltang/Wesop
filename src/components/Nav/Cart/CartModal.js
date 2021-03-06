import React, { useState, useEffect } from 'react';
import './CartModal.scss';
import CartProduct from './CartProduct';
import { LOGIN_URL } from '../../../config';

function CartModal({ cartModal }) {
  const [cartData, setCartData] = useState([]);
  const getCartList = () => {
    // eslint-disable-next-line no-template-curly-in-string
    fetch(`${LOGIN_URL}/carts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('ACCESS_TOKEN'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartData(data.products);
      });
  };

  return (
    <div className={cartModal}>
      <div className="cartProducts">
        <div className="cartProductsHeader">
          <div>
            <button onClick={getCartList}>카트</button>
          </div>
          <div>사이즈</div>
          <div>수량</div>
          <button className="closeModalBtn">X</button>
        </div>
        <ul>
          {cartData.map(product => {
            function onDelete() {
              setCartData(
                cartData.filter(it => it.option_id !== product.option_id)
              );
            }
            return (
              <CartProduct
                key={product.option_id}
                productName={product.name}
                size={product.size}
                onClick={onDelete}
                option={product.option}
                price={product.price}
              />
            );
          })}
        </ul>
      </div>
      <div className="cartSummary">
        <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
        <div className="cartSummaryMoney">
          <h5> 소계 (세금 포함)</h5>
          <span> ₩ 0원</span>
        </div>
        <button className="payBtn">결제하기</button>
      </div>
    </div>
  );
}

export default CartModal;
