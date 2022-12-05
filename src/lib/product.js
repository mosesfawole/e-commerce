import Thumbnail from "../images/image-product-1-thumbnail.jpg";
import FirstImage from "../images/image-product-2-thumbnail.jpg";
import SecondImage from "../images/image-product-2-thumbnail.jpg";
import ThirdImage from "../images/image-product-3-thumbnail.jpg";
import FourthImage from "../images/image-product-4-thumbnail.jpg";

const products = [
  {
    title: "sneaker company",
    name: "fall limited edition sneakers",
    about:
      "The low-profile sneakers are your perfect casual wear companion. Feature a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: (125.0).toFixed(2),
    discount: 50,
    initialPrice: (250.0).toFixed(2),
    thumnail: Thumbnail,
    image1: FirstImage,
    image2: SecondImage,
    image3: ThirdImage,
    image4: FourthImage,
  },
];

export default products;
