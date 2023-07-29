//Mock data for the store part of the website
import { faker } from "@faker-js/faker";
const brand = ["Mango", "H&M"];
const data = [];
for (let i = 0; i < 12; i++) {
  data.push({
    pic: faker.image.urlPicsumPhotos({
      category: "dark",
      width: 239,
      height: 325,
    }),
    brand: brand[Math.floor(Math.random() * 2)],
    star: 5,
    itemName: faker.commerce.productName(),
    price: faker.commerce.price({
      min: 300,
      max: 1200,
      dec: 0,
      symbol: "Rs.",
    }),
    customerNumber: faker.random.numeric(3),
  });
}

export default data;
