import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

const testCard = {
  id: 161,
  name: "Tokyo Rising Sun - Highland",
  tagline: "A Beautiful Accident.",
  first_brewed: "06/2009",
  description:
    "A forgotten gem in the deepest, darkest corner of the warehouse. Aged in a Highland whisky cask resulting in a viscous slow motion roller coaster of powdered cacao, hints of burning pirate ships, salted caramel, sharp berries and toasted marshmallow.",
  image_url: "https://images.punkapi.com/v2/161.png",
  abv: 13.2,
  ibu: 85,
  target_fg: 1023,
  target_og: 1125,
  ebc: 140,
  srm: 71,
  ph: 4.4,
  attenuation_level: 82.17,
  volume: { value: 20, unit: "litres" },
  boil_volume: { value: 25, unit: "litres" },
  method: {
    mash_temp: [
      {
        temp: {
          value: 65,
          unit: "celsius",
        },
        duration: null,
      },
    ],
    fermentation: {
      temp: {
        value: 21,
        unit: "celsius",
      },
    },
    twist:
      "Cranberry: 25g at end, Jasmine: 25g at end, Muscovado sugar: 500g at start, Oak chips soaked in lowland whisky: 15g at dry hop",
  },
  ingredients: {
    malt: [
      {
        name: "Extra Pale",
        amount: {
          value: 7.6,
          unit: "kilograms",
        },
      },
      {
        name: "Dark Crystal",
        amount: {
          value: 1.75,
          unit: "kilograms",
        },
      },
      {
        name: "Chocolate",
        amount: {
          value: 0.5,
          unit: "kilograms",
        },
      },
      {
        name: "Roasted Barley",
        amount: {
          value: 0.5,
          unit: "kilograms",
        },
      },
    ],
    hops: [
      {
        name: "Chinook",
        amount: { value: 37.5, unit: "grams" },
        add: "start",
        attribute: "bitter",
      },
      {
        name: "Galena",
        amount: { value: 37.5, unit: "grams" },
        add: "start",
        attribute: "bitter",
      },
      {
        name: "Chinook",
        amount: { value: 37.5, unit: "grams" },
        add: "start",
        attribute: "bitter",
      },
      {
        name: "Galena",
        amount: { value: 37.5, unit: "grams" },
        add: "start",
        attribute: "bitter",
      },
      {
        name: "Galena",
        amount: { value: 25, unit: "grams" },
        add: "end",
        attribute: "flavour",
      },
      {
        name: "First Gold",
        amount: {
          value: 25,
          unit: "grams",
        },
        add: "end",
        attribute: "flavour",
      },
      {
        name: "Chinook",
        amount: { value: 25, unit: "grams" },
        add: "end",
        attribute: "flavour",
      },
    ],
    yeast: "WLP099 - Super High Gravity Ale",
  },
  food_pairing: [
    "Chorizo cooked in red wine",
    "Rib eye steak with a compound butter",
    "Baked Alaska",
  ],
  brewers_tips:
    "Leave on wood for as long as you dare. If possible forget about it for four years.",
  contributed_by: "Sam Mason <samjbmason>",
};

it("should render a card", () => {
  render(
    <Card
      beerName={testCard.name}
      beerImage={testCard.image_url}
      beerTagline={testCard.tagline}
    />
  );

  const card = screen.getByRole("heading", {
    name: /Tokyo Rising Sun - Highland/i,
  });

  expect(card).toBeInTheDocument();
});

it("should render the card details", () => {
  render(
    <Card
      beerName={testCard.name}
      beerImage={testCard.image_url}
      beerTagline={testCard.tagline}
    />
  );

  const cardHeader = screen.getByRole("heading", {
    name: /Tokyo Rising Sun - Highland/i,
  });
  const cardImage = screen.getByRole("img", {
    name: /a detailed bottle of tokyo rising sun \- highland/i,
  });
  const cardTagLine = screen.getByText(/a beautiful accident\./i);

  expect(cardHeader).toBeInTheDocument();
  expect(cardImage).toBeInTheDocument();
  expect(cardTagLine).toBeInTheDocument();
});
