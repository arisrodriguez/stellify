import { Examplescards } from "./Examplescards"

export const Examples = () => {
    return (
        <section id="example" className="scroll-mt-[60px] md:scroll-mt-[68px] px-6 py-20 bg-gris-claro">
            <div className="w-full mx-auto max-w-[1000px] flex flex-col items-center justify-center text-center">
                <h1 className="font-playfair-display text-azul-oscuro text-2xl md:text-3xl font-bold ">
                    Inspírate con otras constelaciones
                </h1>
                <p className="font-inter text-gris-oscuro font-normal text-base md:text-xl mt-6 max-w-[800px]">
                    Cada cielo cuenta una historia. Descubre cómo otras personas inmortalizaron su momento especial.
                </p>
            </div>

            {/* Tarjetas de ejemplos */}
            < Examplescards />
        </section>
    )
}
