"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ToolsPage from "../page";

const VatCalculator = () => {
  const [amount, setAmount] = useState<string>("");
  const [vatrate, setVatRate] = useState<string>("13");
  const [vatType, setVatType] = useState<string>("Exclusive");
  const [actualValue, setActualValue] = useState<number>(0);
  const [vatAmount, setVatAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    calculateVAT();
  }, [amount, vatrate, vatType]);

  const calculateVAT = () => {
    const numericAmount = Number.parseFloat(amount) || 0;
    const rate = Number.parseFloat(vatrate) / 100;

    if (numericAmount <= 0 || rate <= 0) {
      return;
    }

    if (vatType === "Exclusive") {
      setActualValue(numericAmount);
      setVatAmount(Number.parseFloat((numericAmount * rate).toFixed(2)));
      setTotalAmount(
        Number.parseFloat((numericAmount * (1 + rate)).toFixed(2))
      );
    } else {
      const baseAmount = numericAmount / (1 + rate);
      setActualValue(Number.parseFloat(baseAmount.toFixed(2)));
      setVatAmount(Number.parseFloat((numericAmount - baseAmount).toFixed(2)));
      setTotalAmount(numericAmount);
    }
  };

  const handleVatTypeChange = (value: string) => {
    setVatType(value);
    setAmount("");
    setActualValue(0);
    setVatAmount(0);
    setTotalAmount(0);
  };

  return (
    <>
      <ToolsPage>
        <div className=" min-h-screen bg-gradient-to-b from-violet-500 to-white flex items-center justify-center p-4 relative h-64">
          <div className="w-full max-w-4xl mx-auto  p-8 space-y-8 rounded-2xl shadow-md bg-[#f8faff] absolute top-36">
            <h1 className="text-5xl  font-bold text-center text-black mb-10 ">
              VAT Calculator
            </h1>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
              <div>
                <label className="text-lg font-semibold mb-2 block">
                  Amount
                </label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="text-lg"
                />
              </div>

              <div>
                <label className="text-lg font-semibold mb-2 block">
                  VAT %
                </label>
                <Select value={vatrate} onValueChange={setVatRate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select VAT rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="13">13%</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-lg font-semibold mb-2 block">Tax</label>
                <Select value={vatType} onValueChange={handleVatTypeChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tax type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Exclusive">Exclusive</SelectItem>
                    <SelectItem value="Inclusive">Inclusive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">
                  NRS:{actualValue.toFixed(2)}
                </div>
                <div className="text-blue-600 font-medium">Actual Value</div>
              </div>

              <div className="text-4xl font-bold">+</div>

              <div className="text-center">
                <div className="text-3xl font-bold">
                  NRS:{vatAmount.toFixed(2)}
                </div>
                <div className="text-green-600 font-medium">VAT Amount</div>
              </div>

              <div className="text-4xl font-bold">=</div>

              <div className="text-center">
                <div className="text-3xl font-bold">
                  NRS:{totalAmount.toFixed(2)}
                </div>
                <div className="text-purple-600 font-medium">Total Amount</div>
              </div>
            </div>
          </div>
        </div>
      </ToolsPage>
    </>
  );
};

export default VatCalculator;
