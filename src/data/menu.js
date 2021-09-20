import alpineBreakfast from "../images/alpine-breakfast.jpg";
import bianka from "../images/bianka.jpg";
import bologna from "../images/bologna.jpg";
import burrata from "../images/burrata.jpg";
import cheeseCake from "../images/cheese-cake.jpg";
import falafelSalad from "../images/falafel-salad.jpg";
import frenchToast from "../images/french-toast.jpg";
import ndujaAndRicotta from "../images/nduja-and-ricotta-pasta.jpg";
import nduja from "../images/nduja.jpg";
import normandyBreakfast from "../images/normandy-breakfast.jpg";
import paesanoOmelette from "../images/paesano-omelette.jpg";
import pastaArrabiata from "../images/pasta-arrabiata.jpg";
import pastaCarbonara from "../images/pasta-carbonara.jpg";
import pastaWithPrawns from "../images/pasta-with-prawns.jpg";
import plumAndPoppyCake from "../images/plum-and-poppy-cake.jpg";
import quinoaHalumiSalad from "../images/quinioa-halumi-salad.jpg";
import steakSalad from "../images/steak-salad.jpg";
import tiramisu from "../images/tiramisu.jpg";
import whiteAndHot from "../images/white-and-hot.jpg";

const menu = [
  {
    name: "Breakfast",
    items: [
      {
        name: "Normandy breakfast",
        description:
          "Scrambled eggs, spinach and bacon puree in a dough basket, sour cream",
        image: normandyBreakfast,
        price: 430,
      },
      {
        name: "Alpine breakfast",
        description:
          "Sausage with cheese, homemade bun, scrambled eggs with cheese, grilled mushrooms, sour cream, tomato",
        image: alpineBreakfast,
        price: 470,
      },
      {
        name: "Paesano omelette",
        description: "Prosciutto, feta cheese, tomatoes",
        image: paesanoOmelette,
        price: 395,
      },
      {
        name: "French toasts",
        description:
          "Prosciutto, sour cream, red pepper and hazelnut cream with cheese",
        image: frenchToast,
        price: 395,
      },
    ],
  },
  {
    name: "Salads",
    items: [
      {
        name: "Falafel salad with goath cheese",
        description:
          "Mixed leaves, tahini dressing, melanzane mozzarella rolls, roasted chickpeas",
        image: falafelSalad,
        price: 805,
      },
      {
        name: "Crunchy Burrata",
        description:
          "Mixed leaves, crunchy granola, cherry tomato, dried tomato, pesto sauce, green olives, beet, almond flakes",
        image: burrata,
        price: 805,
      },
      {
        name: "Quinoa halumi salad",
        description:
          "Mix of leaves, tomato, cucumber, vinegret, carrot, pepper, zucchini, onion, broccoli, almond",
        image: quinoaHalumiSalad,
        price: 815,
      },
      {
        name: "Steak salad",
        description:
          "Mix greens, vegetable crisps. Grilled mushrooms, grilled zucchini, parmesan, tapioca bites, cherry tomatoes, honey and thyme sauce",
        image: steakSalad,
        price: 955,
      },
    ],
  },
  {
    name: "Pasta",
    items: [
      {
        name: "Nduja and ricotta pasta",
        description:
          "Hot calabrian sausage, tomato sauce and fresh cream, olive oil, onion, parmesan",
        image: ndujaAndRicotta,
        price: 755,
      },
      {
        name: "Pasta Carbonara",
        description:
          "Gvancialle bacon, spring onions, garlic, egg yolks, neutral sour cream, parmesan",
        image: pastaCarbonara,
        price: 755,
      },
      {
        name: "Pasta with prawns",
        description: "Garlic, white wine, tomato sauce, spinach",
        image: pastaWithPrawns,
        price: 825,
      },
      {
        name: "Pasta Arrabiata",
        description: "Spicey tomato sauce, garlic, parmesan, basil",
        image: pastaArrabiata,
        price: 640,
      },
    ],
  },
  {
    name: "Pizze",
    items: [
      {
        name: "Bologna",
        description: "Ricotta, mozzarella, mortadella, pesto pistachio",
        image: bologna,
        price: 825,
      },
      {
        name: "Nduja",
        description:
          "Cheese, nduja, mozzarella, tomato, red onion, black olives",
        image: nduja,
        price: 815,
      },
      {
        name: "bianka",
        description:
          "Carbonara sauce, spinach cream, zucchini, gorgonzola, crispy pancetta, fine herbs",
        image: bianka,
        price: 720,
      },
      {
        name: "White and hot",
        description:
          "Spicy tomato, ham, kulen, pancetta, pork ribs, caramelized onions, cheddar",
        image: whiteAndHot,
        price: 795,
      },
    ],
  },
  {
    name: "Dessert",
    items: [
      {
        name: "Plum and poppy cake",
        description: "Marzipan, white chocolate cream",
        image: plumAndPoppyCake,
        price: 335,
      },
      {
        name: "Tiramisu",
        description: "Coffee, almond liqueur, marsala wine",
        image: tiramisu,
        price: 355,
      },
      {
        name: "Cheese Cake",
        description:
          "Granola biscuit, mascarpone cheese, choice of homemade toppings: blueberry, mango and apple, wild strawberry",
        image: cheeseCake,
        price: 355,
      },
    ],
  },
];

export default menu;
