import { useState } from "react";

export const Create = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Imagen por defecto para el modal
    const defaultImage =
        "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pZ2h0JTIwc2t5fGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000";


    const openModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <section id="create" className="scroll-mt-[60px] md:scroll-mt-[68px] px-6 py-20 bg-azul-oscuro">
                <div className="w-full mx-auto max-w-[1000px] flex flex-col items-center justify-center text-center">
                    <h1 className="font-playfair-display text-white text-2xl md:text-3xl font-bold ">
                        Nuestro cielo
                    </h1>
                    <p className="font-inter  font-normal text-gris-claro text-base md:text-xl mt-6 max-w-[800px]">
                        El inicio de una historia, bajo un mismo cielo.
                    </p>
                </div>

                {/* Formulario */}
                <div className="max-w-[1000px] mx-auto px-4">
                    <form
                        action=""
                        className="flex flex-col w-full items-center space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6"
                    >
                        {/* Aquí tus inputs igual que antes */}
                        <div className="flex flex-col w-full">
                            <label
                                htmlFor="title"
                                className="text-left text-white text-base font-inter font-semibold"
                            >
                                Nombre de la constelación
                            </label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Nombre de la constelación"
                                className="w-full p-2 mt-4 rounded-lg bg-gris-claro text-gris-oscuro font-inter"
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label
                                htmlFor="place"
                                className="text-left text-white text-base font-inter font-semibold"
                            >
                                Lugar del encuentro
                            </label>
                            <input
                                id="place"
                                name="place"
                                type="text"
                                placeholder="Cinta costera, panamá"
                                className="w-full p-2 mt-4 rounded-lg bg-gris-claro text-gris-oscuro font-inter"
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label
                                htmlFor="date"
                                className="text-left text-white text-base font-inter font-semibold"
                            >
                                Fecha especial
                            </label>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                placeholder="mm-dd-aaaa"
                                className="w-full p-2 mt-4 rounded-lg bg-gris-claro text-gris-oscuro font-inter"
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label
                                htmlFor="hour"
                                className="text-left text-white text-base font-inter font-semibold"
                            >
                                Hora
                            </label>
                            <input
                                id="hour"
                                name="hour"
                                type="time"
                                placeholder="08:00 PM"
                                className="w-full p-2 mt-4 rounded-lg bg-gris-claro text-gris-oscuro font-inter"
                            />
                        </div>

                        <div className="w-full col-span-2">
                            <label
                                htmlFor="description"
                                className="text-left text-white text-base font-inter font-semibold"
                            >
                                Descripción
                            </label>
                            <input
                                id="description"
                                name="description"
                                type="text"
                                placeholder="Nuestro primer viaje a la playa"
                                className="w-full p-2 mt-4 rounded-lg bg-gris-claro text-gris-oscuro font-inter"
                            />
                        </div>

                        <div className="w-full col-span-2">
                            <button
                                type="submit"
                                onClick={openModal}
                                className="w-full h-[48px] bg-cta-background text-cta-foreground font-inter font-semibold text-xl px-4 py-2 rounded-xl mt-8 hover:shadow-[0_0_20px_4px_rgba(255,255,0,0.4)]  transition-all duration-300 ease-in-out"
                            >
                                Crear mi constelación
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-azul-oscuro bg-opacity-70 flex items-center justify-center z-50 px-4">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full text-center relative">
                        <h2 className="text-xl font-bold mb-4">Tu constelación</h2>
                        <img
                            src={defaultImage}
                            alt="Constelación por defecto"
                            className="mx-auto mb-6 max-h-64 object-contain rounded-md shadow-md"
                        />

                        <div className="flex justify-center gap-4">
                            <button
                                onClick={closeModal}
                                className="font-inter font-semibold text-base px-4 py-2 bg-red-300 rounded hover:bg-red-400 "
                            >
                                Cerrar
                            </button>

                            <a
                                href={defaultImage}
                                download="constelacion.jpg"
                                className="font-inter font-semibold text-base px-4 py-2 bg-green-400 text-cta-foreground rounded hover:bg-green-500 transition cursor-pointer"
                            >
                                Descargar imagen
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
