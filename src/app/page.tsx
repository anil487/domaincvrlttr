"use client";

import { useState } from "react";
import { FormData } from "./types/form";
import { LetterPreview } from "./components/letter-preview";
import { Button } from "@/components/ui/button";
import { TbWorldWww } from "react-icons/tb";
import { CiServer } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CoverLetterGenerator() {
  const [formData, setFormData] = useState<FormData>({
    purpose: "",
    domainName: "",
    companyName: "",
    primaryNameServer: "",
    secondaryNameServer: "",
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

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [field]: !value,
    }));
  };

  const validateFields = () => {
    const newErrors = {
      domainName: !formData.domainName,
      primaryNameServer: !formData.primaryNameServer,
      secondaryNameServer: !formData.secondaryNameServer,
      name: !formData.name,
      address: !formData.address,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handlePrint = () => {
    if (validateFields()) {
      window.print();
    }
  };

  const handleClear = () => {
    setFormData({
      purpose: "Personal",
      domainName: "",
      companyName: "",
      primaryNameServer: "",
      secondaryNameServer: "",
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
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 print:p-0 print:bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 print:block print:max-w-none">
        <div className="space-y-6 print:hidden">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label  htmlFor="purpose">Purpose</Label>
              <Select
                value={formData.purpose}
                onValueChange={(value) => handleInputChange("purpose", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Personal">Personal</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="domainName">Domain Name
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
                  className="pl-10"
                />
                <TbWorldWww className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {errors.domainName && (
                <p className="text-red-500 text-sm">Domain Name is required.</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Registered Company Name</Label>
              <div className="relative">
                <Input
                  id="companyName"
                  placeholder="E.g., abc Pvt. Ltd. or abc Govt. Corp."

                  value={formData.companyName}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                  className="pl-10"
                />
                <HiOutlineBuildingOffice2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="primaryNameServer">Primary Name Server
              <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="primaryNameServer"
                  required
                  placeholder="ns1.example.com"
                  value={formData.primaryNameServer}
                  onChange={(e) =>
                    handleInputChange("primaryNameServer", e.target.value)
                  }
                  className="pl-10"
                />
                <CiServer className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {errors.primaryNameServer && (
                <p className="text-red-500 text-sm">
                  Primary Name Server is required.
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondaryNameServer">Secondary Name Server
              <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="secondaryNameServer"
                  required
                  placeholder="ns2.example.com"
                  value={formData.secondaryNameServer}
                  onChange={(e) =>
                    handleInputChange("secondaryNameServer", e.target.value)
                  }
                  className="pl-10"
                />
                <CiServer className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {errors.secondaryNameServer && (
                <p className="text-red-500 text-sm">
                  Secondary Name Server is required.
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name
              <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="pl-10"
                />
                <CiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required.</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address
              <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="address"
                  required
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="pl-10"
                />
                <TfiLocationPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {errors.address && (
                <p className="text-red-500 text-sm">Address is required.</p>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              className="bg-white text-black h-14 w-20 hover:bg-blue-600 hover:text-white border-2 border-black"
              onClick={handlePrint}
            >
              Print
            </Button>
            <Button className="h-14 w-20  hover:bg-blue-600 hover:text-white" variant="outline" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </div>

        <div className="print:w-full print:m-0 col-span-2  ">
          <LetterPreview data={formData} />
        </div>
      </div>
    </div>
  );
}