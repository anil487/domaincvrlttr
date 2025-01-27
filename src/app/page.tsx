"use client";

import { useState } from "react";
import type { FormData } from "./types/form";
import { LetterPreview } from "./components/letter-preview";
import { TbWorldWww } from "react-icons/tb";
import { CiServer } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiResetRightLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CoverLetterGenerator() {
  const [formData, setFormData] = useState<FormData>({
    purpose: "Personal",
    domainName: "",
    companyName: "",
    primaryNameServer: "ns101.prabhuhost.com",
    secondaryNameServer: "ns102.prabhuhost.com",
    name: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    domainName: false,
    primaryNameServer: false,
    secondaryNameServer: false,
    name: false,
    address: false,
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "purpose" && value === "Personal"
        ? { companyName: "" }
        : {}),
    }));
    setErrors((prev) => ({
      ...prev,
      [field]: !value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTimeout(() => {
      setIsGenerating(true);
    }, 1500);
  };

  const handleClear = () => {
    setFormData({
      purpose: "",
      domainName: "",
      companyName: "",
      primaryNameServer: "ns101.prabhuhost.com",
      secondaryNameServer: "ns102.prabhuhost.com",
      name: "",
      address: "",
    });
    setErrors({
      domainName: false,
      primaryNameServer: false,
      secondaryNameServer: false,
      name: false,
      address: false,
    });
    setIsGenerating(false);
  };

  return (
    <div className=" bg-gray-50 p-4 md:p-12 print:p-0 print:bg-white">
      <div className="mx-4 p-8 grid grid-cols-1 shadow-md lg:w-full lg:grid-cols-3 gap-8 print:block print:max-w-none">
        <div className="space-y-6 print:hidden">
          <div className="space-y-6">
            <p className="font-bold text-base text-[#25265E]">
              Fill the details below to generate your cover letter
            </p>
            <p className="font-light text-[12px] text-[#25265E80]">
              Please toggle between personal and business as per your
              requirement and don’t forgot to stamp if its your business.
            </p>
          </div>
          <div className=" w-full space-y-2 lg:space-y-4">
            <div className=" space-y-1 lg:space-y-2 ">
              <Label htmlFor="purpose">Purpose</Label>
              <Tabs
                value={formData.purpose}
                onValueChange={(value) => handleInputChange("purpose", value)}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="Personal">Personal</TabsTrigger>
                  <TabsTrigger value="Business">Business</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-1 lg:space-y-2">
              <Label htmlFor="domainName">
                Domain Name
                <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="domainName"
                  required
                  placeholder="E.g.,yourdomainname.com.np"
                  value={formData.domainName}
                  onChange={(e) =>
                    handleInputChange("domainName", e.target.value)
                  }
                  className="pl-10 text-xs lg:text-sm"
                />
                <TbWorldWww className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {errors.domainName && (
                <p className="text-red-500 text-sm">Domain Name is required.</p>
              )}
            </div>

            {formData.purpose === "Business" && (
              <div className="space-y-1 lg:space-y-2">
                <Label htmlFor="companyName">
                  Registered Company Name
                  <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="companyName"
                    placeholder="e.g.,abc Pvt.Ltd. or Govt.Corp."
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="pl-10 text-xs lg:text-sm "
                  />
                  <HiOutlineBuildingOffice2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            )}

            <div className=" space-y-1 lg:space-y-2">
              <Label htmlFor="name">
                Full Name
                <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="pl-10 text-xs lg:text-sm"
                />
                <CiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required.</p>
              )}
            </div>

            <div className=" space-y-1 lg:space-y-2">
              <Label htmlFor="address">
                Address
                <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="address"
                  required
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="pl-10 text-xs lg:text-sm"
                />
                <TfiLocationPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {errors.address && (
                <p className="text-red-500 text-sm">Address is required.</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1 lg:space-y-2">
              <Label htmlFor="primaryNameServer">
                Primary NameServer
                <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="primaryNameServer"
                  required
                  placeholder="ns101.prabhuhost.com"
                  value={formData.primaryNameServer}
                  onChange={(e) =>
                    handleInputChange("primaryNameServer", e.target.value)
                  }
                  className="pl-10 text-xs lg:text-sm"
                />
                <CiServer className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {errors.primaryNameServer && (
                <p className="text-red-500 text-sm">
                  Primary Name Server is required.
                </p>
              )}
            </div>

            <div className=" space-y-1 lg:space-y-2">
              <Label htmlFor="secondaryNameServer">
                Secondary NameServer
                <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="secondaryNameServer"
                  required
                  placeholder="ns102.prabhuhost.com"
                  value={formData.secondaryNameServer}
                  onChange={(e) =>
                    handleInputChange("secondaryNameServer", e.target.value)
                  }
                  className="pl-10 text-xs lg:text-sm"
                />
                <CiServer className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {errors.secondaryNameServer && (
                <p className="text-red-500 text-sm">
                  Secondary Name Server is required.
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-8 lg:flex justify-between">
            <Button
              className="h-12 w-30 bg-blue-600 hover:bg-blue-800"
              onClick={handleSubmit}
            >
              Generate Cover
            </Button>
            <RiResetRightLine
              onClick={handleClear}
              className="h-10 w-16  p-2 rounded-md text-white bg-[#4CAF50] hover:bg-[#45a049] cursor-pointer"
            />
          </div>
        </div>

        <div className="w-full lg:w-full mt-6 mx-3 col-span-2">
          <LetterPreview data={formData} isGenerating={isGenerating} />
        </div>
      </div>
    </div>
  );
}
