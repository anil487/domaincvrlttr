import { Features } from "./components/features"
import { Hero } from "./components/hero"

export default function ToolsPage ({ children }: { children: React.ReactNode }) {
  return (
    <>
    <main className="min-h-screen">
      
      <Hero />
      {children}
      <Features />
    </main>
    </>
  )
}

