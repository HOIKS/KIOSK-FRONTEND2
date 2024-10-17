import { useSelector, useDispatch } from "react-redux";
import * as m from "../../styles/text/menuPageTextStyle";
import { SetPayListInfo, SetTotalCount, SetTotalPrice } from "../../redux/kioskAction";
import { useEffect, useState } from "react";

function TotalMenuList() {
  const dispatch = useDispatch();
  const shoppingBagList = useSelector((state) => state.shoppingBagList);

  const handleQuantityDecrement = (index) => {
    const updatedList = [...shoppingBagList];
    if (updatedList[index].quantity > 1) {
      updatedList[index].quantity--;
      updatedList[index].totalPrice = updatedList[index].perPrice * updatedList[index].quantity;

      const totalQuantity = shoppingBagList.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = shoppingBagList.reduce((acc, item) => acc + item.totalPrice, 0);
      dispatch(SetTotalPrice(totalPrice));
      dispatch(SetTotalCount(totalQuantity));
      dispatch(SetPayListInfo(updatedList));
    }
  };

  const handleQuantityIncrement = (index) => {
    const updatedList = [...shoppingBagList];
    if (updatedList[index].quantity >= 1) {
      updatedList[index].quantity++;
      updatedList[index].totalPrice = updatedList[index].perPrice * updatedList[index].quantity;

      const totalQuantity = shoppingBagList.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = shoppingBagList.reduce((acc, item) => acc + item.totalPrice, 0);
      dispatch(SetTotalPrice(totalPrice));
      dispatch(SetTotalCount(totalQuantity));
      dispatch(SetPayListInfo(updatedList));
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...shoppingBagList];
    updatedList.splice(index, 1);
    dispatch(SetPayListInfo(updatedList));
  };
  useEffect(()=> {

  }, [])

  return (
    <m.BigShoppingBag>
      {shoppingBagList.map((item, index) => (
        <m.BigShoppingItem key={index}>
          <div className="menu-info">
            <span className="menu-name">{item.menuName}</span>
            <span className="quantity">{item.quantity}</span>
          </div>
          <span>{item.totalPrice.toLocaleString('ko-KR')} 원</span>
        </m.BigShoppingItem>
      ))}
    </m.BigShoppingBag>
  );
}

export default TotalMenuList;
