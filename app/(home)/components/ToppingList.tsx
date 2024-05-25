'use client'

import { useState } from "react";
import ToppingCard, { Topping } from "./ToppingCard";

const toppings = [
  {
    id: "1",
    name: "Chicken",
    image: "/chicken.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "2",
    name: "jelapeno",
    image: "/Jelapeno.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Cheese",
    image: "/cheese.png",
    price: 50,
    isAvailable: true,
  },
];

const ToppingList = () => {
  const [selectedToppings, setselectedToppings] = useState([toppings[0]]);

  const handleCheckBoxCheck = (topping: Topping) => {
    const isAlreadyExist = selectedToppings.some(element => element.id === topping.id);

    if(isAlreadyExist) {
        setselectedToppings((prev) => prev.filter(ele => ele.id !== topping.id));
        return;
    }
    setselectedToppings(prev => [...prev, topping])

  };

  return (
    <section>
      <h3 className="mt-6">Extra toppings</h3>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {toppings.map((topping) => (
          <ToppingCard
            topping={topping}
            key={topping.id}
            selectedToppings={selectedToppings}
            handleCheckBoxCheck={handleCheckBoxCheck}
          />
        ))}
      </div>
    </section>
  );
};

export default ToppingList;
