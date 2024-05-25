"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CircleCheck } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export type Topping = {
    id : string;
    name: string;
    image:string;
    price: number;
    isAvailable: boolean;
}

const ToppingCard = ({topping, selectedToppings, handleCheckBoxCheck} : {topping : Topping, selectedToppings : Topping[], handleCheckBoxCheck : (topping: Topping) => void}) => {
    const isCurrentSelected = selectedToppings.some((element) => element.id === topping.id);


  return (
    <Button variant={'outline'} onClick={() => handleCheckBoxCheck(topping)}  className={`relative flex flex-col items-center h-full ${isCurrentSelected ? 'border-primary' : ''}`}>
        <Image src={topping.image} width={80} height={80} alt={topping.name} />
        <h4>{topping.name}</h4>
        <p>$ {topping.price}</p>
        {isCurrentSelected ? <CircleCheck className="absolute top-1 right-1 text-primary" /> : null}
        
    </Button>
  )
}

export default ToppingCard