import { IoCalendarNumber } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";
import { BsStars } from "react-icons/bs";

const steps = [
    {
        icon: <IoCalendarNumber />,
        step: "Paso 1",
        title: "Personaliza tu momento especial",
        descrip: "Elige la fecha y el lugar donde comenzó tu historia, y agrega un título y una breve descripción para hacerlo aún más único."
    },
    {
        icon: <BsStars />,
        step: "Paso 2",
        title: "Genera tu constelación",
        descrip: "Usamos datos astronómicos reales para mostrar cómo se veía el cielo esa noche."
    },
    {
        icon: <MdDownloadForOffline />,
        step: "Paso 3",
        title: "Descarga tu constelación",
        descrip: "Descarga tu constelación en alta calidad para compartirla o convertirla en un regalo."
    },
];


export const How = () => {
    return (

        <section id="how" className="scroll-mt-[60px] md:scroll-mt-[68px] px-6 py-20 bg-azul-oscuro">
            <div className="w-full  mx-auto max-w-[1000px] flex flex-col items-center justify-center text-center">
                <h1 className="font-playfair-display text-white text-2xl md:text-3xl font-bold ">
                    ¿Cómo funciona Stellify?
                </h1>
                <p className="font-inter text-white font-normal text-base md:text-xl mt-6 max-w-[800px]">
                    Una constelación única del cielo en el momento exacto en que comenzó tu historia.
                </p>
            </div>

            {/* Tarjetas de los pasos */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
                {steps.map((step, index) => (
                    <div key={index} className="bg-bg-card p-6 rounded-lg hover:shadow-[0_0_20px_4px_rgba(135,206,250,0.4)] transition-shadow duration-300">
                        <span className="text-icon-card text-4xl mb-4 inline-block">{step.icon}</span>
                        <h2 className="font-inter text-white text-xl font-bold">{step.step}</h2>
                        <h3 className="font-inter text-white text-base font-semibold mb-2">{step.title}</h3>
                        <p className="font-inter font-normal text-base text-card mt-8">{step.descrip}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
