"use client";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const Sidebar = () => {
  const handleFilterChange = (value: string) => {};
  return (
    <div className="bg-blue-900/90 text-white shadow-2xl rounded-lg p-6 w-56">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>
      <div className="space-y-4 font-sans">
        <div>
          <Label className="text-lg">Category</Label>
          <RadioGroup
            className="font-light"
            value=""
            onValueChange={handleFilterChange}
          >
            <div className="flex mt-4 items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All</Label>
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
          <Input
            type="number"
            placeholder="Enter Price Range"
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
