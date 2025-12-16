// Objeto con la información MÁS DETALLADA de los poetas, incluyendo fragmentos de obra y URLs
const dataPoetas = {
    silva: {
        nombre: "Medardo Ángel Silva",
        fecha: "Guayaquil, 1898 - 1919",
        biografia: `<p>Considerado el más precoz y dotado de la generación. Medardo Ángel Silva llevó una vida marcada por la pobreza y una sensibilidad extrema. A pesar de su origen humilde, se nutrió de la poesía simbolista francesa, trabajando como corrector de pruebas en periódicos, lo que le dio acceso a un vasto conocimiento literario. Su obra se caracteriza por la melancolía, el hastío vital y el presentimiento de la muerte.</p>
                    <p>Murió a los 21 años de un disparo; aunque registrado como suicidio, las circunstancias exactas siempre han estado envueltas en la leyenda, consolidándolo como el arquetipo del poeta maldito en Ecuador.</p>`,
        obras: `<ul>
                    <li>**El alma en los labios:** Su poema más célebre, musicalizado y convertido en un pasillo icónico.</li>
                    <li>**Poemas de las últimas horas:** Compilación de sus versos más personales y desgarradores.</li>
                    <li>**El árbol del bien y del mal:** Su única obra publicada formalmente en vida (ensayo).</li>
                </ul>`,
        fragmentos: {
            texto: `"Y cuando de la vida, ya cansado, / En el último viaje a lo ignorado, / Debamos separarnos lentamente, / Iré a tu lado sin pensar en nada, / Para no despertar... ¡Y si despierto / Me volveré a dormir eternamente!"`,
            explicacion: `**Análisis:** Este fragmento de "El alma en los labios" muestra su obsesión por la muerte como un escape del tedio vital. El **lenguaje es directo** dentro del marco modernista, utilizando el **endecasílabo** y el ritmo cadencioso para expresar un deseo de unión perpetua con el amor, incluso en el más allá. El uso del **subjuntivo** ("Y si despierto / Me volveré a dormir") refuerza el ansia de olvido eterno.`
        },
        curiosidades: [
            "Murió a los 21 años, siendo considerado la promesa trágicamente truncada de las letras ecuatorianas.",
            "Su musa y amor platónico fue <strong>Rosa Amada Villegas</strong>, a quien dedicó gran parte de su obra lírica.",
            "Su prosa, aunque menos conocida, muestra una agudeza crítica sobre la sociedad de Guayaquil."
        ],
        // URL de la imagen (ACTUALIZADA)
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjD2KCTNb_encYmQ61Qhet1-Szd3kI_egtw&s"
    },
    noboa: {
        nombre: "Ernesto Noboa y Caamaño",
        fecha: "Guayaquil, 1889 - 1927",
        biografia: `<p>Perteneciente a una de las familias más adineradas de Guayaquil, Noboa utilizó su riqueza para viajar por Europa, donde se imbuyó del simbolismo francés. Sin embargo, su vida estuvo marcada por una profunda neurosis, hipocondría y una creciente adicción a la morfina, buscando la evasión del dolor existencial.</p>
                    <p>Su poesía es la más decadente y lánguida del grupo. Es el maestro de la introspección melancólica, utilizando un lenguaje preciosista para describir estados anímicos de angustia y desesperación. Murió en Quito a los 37 años.</p>`,
        obras: `<ul>
                    <li>**Romanza de las horas:** Su principal colección de poemas, donde expone su tedio y dolor.</li>
                    <li>**Emoción vesperal:** Un poema cumbre, famoso por su tono crepuscular y desgarrador.</li>
                </ul>`,
        fragmentos: {
            texto: `"Hay tardes en que, extrañas a la vida, / Unas ansias de muerte me han rendido, / Y siento un infinito, un infinito / Deseo de llorar, y estoy llorando..."`,
            explicacion: `**Análisis:** Este verso de "Emoción Vesperal" es un ejemplo claro del *Spleen* (hastío vital). El **lenguaje es subjetivo** y musical. Utiliza la repetición ("un infinito, un infinito") para enfatizar la magnitud del sentimiento. La personificación de las tardes como "extrañas a la vida" y la rendición ante las "ansias de muerte" encapsulan la actitud de **evasión y pasividad** frente a la existencia.`
        },
        curiosidades: [
            "Fue un gran admirador de Edgar Allan Poe y Charles Baudelaire.",
            "Fue el único del grupo que tuvo contacto directo con la bohemia parisina, aunque regresó más enfermo y deprimido.",
            "Sus poemas no fueron bien recibidos por la crítica conservadora de la época, que los tachó de excesivamente mórbidos."
        ],
        // URL de la imagen 
        imagenUrl: "https://www.buscabiografias.com/img/people/Ernesto-Noboa.jpg"
    },
    borja: {
        nombre: "Arturo Borja",
        fecha: "Quito, 1892 - 1912",
        biografia: `<p>El más simbolista de los cuatro, Arturo Borja tuvo una existencia breve y atormentada, muriendo a los 20 años. Su poesía fue profundamente influenciada por Paul Verlaine, destacando por su extrema musicalidad y el uso de imágenes sensoriales para describir su desilusión.</p>
                    <p>A pesar de su escasa producción (solo 20 poemas en *La flauta de ónix*), su obra es crucial. Se quitó la vida con cianuro, apenas un mes después de casarse, simbolizando la total inadaptación del artista a la vida convencional.</p>`,
        obras: `<ul>
                    <li>**La flauta de ónix:** Contiene la totalidad de su obra lírica.</li>
                    <li>**Para mí tu recuerdo:** Poema donde se ve la influencia del *spleen* y la perfección formal.</li>
                </ul>`,
        fragmentos: {
            texto: `"Dame la llave del olvido, / Que no quiero ya más vivir, / Que estoy cansado, que me rindo, / Y no quiero ni siquiera decir: / Adiós, adiós, adiós, adiós..."`,
            explicacion: `**Análisis:** Este fragmento de "Para mí tu recuerdo" exhibe el agotamiento extremo. El **lenguaje es desesperado y rítmico**, empleando la repetición ("adiós, adiós...") como un recurso musical (propio del simbolismo) que simula el agotamiento físico y mental. El concepto de la "llave del olvido" es una metáfora de la muerte como la única solución al sufrimiento, buscando la **nada** en lugar de la despedida formal.`
        },
        curiosidades: [
            "Se suicidó solo un mes después de casarse con su prima, Carmen Rosa Sánchez.",
            "Fue un autodidacta y se nutrió de la poesía europea a través de traducciones y antologías.",
            "Su muerte fue considerada un escándalo moral en el Quito tradicional de 1912."
        ],
        // URL de la imagen 
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKf8A8ZU86g6JuQo0_UcORfLvyot5JcQinCA&s"
    },
    fierro: {
        nombre: "Humberto Fierro",
        fecha: "Quito, 1890 - 1929",
        biografia: `<p>Humberto Fierro fue el más enigmático y el de vida más solitaria. Trabajó como funcionario público en el Ministerio de Hacienda, llevando una existencia reservada y metódica que contrastaba con la intensidad de su lírica. Su poesía es de tono menor, muy pulcra y dedicada a temas como la naturaleza idealizada y el amor frustrado.</p>
                    <p>Fue el último en morir, también por suicidio, en 1929, cerrando el ciclo trágico de la generación. Su obra fue recopilada póstumamente gracias a los esfuerzos de sus amigos intelectuales.</p>`,
        obras: `<ul>
                    <li>**El laúd en el valle:** Único poemario recopilatorio de su obra.</li>
                    <li>**Tu Cabello:** Uno de sus poemas más citados, donde exalta la belleza formal.</li>
                </ul>`,
        fragmentos: {
            texto: `"Tu cabello, ¡oh, tu cabello! es un milagro / de seda negra, que tu frente abruma, / Y en él se enreda el viento como un vago / Esplendor de la niebla o de la espuma."`,
            explicacion: `**Análisis:** Este fragmento de "Tu cabello" ilustra la inclinación parnasiana de Fierro. El **lenguaje es descriptivo y preciosista**, enfocándose en la perfección de la imagen ("seda negra", "esplendor de la niebla"). El propósito es la **exaltación de la belleza formal** y sensorial por encima de la expresión de la emoción personal, utilizando la naturaleza (viento, espuma) para magnificar el objeto amado.`
        },
        curiosidades: [
            "Trabajó durante años como funcionario en el Ministerio de Hacienda, llevando una vida muy discreta.",
            "Fue el último en morir, en 1929. Su suicidio, aunque tardío respecto a los otros, selló el destino de la generación.",
            "Su amigo, el intelectual Gonzalo Zaldumbide, fue clave para rescatar y publicar su obra, que de otro modo se habría perdido."
        ],
        // URL de la imagen 
        imagenUrl: "https://historia-biografia.com/wp-content/uploads/2019/11/image-1.png"
    }
};

// Inicializa elementos clave
const poetaModal = new bootstrap.Modal(document.getElementById('poetaModal'));
const modalTitle = document.getElementById('poetaModalLabel');
const modalBody = document.getElementById('modalContent');
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');
const iniciarAppButton = document.getElementById('iniciarApp');


/* -------------------------------------- */
/* LÓGICA DE LA PANTALLA DE INICIO (SPLASH SCREEN) */
/* -------------------------------------- */

iniciarAppButton.addEventListener('click', () => {
    // 1. Iniciar la transición de opacidad del splash screen
    splashScreen.style.opacity = '0';
    
    // 2. Ocultar el splash screen y mostrar el contenido principal después de la transición
    setTimeout(() => {
        splashScreen.classList.add('d-none');
        mainContent.classList.remove('d-none');
    }, 1000); // 1000ms (1 segundo) debe coincidir con la transición en CSS
});


/* -------------------------------------- */
/* LÓGICA DE INTERACCIÓN CON LOS POETAS (MODAL Y POPOVERS) */
/* -------------------------------------- */

// Manejar el click en las tarjetas de los poetas
document.querySelectorAll('.poeta-card').forEach(card => {
    card.addEventListener('click', function() {
        const poetaKey = this.getAttribute('data-poeta');
        const poeta = dataPoetas[poetaKey];

        if (poeta) {
            // 1. Limpiar y configurar el título del Modal
            modalBody.innerHTML = '';
            modalTitle.textContent = poeta.nombre;

            // 2. Inyectar el contenido expandido (Biografía, Obras, Curiosidades y Fragmentos)
            modalBody.innerHTML = `
                <div class="row">
                    <div class="col-md-4 text-center">
                        <img src="${poeta.imagenUrl}" class="img-fluid rounded-circle mb-3 border border-warning" alt="${poeta.nombre}" style="width: 200px; height: 200px; object-fit: cover;">
                        <h4 class="text-warning">${poeta.nombre}</h4>
                        <p class="small text-white-50">${poeta.fecha}</p>
                    </div>
                    <div class="col-md-8">
                        <h5 class="text-warning">Contexto Biográfico</h5>
                        ${poeta.biografia}
                        
                        <h5 class="text-warning mt-4">Fragmentos y Análisis</h5>
                        <blockquote class="blockquote bg-dark p-3 border-start border-light ps-3">
                            <p class="mb-0 text-light fst-italic">${poeta.fragmentos.texto}</p>
                        </blockquote>
                        <p class="small">${poeta.fragmentos.explicacion}</p>
                        
                        <h5 class="text-warning mt-4">Obras Clave</h5>
                        ${poeta.obras}
                        
                        <h5 class="text-warning mt-4">Datos Curiosos</h5>
                        <ul class="list-unstyled d-flex flex-wrap gap-4">
                            ${poeta.curiosidades.map((dato, index) => `
                                <li>
                                    <span 
                                        class="dato-curioso-trigger" 
                                        data-bs-toggle="popover" 
                                        data-bs-trigger="hover focus"
                                        data-bs-placement="top"
                                        data-bs-custom-class="custom-popover"
                                        data-bs-content="${dato}"
                                        title="Dato Curioso #${index + 1}"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                                            <path d="M6 .278a5.5 5.5 0 0 0-3.465 9.043 4.5 4.5 0 0 0 3.862 3.834V15a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-.953a4.5 4.5 0 0 0 3.862-3.834A5.5 5.5 0 0 0 10.024.278L8.586 1.714A.5.5 0 0 1 8 1.714a.5.5 0 0 1-.586 0L6 .278z"/>
                                        </svg>
                                    </span>
                                    <span class="ms-2 small">Dato #${index + 1} (Haz hover)</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;

            // 3. Inicializar Popovers DENTRO del Modal (CRUCIAL para que funcione)
            const popoverTriggers = modalBody.querySelectorAll('[data-bs-toggle="popover"]');
            popoverTriggers.forEach(popoverTriggerEl => {
                // Destruir instancias viejas
                const existingPopover = bootstrap.Popover.getInstance(popoverTriggerEl);
                if (existingPopover) {
                    existingPopover.dispose();
                }
                
                new bootstrap.Popover(popoverTriggerEl, {
                    html: true, 
                    container: '#poetaModal' 
                }).enable();
            });

            // 4. Mostrar el Modal
            poetaModal.show();
        }
    });
});


/* -------------------------------------- */
/* LÓGICA DE ANIMACIÓN DEL ACORDEÓN */
/* -------------------------------------- */

const accordion = document.getElementById('accordionLegado');

if (accordion) {
    accordion.addEventListener('show.bs.collapse', function (e) {
        const panelBody = e.target.querySelector('.accordion-body');
        if (panelBody) {
            const animatableElements = panelBody.querySelectorAll('.animate-on-show');

            animatableElements.forEach(el => {
                el.classList.remove('animate-on-show');
                void el.offsetWidth; 
                el.classList.add('animate-on-show');
            });
        }
    });
}