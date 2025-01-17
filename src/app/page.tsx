'use client'

import { useState } from 'react'
import { FormData } from './types/form'
import { LetterPreview } from './components/letter-preview'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CoverLetterGenerator() {
  const [formData, setFormData] = useState<FormData>({
    purpose: 'Personal',
    domainName: '',
    companyName: '',
    primaryNameServer: '',
    secondaryNameServer: '',
    name: '',
    address: ''
  })

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handlePrint = () => {
    window.print()
  }

  const handleClear = () => {
    setFormData({
      purpose: 'Personal',
      domainName: '',
      companyName: '',
      primaryNameServer: '',
      secondaryNameServer: '',
      name: '',
      address: ''
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 print:p-0 print:bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 print:block print:max-w-none">
        <div className="space-y-6 print:hidden">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="purpose">Purpose</Label>
              <Select
                value={formData.purpose}
                onValueChange={(value) => handleInputChange('purpose', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Personal">Personal</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="domainName">Domain Name</Label>
              <Input
                id="domainName"
                placeholder="yourdomain.com.np"
                value={formData.domainName}
                onChange={(e) => handleInputChange('domainName', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Registered Company Name</Label>
              <Input
                id="companyName"
                placeholder="Registered Company Pvt. Ltd."
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="primaryNameServer">Primary Name Server</Label>
              <Input
                id="primaryNameServer"
                placeholder="ns1.example.com"
                value={formData.primaryNameServer}
                onChange={(e) => handleInputChange('primaryNameServer', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondaryNameServer">Secondary Name Server</Label>
              <Input
                id="secondaryNameServer"
                placeholder="ns2.example.com"
                value={formData.secondaryNameServer}
                onChange={(e) => handleInputChange('secondaryNameServer', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button className='bg-white text-black h-10 w-16 hover:bg-slate-50 border-2 border-black' onClick={handlePrint}>Print</Button>
            <Button className='h-10 w-16' variant="outline" onClick={handleClear}>Clear</Button>
          </div>
        </div>

        <div className="print:w-full print:m-0">
          <LetterPreview data={formData} />
        </div>
      </div>
    </div>
  )
}

