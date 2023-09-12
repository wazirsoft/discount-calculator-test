"use client";
import { useState } from "react";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";
import axios from "axios";

export default function Home() {
  const [priceBeforeDiscount, setPriceBeforeDiscount] = useState(0);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [saved, setSaved] = useState(0);

  const clearInputs = () => {
    setPriceBeforeDiscount(0);
    setPriceAfterDiscount(0);
    setDiscount(0);
    setSaved(0);
  };
  const calculateDiscount = async () => {
    const data = {
      price: priceBeforeDiscount,
      discountPercent: discount,
    };

    const { data: responseData } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/calculate/discount`,
      data
    );

    setPriceAfterDiscount(responseData.priceAfterDiscount);
    setSaved(responseData.discount);

    console.log(responseData);
  };

  return (
    <main>
      <h1 className="text-black text-xl text-center font-bold mt-3">
        Price Discount Calculator
      </h1>

      <section className="flex items-center justify-center lg:mb-10">
        <div className="container mx-auto bg-blue-500 p-6 md:p-4 rounded-lg shadow-lg max-w-md mt-3">
          <Label text="Price before discount*" />
          <Input
            type="number"
            placeholder="200"
            value={priceBeforeDiscount}
            onChange={(val) => {
              setPriceBeforeDiscount(val);
            }}
            symbolLeft="$"
          />

          <Label text="Discount*" />
          <Input
            type="number"
            placeholder="10"
            value={discount}
            onChange={(val) => {
              setDiscount(val);
            }}
            symbolRight="%"
          />

          <Label text="Price After discount" />
          <Input
            type="number"
            placeholder="180"
            value={priceAfterDiscount}
            onChange={(val) => {
              setPriceAfterDiscount(val);
            }}
            symbolLeft="$"
          />

          <Label text="You Saved" />
          <Input
            type="number"
            placeholder="20"
            value={saved}
            onChange={(val) => {
              setSaved(val);
            }}
            symbolLeft="$"
          />

          <div className="flex justify-end mt-4">
            <Button text="Clear" onClick={clearInputs} />
            <Button text="Calculate" onClick={calculateDiscount} />
          </div>
        </div>
      </section>
    </main>
  );
}
