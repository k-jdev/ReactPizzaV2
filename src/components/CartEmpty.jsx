import React from "react";
import cartEmptyImg from "../assets/img/empty-cart.png";
import { Link } from "react-router-dom";
function CartEmpty() {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          Кошик пустий <icon>😕</icon>
        </h2>
        <p>
          Вірогоідніше за все, ви не замовляли піцу.
          <br />
          Для того, щоб замовити піццу, перейдіть на головну сторінку.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>Повернутись назад</span>
        </Link>
      </div>
    </>
  );
}

export default CartEmpty;
