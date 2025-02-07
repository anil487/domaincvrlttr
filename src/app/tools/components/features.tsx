"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Globe, Calculator } from "lucide-react"

const features = [
  {
    id: "hosting-plan",
    label: "Hosting Plan Recommendation",
    url: "/tools/hostingplan",
    icon: Server,
    description:
      "Get personalized hosting plan recommendations based on your website needs,expected traffic & budget requirements.",
    action: "Find Best Plan",
  },
  {
    id: "ip-checker",
    label: "IP Checker",
    url: "/tools/ipchecker",
    icon: Globe,
    description:
      "Check your current IP address, location, and network information. Useful for debugging connectivity issues and geo-location services.",
    action: "Check IP",
  },
  {
    id: "vat-calculator",
    label: "VAT Calculator",
    url: "/tools/vatcal",
    icon: Calculator,
    description:
      "Calculate VAT (Value Added Tax) for different countries and rates. Perfect for international business and e-commerce transactions.",
    action: "Calculate VAT",
  },
]

export function Features() {
  const pathname = usePathname()

  const isToolActive = features.some((feature) => feature.url === pathname)
  const displayedFeatures = isToolActive ? features.filter((feature) => feature.url !== pathname) : features

  return (
    <div className="container mt-5 justify-center mx-auto max-w-screen-xl">
      <div
        className={`grid gap-8 ${isToolActive ? "md:grid-cols-2 place-items-center" : "md:grid-cols-2 lg:grid-cols-3"}`}
      >
        {displayedFeatures.map((feature) => (
          <Card key={feature.id} className="bg-white w-full max-w-sm hover:bg-slate-50 transition-transform transform hover:scale-105 duration-300 ">
            <CardHeader>
              <CardTitle className="text-2xl font-medium">{feature.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={feature.url} className="w-full">
                <Button variant="outline" className="w-full bg-blue-600 hover:bg-blue-800 text-white">
                  <feature.icon className="mr-2 h-4 w-4" />
                  {feature.action}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

