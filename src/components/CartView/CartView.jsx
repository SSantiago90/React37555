import React from "react";
import { useContext } from "react";
import { cartCtx } from "../../context/cartContext";
import Button from "../Button/Button";
import "./cartview.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

function CartView() {
  const context = useContext(cartCtx);
  const { cart, clearCart, removeFromCart, getTotalPriceInCart } = context;

  let carritovacio = cart.length === 0;

  if (carritovacio) {
    return <div>Tu carrito está vacio...</div>;
  }

  return (
    <>
      <h1>Tu Carrito</h1>
      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id} className="cartList_row">
                <td>
                  <img height={50} src={item.img} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
                <td>{item.count}</td>
                <td>
                  <Button onClick={item.removeItem}>X</Button>
                </td>
                <th>$ {item.price * item.count}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>El total de tu compra es de $ {getTotalPriceInCart()}</h3>
      <CheckoutForm />
    </>
  );
}

export default CartView;
