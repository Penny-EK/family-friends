"use server";
export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");
  if (!productName) {
    error.productName = "product name is required";
  }
  //   if else (productName.length < 5) {
  //     console.log("validation failed");
  //     error.productName = "product name must be at least 5 characters long";
  //   }
  return { error, productName };
};
