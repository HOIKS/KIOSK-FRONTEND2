import { useSelector, useDispatch } from "react-redux";
import * as m from "../../styles/low/menuPageLowStyle";
import { SetPayListInfo, SetTotalCount, SetTotalPrice } from "../../redux/kioskAction";
import { useEffect, useState } from "react";

function TotalMenuList() {
  const dispatch = useDispatch();
  const shoppingBagList = useSelector((state) => state.shoppingBagList);

  return (
    <m.BigShoppingBag>
      {shoppingBagList.map((item, index) => (
        <m.BigShoppingItem key={index}>
          <div className="menu-info">
            <span className="menu-name">{item.name}</span>
            <span className="quantity">{item.quantity}</span>
          </div>
          <span>{item.totalPrice.toLocaleString('ko-KR')} 원</span>
        </m.BigShoppingItem>
      ))}
    </m.BigShoppingBag>
  );
}

export default TotalMenuList;
