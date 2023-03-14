import Thumbnail from "../images/image-product-1.jpg";
import FirstImage from "../images/image-product-2.jpg";
import SecondImage from "../images/image-product-3.jpg";
import ThirdImage from "../images/image-product-4.jpg";

const products = [
  {
    id: "1",
    title: "sneaker company",
    name: "fall limited edition sneakers",
    about:
      "These low-profile sneakers are your perfect casual wear companion. Feature a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: (125.0).toFixed(2),
    initialPrice: (250.0).toFixed(2),
    // discount: ,
  },
];

function getProductData(id) {
  let productData = products.find((product) => product.id === id);
  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }
  return productData;
}

export const images = [Thumbnail, FirstImage, SecondImage, ThirdImage];

export { products, getProductData };
