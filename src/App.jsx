import Sedans from "./components/sedans"
import Suvs from "./components/suvs"
import Luxury from "./components/luxury"
export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center itens-center">
      <div className="lg:flex max-w-[920px]">
        <Sedans />
        <Suvs />
        <Luxury />
      </div>
    </main>
  )
}