"use client";
import { useActionState } from "react";
import { submitProduct } from "./action/action.js";
const addProduct = () => {
  const [state, postProduct] = useActionState(submitProduct, { error: {} });
  console.log(state);
  return (
    <form action={postProduct}>
      {state.error.productName && (
        <p className="text-red-500">{state.error.productName}</p>
      )}
      <input type="text" name="productname" placeholder="Product Name" />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default addProduct;
