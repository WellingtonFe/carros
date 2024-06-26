import iconLuxury from "../assets/icon-luxury.svg"
export default function Luxury() {
    return (
        <section className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
          <img src={iconLuxury} alt="icone dos caros luxury" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4-xl font-bold text-offwhitebg">Luxury</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank" className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg">Ver mais</a>
        </section>
    )
}