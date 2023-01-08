import Thumbnail from "../images/image-product-1.jpg";
import FirstImage from "../images/image-product-2.jpg";
import SecondImage from "../images/image-product-3.jpg";
import ThirdImage from "../images/image-product-4.jpg";

export const products = [
  {
    id: 1,
    title: "sneaker company",
    name: "fall limited edition sneakers",
    about:
      "The low-profile sneakers are your perfect casual wear companion. Feature a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: (125.0).toFixed(2),
    discount: 50,
    initialPrice: (250.0).toFixed(2),
  },
];
export const images = [Thumbnail, FirstImage, SecondImage, ThirdImage];
