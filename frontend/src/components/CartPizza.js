import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem1, removeItem1, reducePrice } from "../Stores/CartSlice";

const CartPizza = (props) => {
  let [noOfPizzas, setNoOfPizzas] = useState(1);
  const quantity = useSelector((store) => store.cart.quantity);
  const dispatch = useDispatch();
  const handleAdd = () => {
    setNoOfPizzas(noOfPizzas + 1);
    dispatch(addItem1(props.pizza));
  };
  const handleRemove = () => {
    if (quantity.get(props.pizza.id) == 1) {
      dispatch(removeItem1(props.pizza));
      //   setNoOfPizzas(0);
    } else {
      dispatch(reducePrice(props.pizza));
      setNoOfPizzas(noOfPizzas - 1);
    }
  };
  return (
    <div
      className=""
      style={{ margin: "auto", padding: "0px", border: "1px solid" }}
    >
      {/* <table
          className=""
          style={{
            marginTop: "50px",
            display: "inline-block",
            // marginBottom: "20px",
            verticalAlign: "middle",
            border: "1px solid",
            // borderStyle: "outset",
            height: "150px",

            //   padding: "0px",
          }}
        > */}
      {/* <tr>
            <th>Pizza</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr> */}

      <td
        style={{
          textAlign: "center",
          padding: "5px",
          width: "150px",
          //   border: "1px solid",
        }}
      >
        <p className="h4">{props.pizza.name}</p>
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: props.pizza.type === "veg" ? "green" : "red",
            margin: "auto",
            marginBottom: "20px",
          }}
        ></div>
      </td>
      <td style={{ textAlign: "center", padding: "5px", width: "150px" }}>
        <img
          src={props.pizza.image}
          style={{ width: "100px", height: "100px", borderRadius: "100%" }}
        />
        {/* <button
            onClick={() => handleClick(props.pizza)}
            className="btn btn-warning"
          >
            Add to Cart
          </button> */}
      </td>
      <td style={{ padding: "5px", width: "150px" }}>
        <button className="btn btn-warning" onClick={() => handleRemove()}>
          -
        </button>
        <p
          style={{
            display: "inline-block",
            padding: "20px",
          }}
          className="h2"
        >
          {quantity.get(props.pizza.id) > 0
            ? quantity.get(props.pizza.id)
            : noOfPizzas}
        </p>
        <button className="btn btn-warning" onClick={() => handleAdd()}>
          +
        </button>
      </td>
      <td style={{ padding: "5px", width: "150px" }}>
        {/* <p>{props.pizza.description}</p>
          <p>
            <strong>Ingredients : </strong>
            {props.pizza.ingredients.join(",")}
          </p>
          <p>
            <strong>Toppings : </strong>
            {props.pizza.topping.join(",")}
          </p> */}
        <p className="h5">
          ₹{props.pizza.price.toFixed(2) * quantity.get(props.pizza.id)}
        </p>
      </td>
      {/* </table> */}
    </div>
  );
};

export default CartPizza;
