import burger1 from "../assets/burger1.jpeg";
import burger2 from "../assets/burger2.jpeg";
import burger3 from "../assets/burger3.jpeg";
import burger4 from "../assets/burger4.jpeg";
import burger5 from "../assets/burger5.jpeg";

import tacos1 from "../assets/tacos1.jpg";
import tacos2 from "../assets/tacos2.jpg";
import tacos3 from "../assets/tacos3.jpg";
import tacos4 from "../assets/tacos4.jpg";
import tacos5 from "../assets/tacos5.jpg";

import pizza1 from "../assets/pizza1.jpg";
import pizza2 from "../assets/pizza2.jpg";
import pizza3 from "../assets/pizza3.jpg";
import pizza4 from "../assets/pizza4.jpg";
import pizza5 from "../assets/pizza5.jpg";

import pasta1 from "../assets/pasta1.jpeg";
import pasta2 from "../assets/pasta2.jpeg";
import pasta3 from "../assets/pasta3.jpeg";
import pasta4 from "../assets/pasta4.jpeg";
import pasta5 from "../assets/pasta5.jpg";

export const foodTypes = [
  {
    name: "burger",
    img: burger1,
    id: crypto.randomUUID(),
  },
  {
    name: "tacos",
    img: tacos1,
    id: crypto.randomUUID(),
  },
  {
    name: "pizza",
    img: pizza1,
    id: crypto.randomUUID(),
  },
  {
    name: "pasta",
    img: pasta1,
    id: crypto.randomUUID(),
  },
];

// 24 foods (6 burger, 6 tacos, 6 pizza, 6 pasta)
export const foods = [
  {
    name: "Burger 1",
    category: "burger",
    img: burger1,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Burger 2",
    category: "burger",
    img: burger2,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Burger 3",
    category: "burger",
    img: burger3,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Burger 4",
    category: "burger",
    img: burger4,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Burger 5",
    category: "burger",
    img: burger5,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Pizza 1",
    category: "pizza",
    img: pizza1,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Pizza 2",
    category: "pizza",
    img: pizza2,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Pizza 3",
    category: "pizza",
    img: pizza3,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Pizza 4",
    category: "pizza",
    img: pizza4,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Pizza 5",
    category: "pizza",
    img: pizza5,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "tacos 1",
    category: "tacos",
    img: tacos1,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "tacos 2",
    category: "tacos",
    img: tacos2,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "tacos 3",
    category: "tacos",
    img: tacos3,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "tacos 4",
    category: "tacos",
    img: tacos4,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "tacos 5",
    category: "tacos",
    img: tacos5,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Pasta 1",
    category: "pasta",
    img: pasta1,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Pasta 2",
    category: "pasta",
    img: pasta2,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Pasta 3",
    category: "pasta",
    img: pasta3,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Pasta 4",
    category: "pasta",
    img: pasta4,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "Pasta 5",
    category: "pasta",
    img: pasta5,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
];
