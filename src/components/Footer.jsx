import { BsFillMoonStarsFill } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";

const email = "izzat1029@hotmail.com";
const mailto = `mailto:${email}`;
const linkClasses =
    "relative inline-block ml-1 font-semibold transition-all duration-300 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 " +
    "after:h-[2px] after:bg-azul-oscuro hover:after:w-full after:transition-all after:duration-300";

export const Footer = () => {
    return (
        <footer className="bg-gris-claro text-azul-oscuro text-center py-20 px-6">
            <div className="flex flex-col md:flex-row gap-2 max-w-[1000px] mx-auto items-center md:items-start justify-between space-y-8 md:space-y-0">
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-4">
                        <BsFillMoonStarsFill
                            className="text-xl md:text-3xl"
                        />
                        <h1 className="text-xl md:text-3xl font-playfair-display font-bold">
                            Stellify
                        </h1>
                    </div>
                    <p className="font-inter font-semibold tex-base text-left mt-4">
                        Bajo el mismo cielo desde 2025
                    </p>
                </div>

                <div>
                    <ul className="text-left font-inter font-semibold text-base text-azul-oscuro space-y-2">
                        <li><a
                            href="#home"
                            className={linkClasses}>
                            Inicio
                        </a></li>
                        <li><a
                            href="#how"
                            className={linkClasses}>
                            Cómo Funciona
                        </a></li>
                        <li><a
                            href="#example"
                            className={linkClasses}>
                            Ejemplos
                        </a></li>
                        <li><a
                            href="#create"
                            className={linkClasses} >
                            Crear constelación
                        </a></li>
                    </ul>
                </div>


                <div>
                    <h2 className="font-inter font-semibold tex-base">
                        ¿Tienes ides o sugerencias?
                    </h2>
                    <a
                        className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-azul-oscuro text-white/80 font-inter font-semibold text-base mt-2  hover:text-white transition-all duration-300 ease-in-out"
                        href={mailto}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FcIdea />
                        <span>Envianos tus idea</span>
                    </a>
                </div>
            </div>
            <p className="font-inter font-semibold tex-base mt-20">
                © 2025 Stellify. Hecho con 💜 bajo las estrellas.
            </p>
        </footer>
    )
}
