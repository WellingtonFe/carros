import iconSuvs from "../assets/icon-suvs.svg"
export default function Suvs() {
    return (
        <section className="bg-green p-12">
          <img src={iconSuvs} alt="icone dos carros suvs" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4-xl font-bold text-offwhitebg">Suvs</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs" target="_blank" className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg">Ver mais</a>
        </section>
    )
}