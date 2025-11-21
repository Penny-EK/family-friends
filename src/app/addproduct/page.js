"use client";
import { useActionState } from "react";
import { submitProduct } from "./action/action.js";
const addProduct = () => {
  const [state, postProduct] = useActionState(submitProduct, {
    success: false,
    error: {},
  });
  console.log(state);
  return (
    <div>
      {state.success && <p className="text-green-500">Produkt tilføjet!</p>}
      <form action={postProduct}>
        {state.error?.productName && (
          <p className="text-red-500">{state.error.productName}</p>
        )}
        <input
          type="text"
          name="productname"
          placeholder="Product Name"
          className="border"
          defaultValue={state.productName}
        />

        {state.error?.productPrice && (
          <p className="text-red-500">{state.error.productPrice}</p>
        )}
        <input
          type="number"
          name="productprice"
          placeholder="Product price"
          className="border"
          defaultValue={state.productPrice}
        />
        <button type="submit" className="border">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default addProduct;
