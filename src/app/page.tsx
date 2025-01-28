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
    primaryNameServer: "ns1.01cluster.com",
    secondaryNameServer: "ns2.01cluster.com",
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
    if (field === "purpose") {
      setFormData({
        purpose: value,
        domainName: "",
        companyName: "",
        primaryNameServer: "ns1.01cluster.com",
        secondaryNameServer: "ns2.01cluster.com",
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
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
      setErrors((prev) => ({
        ...prev,
        [field]: !value,
      }));
    }
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
      primaryNameServer: "ns1.01cluster.com",
      secondaryNameServer: "ns2.01cluster.com",
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
    <div className="bg-gray-50 p-4 md:p-10 print:p-0 print:bg-white">
      <div className="max-w-7xl  mx-4 p-6 grid grid-cols-1 lg:w-full lg:grid-cols-5 gap-6 print:block print:max-w-none">
        <div className="rounded-lg shadow p-3 space-y-6 print:hidden col-span-2">
          <p className="font-bold text-base text-[#25265E]">
            Fill the details below to generate your cover letter
          </p>
          <p className="font-light text-[12px] text-[#25265E80]">
            Please toggle between personal and business as per your requirement
            and don’t forgot to stamp if its your business.
          </p>

          <div className=" w-full space-y-2 lg:space-y-4">
            <div className=" space-y-1 lg:space-y-2 ">
              <Label htmlFor="purpose">Purpose</Label>
              <Tabs
                value={formData.purpose}
                onValueChange={(value) => handleInputChange("purpose", value)}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger
                    className="hover:bg-blue-500 hover:text-white"
                    value="Personal"
                  >
                    Personal
                  </TabsTrigger>
                  <TabsTrigger
                    className="hover:bg-blue-500 hover:text-white"
                    value="Business"
                  >
                    Business
                  </TabsTrigger>
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
                  placeholder="yourdomainname.com.np"
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
                    placeholder="abc Pvt.Ltd. or Govt.Corp."
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
                  placeholder="ns1.01cluster.com"
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
                  placeholder="ns2.01cluster.com"
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

        <div className="w-full mx-3 col-span-3">
          <LetterPreview data={formData} isGenerating={isGenerating} />
        </div>
      </div>
    </div>
  );
}
