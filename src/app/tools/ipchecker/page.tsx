import { AutoIPFetch } from "./api"
import ToolsPage from "../page"
import { SquareCheck } from "lucide-react"

export default function IpChecker() {
  return (
    <ToolsPage>
      <div className="min-h-screen bg-gradient-to-b from-violet-500 to-white">
        <main className="container px-4 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">IP Address Checker</h1>
            <p className="mt-2 text-lg text-gray-100">Discover your current IP address and location</p>
          </div>
          <AutoIPFetch />
        </main>
      </div>
      <div className="bg-slate-50 py-12">
        <div className="container mx-auto max-w-4xl px-4 space-y-8">
          <section>
            <h2 className="font-bold text-3xl mb-4">What is an IP Address?</h2>
            <p className="text-gray-700">
              An IP address (Internet Protocol address) is a unique numerical label assigned to every device connected
              to the internet. It acts like a digital home address, allowing devices to communicate and exchange data.
            </p>
          </section>
          <section>
            <h2 className="font-bold text-3xl mb-4">Types of IP Address</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <SquareCheck className="mr-2 flex-shrink-0 text-violet-500" />
                <span className="text-gray-700">
                  <strong>IPv4 (Internet Protocol Version 4)</strong> – Uses a 32-bit format (e.g., 192.168.1.1).
                </span>
              </li>
              <li className="flex items-start">
                <SquareCheck className="mr-2 flex-shrink-0 text-violet-500" />
                <span className="text-gray-700">
                  <strong>IPv6 (Internet Protocol Version 6)</strong> – Uses a 128-bit format (e.g.,
                  2001:db8::ff00:42:8329).
                </span>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold text-3xl mb-4">Why Are IP Addresses Important?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Enable internet connectivity</li>
              <li>Help in tracking locations</li>
              <li>Assist in cybersecurity and online privacy</li>
            </ul>
          </section>
        </div>
      </div>
    </ToolsPage>
  )
}

