import Example1 from "../assets/images/example1.webp";
import Example2 from "../assets/images/example2.webp";
import Example3 from "../assets/images/example3.webp";

const examples = [
    {
        title: "Nuestro primer viaje",
        image: Example1,
        place: "Santiago, Panamá.",
        date: "22 de marzo de 2025.",
        description: "Las mejores horas a tu lado.",
    },
    {
        title: "Encuentro en la universidad",
        image: Example2,
        place: "Ciudad de Panamá, Panamá.",
        date: "10 de abril de 2025.",
        description: "Fui feliz al darte unos detalles.",
    },
    {
        title: "Nuestra primera cita",
        image: Example3,
        place: "Cinta Costera, Panamá.",
        date: "22 de mayo de 2025.",
        description: "Ame ese abrazo que nos dimos.",
    },
]


export const Examplescards = () => {
    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
            {examples.map((example, index) => (
                <article
                    key={index}
                    className="group [perspective:1000px] h-[300px] w-full"
                >
                    <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] will-change-transform antialiased">

                        {/* Cara frontal */}
                        <div className="absolute inset-0 backface-hidden">
                            <img
                                src={example.image}
                                alt={`Ejemplo de constelación: ${example.title}`}
                                className="w-full h-full object-fill rounded-lg"
                                loading="lazy"
                                decoding="async"
                            />
                            <p className="absolute left-5 bottom-5 font-inter font-semibold text-white z-10">
                                {example.title}
                            </p>
                        </div>

                        {/* Cara trasera */}
                        <div className="absolute inset-0 bg-white rounded-lg p-6 shadow-lg [transform:rotateY(180deg)] backface-hidden flex items-center justify-center">
                            <div className="flex flex-col justify-center text-left h-full">
                                <h3 className="text-lg font-medium font-inter mb-2"><strong>{example.title}</strong></h3>
                                <p className="text-base font-normal font-inter"><strong>Lugar:</strong> {example.place}</p>
                                <p className="text-base font-normal font-inter"><strong>Fecha:</strong> {example.date}</p>
                                <p className="text-base font-normal font-inter"><strong>Mensaje:</strong> {example.description}</p>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}
