import React from "react";
// import { useCart } from "../context/CartContext";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import styles from "./CheckingoutPage.module.css"
import { useSelector } from "react-redux";


function CheckingoutPage() {
  // const [state, dispatch] = useCart();
  const state = useSelector((store) => store.cart)


  if(!state.itemsCounter) {
    return(
      <div className={styles.container}>
        Empty
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <BasketSidebar state={state} />
      <div className={styles.products} >
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            
          />
        ))}
      </div>
    </div>
  );
}

export default CheckingoutPage;
