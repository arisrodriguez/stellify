import heroMobile from "../assets/images/hero-mobile.webp";
import heroDesktop from "../assets/images/hero-desktop.webp";

export const Hero = () => {
    const handleScrollTo = (selector, route) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            // Actualiza la URL sin recargar
            history.pushState(null, "", route);
        }
    };

    return (
        <section id="hero" className="relative h-screen overflow-hidden">
            {/* Imagen de fondo */}
            <picture className="absolute inset-0 -z-10 block">
                <source media="(min-width: 768px)" srcSet={heroDesktop} />
                <img
                    src={heroMobile}
                    alt="Fondo de constelación"
                    className="w-full h-full object-cover"
                />
            </picture>

            <div className="flex flex-col items-center justify-center text-center px-6 h-full">
                <h1 className="font-playfair-display text-white text-2xl md:text-5xl font-bold">
                    El cielo del instante en que todo comenzó
                </h1>
                <p className="font-inter text-white font-normal text-sm md:text-xl mt-6">
                    Genera una constelación personalizada del día que marcó tu historia de amor.
                </p>

                <a
                    href="#create"
                    onClick={(e) => { e.preventDefault(); handleScrollTo("#create", "/create") }}
                    className="w-[300px] h-[56px] bg-cta-background text-cta-foreground font-inter font-semibold text-xl px-4 py-2 rounded-xl mt-20
                    hover:shadow-[0_0_20px_4px_rgba(255,255,0,0.4)] hover:scale-105 transition-all duration-300 ease-in-out mx-auto flex items-center justify-center"
                >
                    Crear constelación
                </a>
            </div>
        </section>
    );
};
