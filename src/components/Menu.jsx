import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

export const Menu = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const getLinkClasses = (id) =>
        `relative inline-block ml-1 font-semibold text-white transition-all duration-300
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:transition-all after:duration-300
    ${activeSection === id ? "after:w-full" : "after:w-0 hover:after:w-full"}`;


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

    useEffect(() => {
        const sections = ["hero", "how", "example", "create"];

        const handleScroll = () => {
            const scrollY = window.scrollY;
            let current = "";

            for (let id of sections) {
                const section = document.getElementById(id);
                if (section) {
                    const offsetTop = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollY >= offsetTop - 100 && scrollY < offsetTop + height - 100) {
                        current = id;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Llama a la función al cargar para establecer el estado inicial   
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (id, route) => {
        const section = document.querySelector(id);
        if (section) {
            setActiveSection(id.replace("#", "")); // 🔹 Esto marca activo antes de hacer scroll

            section.scrollIntoView({ behavior: "smooth" });
            history.pushState(null, "", route);
            setTimeout(() => setIsOpen(false), 500);
        }
    };


    const bgClass =
        isOpen || isScrolled
            ? "bg-azul-oscuro/90 shadow-sm backdrop-blur-sm"
            : "bg-transparent";

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgClass}`}>
            <nav className="flex items-center justify-between max-w-[1000px] w-full mx-auto px-4 py-4 text-white">
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
                    <li><a href="#hero" className={getLinkClasses("hero")} onClick={(e) => { e.preventDefault(); handleScrollTo("#hero", "/") }}>Inicio</a>
                    </li>
                    <li><a href="#how" className={getLinkClasses("how")} onClick={(e) => { e.preventDefault(); handleScrollTo("#how", "/how") }}>Cómo funciona</a></li>
                    <li><a href="#example" className={getLinkClasses("example")} onClick={(e) => { e.preventDefault(); handleScrollTo("#example", "/example") }}>Ejemplos</a></li>
                    <li><a href="#create" className={getLinkClasses("create")} onClick={(e) => { e.preventDefault(); handleScrollTo("#create", "/create") }}>Crear Constelación</a></li>
                </ul>

                {/* Botón hamburguesa */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white text-2xl focus:outline-none px-4"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Menú mobile */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen px-8 py-6 bg-azul-oscuro/90 backdrop-blur-sm" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col gap-6 text-white text-base font-inter font-normal">
                    <li><a href="#hero" className={getLinkClasses("hero")} onClick={(e) => { e.preventDefault(); handleScrollTo("#hero", "/") }}>Inicio</a></li>
                    <li><a href="#how" className={getLinkClasses("how")} onClick={(e) => { e.preventDefault(); handleScrollTo("#how", "/how") }}>Cómo funciona</a></li>
                    <li><a href="#example" className={getLinkClasses("example")} onClick={(e) => { e.preventDefault(); handleScrollTo("#example", "/example") }}>Ejemplos</a></li>
                    <li><a href="#create" className={getLinkClasses("create")} onClick={(e) => { e.preventDefault(); handleScrollTo("#create", "/create") }}>Crear Constelación</a></li>
                </ul>
            </div>
        </header>
    );
};
