import React, { useState } from 'react';
import './order.scss';

const ItemOrder = ({
  orderTitle, orderDescription, linkImg, price,
}) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="item-order">
      <div className="info-order">
        <img src={linkImg} alt="Order" />
        <div className="text">
          <h1>{orderTitle}</h1>
          <p>{orderDescription}</p>
        </div>
      </div>
      <p className="price">
        $
        {price}
      </p>
      <div className="quantity">
        <button type="submit" onClick={() => setQuantity(quantity - 1)}>-</button>
        <p className="">{quantity}</p>
        <button type="submit" onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <p className="total-price">
        $
        {quantity * price}
      </p>
    </div>
  );
};
const Order = () => (
  <div className="order">
    <div className="breadcrumb">
      <p>Orders</p>
      <p>Information Details</p>
      <p>Shiping</p>
      <p>Payment</p>
    </div>

    <div className="table-order">
      <div className="head">
        <h1>Orders</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
      </div>

      <div className="body">
        <ItemOrder
          orderTitle="Roberto graduation Gift"
          orderDescription="Viverra fames massa integer fermentum nisl. Neque morbi cond"
          linkImg="assets/order/order-1.png"
          price="20"
        />
        <ItemOrder
          orderTitle="Roberto graduation Gift"
          orderDescription="Viverra fames massa integer fermentum nisl. Neque morbi cond"
          linkImg="assets/order/order-2.png"
          price="20"
        />
        <ItemOrder
          orderTitle="Roberto graduation Gift"
          orderDescription="Viverra fames massa integer fermentum nisl. Neque morbi cond"
          linkImg="assets/order/order-3.png"
          price="20"
        />
      </div>

      <div className="footer">
        <button type="submit">Checkout</button>
      </div>
    </div>
  </div>
);

export default Order;
