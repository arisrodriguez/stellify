import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

export const Menu = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const linkClasses = "relative inline-block ml-1 font-semibold text-white transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300";

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const closeOnScroll = () => setIsOpen(false);
        window.addEventListener("scroll", closeOnScroll);
        return () => window.removeEventListener("scroll", closeOnScroll);
    }, []);

    const handleScrollTo = (id, route) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });

            // Actualiza la URL sin hash y sin recarga
            history.pushState(null, "", route);

            // Espera antes de cerrar el menú mobile
            setTimeout(() => setIsOpen(false), 500);
        }
    };

    const bgClass =
        isOpen || isScrolled
            ? "bg-azul-oscuro/90 shadow-md backdrop-blur-sm"
            : "bg-transparent";

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgClass}`}>
            <nav className="flex items-center justify-between max-w-[1000px] w-full mx-auto p-4 text-white">
                <div
                    role="button"
                    onClick={
                        (e) => {
                            e.preventDefault();
                            const hero = document.getElementById("hero");
                            if (hero) {
                                hero.scrollIntoView({ behavior: "smooth" });

                                // Quita el hash de la URL sin recargar
                                history.pushState(null, "", "/");
                            }
                        }}
                    className="flex items-center gap-4 px-4 cursor-pointer">
                    <BsFillMoonStarsFill className="text-xl md:text-3xl" />
                    <h1 className="text-xl md:text-3xl font-playfair-display font-bold">Stellify</h1>
                </div>

                {/* Menú desktop */}
                <ul className="hidden md:flex items-center justify-center gap-4 text-base font-inter font-normal cursor-pointer">
                    <li><a href="#hero" className={linkClasses} onClick={(e) => { e.preventDefault(); handleScrollTo("#hero", "/") }}>Inicio</a></li>
                    <li><a href="#how" className={linkClasses} onClick={(e) => { e.preventDefault(); handleScrollTo("#how", "/how") }}>Cómo funciona</a></li>
                    <li><a href="#example" className={linkClasses} onClick={(e) => { e.preventDefault(); handleScrollTo("#example", "/example") }}>Ejemplos</a></li>
                    <li><a href="#create" className={linkClasses} onClick={(e) => { e.preventDefault(); handleScrollTo("#create", "/create") }}>Crear Constelación</a></li>
                </ul>

                {/* Botón hamburguesa */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white text-2xl focus:outline-none"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Menú mobile */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen py-6 px-6 bg-azul-oscuro/90 backdrop-blur-sm" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col gap-6 text-white text-lg font-inter font-medium">
                    <li><a href="#hero" className={linkClasses} onClick={(e) => { e.preventDefault(); handleScrollTo("#hero", "/") }}>Inicio</a></li>
                    <li><a href="#how" className={linkClasses} onClick={(e) => { e.preventDefault(); handleScrollTo("#how", "/how") }}>Cómo funciona</a></li>
                    <li><a href="#example" className={linkClasses} onClick={(e) => { e.preventDefault(); handleScrollTo("#example", "/example") }}>Ejemplos</a></li>
                    <li><a href="#create" className={linkClasses} onClick={(e) => { e.preventDefault(); handleScrollTo("#create", "/create") }}>Crear Constelación</a></li>
                </ul>
            </div>
        </header>
    );
};
