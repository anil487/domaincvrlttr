
import { AutoIPFetch } from "./api";
import ToolsPage from "../page";

export default function IpChecker() {
  return (
    <>
    <ToolsPage >
      <div className=" min-h-screen bg-gradient-to-b from-violet-500 to-white h-80">
        <main className="container px-4 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="text-center sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              IP Address Checker
            </h1>
            <p className="mt-2 text-lg text-gray-100">
              Discover your current IP address and location
            </p>
          </div>
          <AutoIPFetch />
        </main>
      </div>
      </ToolsPage>
      
    </>
  );
}
