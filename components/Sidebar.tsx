"use client";
import { useRanger, Ranger } from "@tanstack/react-ranger";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useRef, useState } from "react";
import { useProductsContext } from "@/context/ProductContext";

const Sidebar = () => {
  const { setCategory, setMaxPrice, setMinPrice, filters } =
    useProductsContext();
  const rangerRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<ReadonlyArray<number>>([0, 500]);

  const rangerInstance = useRanger<HTMLDivElement>({
    getRangerElement: () => rangerRef.current,
    values,
    min: 0,
    max: 1000,
    stepSize: 20,
    onChange: (instance: Ranger<HTMLDivElement>) => {
      setValues(instance.sortedValues);
      console.log(instance.sortedValues);
      setMinPrice(String(instance.sortedValues[0]));
      setMaxPrice(String(instance.sortedValues[1]));
    },
  });

  return (
    <div className="bg-blue-900/90 text-white shadow-2xl rounded-lg p-6 w-56">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>
      <div className="space-y-4 font-sans">
        <div>
          <Label className="text-lg">Category</Label>
          <RadioGroup
            className="font-light"
            value={filters.category}
            onValueChange={setCategory}
          >
            <div className="flex mt-4 items-center space-x-2">
              <RadioGroupItem value="" id="all" />
              <Label htmlFor="all">All Categories</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="electronics" id="electronics" />
              <Label htmlFor="electronics">Electronics</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="clothing" id="clothing" />
              <Label htmlFor="clothing">Clothing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="home" id="home" />
              <Label htmlFor="home">Home</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label className="text-lg">Price</Label>
          <div
            className="my-4"
            ref={rangerRef}
            style={{
              position: "relative",
              userSelect: "none",
              height: "4px",
              background: "#ddd",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
              borderRadius: "2px",
            }}
          >
            {rangerInstance
              .handles()
              .map(
                (
                  {
                    value,
                    onKeyDownHandler,
                    onMouseDownHandler,
                    onTouchStart,
                    isActive,
                  },
                  i
                ) => (
                  <button
                    key={i}
                    onKeyDown={onKeyDownHandler}
                    onMouseDown={onMouseDownHandler}
                    onTouchStart={onTouchStart}
                    role="slider"
                    aria-valuemin={rangerInstance.options.min}
                    aria-valuemax={rangerInstance.options.max}
                    aria-valuenow={value}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: `${rangerInstance.getPercentageForValue(value)}%`,
                      zIndex: isActive ? "1" : "0",
                      transform: "translate(-50%, -50%)",
                      width: "14px",
                      height: "14px",
                      outline: "none",
                      borderRadius: "100%",
                      background:
                        "linear-gradient(to bottom, #eee 45%, #ddd 55%)",
                      border: "solid 1px #888",
                    }}
                  />
                )
              )}
          </div>
          <div className="flex flex-row justify-between ">
            <div>0</div>
            <div>1000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
