const startButton = document.getElementById('start');
const continuarButton = document.getElementById('continuar');
const menu = document.getElementById('menu');
const historia = document.getElementById('historia');

window.onload = function () {
    const pagina = localStorage.getItem('pagina');
    if (pagina) {
        continuarButton.disabled = false;
    } else {
        continuarButton.disabled = true;
    }
}

// Agregamos un evento de clic al botón "Start"
startButton.addEventListener('click', () => {
    // Al hacer clic en el botón "Start", eliminamos todas las variables del localStorage
    localStorage.clear();

    // Ocultamos el menú y mostramos la historia
    menu.style.display = 'none';
    historia.style.display = 'block';

    // Llamamos a la función para crear un personaje
    crearPersonaje();
});

// Selecciona el elemento que deseas cambiar el fondo
const fondo = document.querySelector('.fondo');


// Función para crear un personaje
function crearPersonaje() {

    // Establece la nueva imagen de fondo
    fondo.style.backgroundImage = "url('images//fondo-parte-1.jpeg')";

    historia.innerHTML = `
        <div class="h-screen bg-cover bg-center" style="background-image: url('fondo.jpg');">
            <div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 bg-white bg-opacity-50 rounded shadow-md">
                <h2 class="text-3xl font-bold mb-4">Crear personaje</h2>
                <p class="text-lg mb-4">Introduce el nombre de tu personaje:</p>
                <input id="nombre-personaje" type="text" class="w-full p-2 mb-4 border border-gray-400 rounded">
                <p class="text-lg mb-4">Selecciona una característica para tu personaje:</p>
                <select id="caracteristica-personaje" class="w-full p-2 mb-4 border border-gray-400 rounded">
                    <option value="fuerte">Fuerte y decidido: Un líder nato con una gran determinación y capacidad para tomar decisiones difíciles.</option>
                    <option value="sigiloso">Sigiloso y temoroso: Un personaje cauteloso y reservado que prefiere mantener un perfil bajo y evitar conflictos.</option>
                    <option value="despiadado">Despiadado y sangriento: Un personaje sin remordimientos ni compasión que no dudará en hacer lo que sea necesario para lograr sus objetivos.</option>
                    <option value="inteligente">Inteligente y audaz: Un personaje astuto y estratégico que utiliza su inteligencia y su audacia para superar obstáculos y alcanzar sus metas.</option>
                </select>
                <button id="guardar-personaje" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Guardar</button>
            </div>
        </div>
    `;
    const guardarButton = document.getElementById('guardar-personaje');
    guardarButton.addEventListener('click', () => {
        const nombrePersonaje = document.getElementById('nombre-personaje').value;
        const caracteristicaPersonaje = document.getElementById('caracteristica-personaje').value;
        localStorage.setItem('nombrePersonaje', nombrePersonaje);
        localStorage.setItem('caracteristicaPersonaje', caracteristicaPersonaje);
        localStorage.setItem('pagina', '1');
        mostrarPagina1();
    });
}

//accion en boton start
startButton.addEventListener('click', () => {
    menu.style.display = 'none';
    historia.style.display = 'block';
    crearPersonaje();
});

//accion de boton continuar
continuarButton.addEventListener('click', () => {

    // Establece la nueva imagen de fondo
    fondo.style.backgroundImage = "url('images//fondo-parte-1.jpeg')";

    const pagina = localStorage.getItem('pagina');
    switch (pagina) {
        case '1':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            mostrarPagina1();
            break;
        case '2':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            mostrarPagina2();
            break;
        case '3':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            mostrarPagina3();
            break;
        case '4':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            mostrarPagina4();
            break;
        case '5':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_2_ruta_alex.js').then(module => {
                module.mostrarCapitulo2RutaAlex();
                localStorage.setItem('pagina', '5');
                localStorage.setItem('ruta', 'alex');
            });
            break;
        case '6':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_2_ruta_alex.js').then(module => {
                module.mostrarParte2();
            });
            break;
        case '7':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_2_ruta_alex.js').then(module => {
                module.mostrarParte3();
            });
            break;
        case '8':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_2_ruta_alex.js').then(module => {
                module.mostrarParte4();
            });
            break;
        case '9':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_2_ruta_maya.js').then(module => {
                module.mostrarCapitulo2RutaMaya();
                localStorage.setItem('pagina', '9');
                localStorage.setItem('ruta', 'maya');
            });
            break;
        case '10':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_2_ruta_maya.js').then(module => {
                module.mostrarParte2();
            });

            break;
        case '11':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_2_ruta_maya.js').then(module => {
                module.mostrarParte3();
            });
            break;
        case '12':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_2_ruta_maya.js').then(module => {
                module.mostrarParte4();
            });
            break;
        case '13':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_3_ruta_capellini.js').then(module => {
                module.mostrarCapitulo3RutaCapellini();
                localStorage.setItem('pagina', '13');
                localStorage.setItem('ruta', 'capellini');
            });
            break;
        case '14':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_3_ruta_capellini.js').then(module => {
                module.mostrarParte2();

            });
            break;
        case '15':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_3_ruta_capellini.js').then(module => {
                module.mostrarParte3();
            });
            break;
        case '16':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_3_ruta_capellini.js').then(module => {
                module.mostrarParte4();
            });
            break;
        case '17':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_3_ruta_casso.js').then(module => {
                module.mostrarCapitulo3RutaCasso();
                localStorage.setItem('pagina', '17');
                localStorage.setItem('ruta', 'casso');
            });
            break;
        case '18':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_3_ruta_casso.js').then(module => {
                module.mostrarParte2();
            });
            break;
        case '19':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_3_ruta_casso.js').then(module => {
                module.mostrarParte3();
            });
            break;
        case '20':
            // Ocultamos el menú y mostramos la historia
            menu.style.display = 'none';
            historia.style.display = 'block';
            import('./capitulo_3_ruta_casso.js').then(module => {
                module.mostrarParte4();
            });
            break;

        // Agrega más casos para cada página
        default:
            console.log('No hay página siguiente');
    }
});

function mostrarNombrePersonaje() {
    const nombrePersonaje = localStorage.getItem('nombrePersonaje');
    return `<b>${nombrePersonaje}</b>`;
}

function recargarPagina() {
    window.location.reload();
}
// Función para mostrar la primera página
function mostrarPagina1() {
    historia.innerHTML = `
        <nav id="navbar">
            <div id="pagina-numero">Página 1</div>
            <div id="libro-titulo">The Ascension of The Shadows</div>
            <button onclick="recargarPagina()">Salir</button>
        </nav>
        
        <div class="container mx-auto mt-4 p-4 pt-6 md:p-6 lg:p-12 xl:p-24 bg-white bg-opacity-50 rounded shadow-md">
            <h2>La Sombra</h2>
            <p>La ciudad de Santos City nunca dormía. Sus calles estaban siempre llenas de vida, de gente que iba y venía, de luces que parpadeaban y de sonidos que retumbaban. Pero detrás de esta fachada de normalidad, había una ciudad diferente. Una ciudad gobernada por el crimen y la corrupción.</p>
            <p>En el corazón de esta ciudad, había un hombre que lo controlaba todo. Un hombre llamado Sean Capellini, el jefe de la mafia de Santos City. Capellini era un hombre astuto y cruel, que había construido su imperio a través de la violencia y la intimidación.</p>
            <p>La mafia de Capellini se dedicaba a todo tipo de negocios criminales: tráfico de drogas, prostitución, extorsión, asesinatos... Nada estaba fuera de su alcance. Y Capellini era el cerebro detrás de todo.</p>
            <p>Pero Capellini no solo se dedicaba a los negocios criminales. También tenía una pasión por la colección de arte y objetos valiosos. Su mansión en el barrio rico de la ciudad era un museo de objetos valiosos y obras de arte.</p>
            <p>Sin embargo, la noche del 15 de marzo de 2023, Capellini no estaba en su mansión. Estaba en su oficina, en el corazón de la ciudad, reunido con sus hombres de confianza.</p>
            <p>"Hemos tenido un problema con la familia de los Rodríguez", dijo uno de los hombres de Capellini. "No han pagado su deuda a tiempo y ahora nos deben 100.000 dólares".</p>
            <p>Capellini se rió. "Eso es un problema fácil de resolver", dijo. "Vayan a la casa de los Rodríguez y recojan la deuda. Si no pagan, entonces... ya saben qué hacer".</p>
            <p>Los hombres de Capellini asintieron y salieron de la oficina. Capellini se quedó solo, pensando en su próximo movimiento.</p>
            <p>La noche era oscura y silenciosa. La ciudad estaba en calma. Pero en la casa de los Rodríguez, algo estaba a punto de cambiar. Algo que cambiaría la vida de su hijo, <b>${mostrarNombrePersonaje()}</b>, para siempre.</p>
            
            <button id="continuar-historia" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continuar</button>
        </div>
    `;
    const continuarButton = document.getElementById('continuar-historia');
    continuarButton.addEventListener('click', () => {
        mostrarPagina2();
        localStorage.setItem('pagina', '2');
    });
}

// Función para mostrar la segunda página
function mostrarPagina2() {
    historia.innerHTML = `
        <nav id="navbar">
            <div id="pagina-numero">Página 2</div>
            <div id="libro-titulo">The Ascension of The Shadows</div>
            <button onclick="recargarPagina()">Salir</button>
        </nav>
        <div class="container mx-auto mt-4 p-4 pt-6 md:p-6 lg:p-12 xl:p-24 bg-white bg-opacity-50 rounded shadow-md">
            <h2>El motivo</h2>
            <p>La puerta de la casa de los Rodríguez se abrió con un golpe seco. El padre, Dann, estaba sentado en el living, viendo la televisión. Se levantó rápidamente al escuchar el golpe.</p>
            <p>"¿Quién es?" preguntó Dann, intentando mantener la calma.</p>
            <p>"Venimos por el pago", respondió una voz gruesa desde el otro lado de la puerta.</p>
            <p>Dann abrió la puerta y se encontró con cuatro hombres vestidos de negro, con cara de pocos amigos. El líder de los hombres, un tipo grande y musculoso, se acercó a él.</p>
            <p>"¿Dónde está el dinero del señor Capellini?" preguntó el hombre, con una voz que hacía temblar.</p>
            <p>Dann intentó explicar que no tenía el dinero, que lo había perdido en un mal negocio. Se puso nervioso y comenzó a sudar.</p>
            <p>"Escuchen, sé que debo el dinero", dijo Dann, intentando mantener la calma. "Pero lo perdí. No tengo nada ahora"./p>
            <p>El hombre se rió. "Eso no es problema nuestro", dijo. "nos debes 100.000 dólares y queremos que los pagues ahora mismo".</p>
            <p>Dann se puso desesperado. Sabía que no tenía el dinero y que no podía pagar la deuda.</p>
            <p>"Por favor, tengan piedad", dijo Dann, cayendo de rodillas. "No tengo nada. No puedo pagar la deuda".</p>
            <p>El hombre se acercó a Dann y lo miró con desprecio.</p>
            <p>"No nos importa si no puede pagar la deuda", dijo. "Lo que nos importa es que nos paguen. Y si no nos pagan, entonces... entonces tendremos que tomar medidas".</p>
            <p>De inmediato comienzan a golpearlo, con sus manos y pies.</p>
            <p>Dann desprendia su sangre por toda la casa.</p>            
            <p>De repente, la esposa de Dann, Erina, salió de la cocina con un bote de vidrio en la mano. Estaba llorando y su cara estaba desencajada.</p>
            <p>"¡Déjenlo en paz!" gritó Erina, arrojando el bote de vidrio contra uno de los hombres.</p>
            <p>El bote golpeó al hombre en la cabeza, haciéndolo caer al suelo. Los otros dos hombres se enfurecieron y se abalanzaron sobre Erina.</p>
            <p>Dann intentó defender a su esposa, pero uno de los hombres lo golpeó en la cara, haciéndolo caer al suelo.</p>
            <p>A lo lejos, el niño, <b>${mostrarNombrePersonaje()}</b>, miraba a sus padres, inmóvil y aterrorizado. No sabía qué hacer.</p>
            <p>De repente, el padre se levantó, con la cara ensangrentada y los ojos llenos de ira.</p>
            <p>"¡No les pagaré nada!" gritó Dann. "¡No después de lo que le han hecho a mi esposa!"</p>
            <p>El líder de los hombres sacó una pistola y la apuntó a la cabeza de Dann.</p>
            <p>"¿Estás seguro de que quieres hacer esto?" preguntó el hombre, con una sonrisa cruel.</p>
                        
            <button id="opcion-1" class="bg-green-500 text-white font-medium text-lg px-6 py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300 transition duration-300">
                continuar
            </button>


        </div>
    `;

    const opcion1Button = document.getElementById('opcion-1');

    opcion1Button.addEventListener('click', () => {
        mostrarPagina3();
        localStorage.setItem('pagina', '3');
    });

}

// Función para mostrar la tercera página
function mostrarPagina3() {
    historia.innerHTML = `
        <nav id="navbar">
            <div id="pagina-numero">Página 3</div>
            <div id="libro-titulo">The Ascension of The Shadows</div>
            <button onclick="recargarPagina()">Salir</button>
        </nav>
        <div class="container mx-auto mt-4 p-4 pt-6 md:p-6 lg:p-12 xl:p-24 bg-white bg-opacity-50 rounded shadow-md">
            <h2>Por ustedes</h2>
            <p>Erina intentó librarse de los hombres, pero uno de ellos la tomó y la arrojó al suelo. Luego, intentó una perversión con ella, pero Dann se enfureció y golpeó a los otros hombres.</p>
            <p>Luego Dann va por el hombre que intentaba hacerle daño a Erina, arremte con fuerza contra él mientras que Erina intentaba escapar.</p>
            <p>Dann golpeó al hombre en la cara con un puñetazo fuerte, pero el hombre no se rindió. Se levanto y golpeó a Dann en el estómago con un golpe bajo. Dann se dobló de dolor, pero no se detuvo.</p>
            <p>Golpeó al hombre en la mandíbula con un gancho. El hombre se tambaleó hacia atrás, pero Dann no se detuvo. Lo golpeó de nuevo y de nuevo, cada vez con más fuerza.</p>
            <p>El hombre comenzó a sangrar por la nariz y la boca, y Dann podía ver el miedo en sus ojos. Pero justo cuando Dann estaba a punto de darle el golpe final, se escuchó un disparo.</p>
            <p>Dann agachó su cabeza para ver una herida en su estómago. Pasmado, quedó quieto.</p>
            <p>Otro de los hombres, con una sonrisa cruel en su rostro, se acercó a Dann mientras yacía en el suelo, indefenso. Con un gesto brutal, le descargó un golpe feroz en la cabeza, haciendo que su cráneo se estrellara contra el suelo con un sonido hueco. Dann se quedó inmóvil, su cuerpo sin vida, su sangre esparcida por el suelo.</p>
            <p>Erina, presa de un dolor insoportable, se arrodilló junto a su esposo, llorando desconsoladamente. Intentó tomar su mano, pero era demasiado tarde. Dann había partido. Erina se desplomó sobre el cuerpo de su esposo, abrazándolo con desesperación, mientras su dolor y su angustia se desbordaban en un mar de lágrimas.</p>
           
            <p>Los hombres se recuperaron de la pelea, jadeando y limpiándose la sangre de sus rostros. El líder, con una mirada fría y despiadada, se acercó a Erina, que yacía en el suelo, llorando y suplicando piedad.</p>
            <p>"Ustedes pueden hacer lo que quieran con ella", dijo el líder, con una sonrisa cruel.</p>
            <p>Los hombres se rieron y se acercaron a Erina, que se retorcía de terror. <b>${mostrarNombrePersonaje()}</b> se escondió detrás de un sofá, mirando con horror cómo los hombres maltrataban y ultrajaban a su madre.</p>
            <p>Erina gritaba y suplicaba piedad, pero los hombres no se detuvieron. La golpearon y la humillaron, mientras que <b>${mostrarNombrePersonaje()}</b> se escondía, llorando y temblando de miedo.</p>
            <p>La escena era demasiado horrible para que <b>${mostrarNombrePersonaje()}</b> la soportara. Se tapó los ojos y se escondió aún más, intentando escapar de la realidad. Pero no podía escapar del sonido de los gritos de su madre y del ruido de los golpes que recibía.</p>
            
            <p>Unos minutos más tarde, el líder entró de nuevo en la casa, con una mirada fría y despiadada. Se acercó a Erina, que yacía en el suelo, sangrando y llorando de dolor.</p>
            <p>El líder sacó una pistola y apuntó a la cabeza de Erina. Disparó sin vacilar, y Erina se estremeció antes de quedar inmóvil. El líder se rió y se acercó a la cocina, donde colocó una bomba.</p>
            <p>Mientras tanto, los hombres salieron de la casa, sin mirar atrás. El líder se rió de nuevo y se dirigió hacia la puerta. Pero justo antes de salir, escuchó un ruido leve. Se detuvo y miró a su alrededor, intentando localizar el sonido.</p>
            <p>Fue entonces cuando vio al niño, <b>${mostrarNombrePersonaje()}</b>, escondido detrás de un sofá, mirándolo con ojos llenos de miedo y odio. El líder se rió de nuevo y se acercó al niño.</p>
            <p>Pero en lugar de hacerle daño, el líder simplemente sonrió y se inclinó hacia adelante. "Hasta luego, pequeño", dijo, antes de dar media vuelta y salir de la casa.</p>
            <p>El niño se quedó solo, rodeado de la destrucción y la muerte. La bomba colocada por el líder estaba a punto de explotar, y el niño no sabía qué hacer.</p>
            <p><b>${mostrarNombrePersonaje()}</b>salio de su escondite, con los ojos llenos del lagrimas y el corazón destrozado. Se acercó a sus padres, que yacían en el suelo, sin vida.
            La sangre de su padre manchaba elsuelo, y su madre parecía dormir, pero<b>${mostrarNombrePersonaje()}</b> él sabía que no se despertaría nunca más.</p>
            <p>Llorando y llamando a sus padres, <b>${mostrarNombrePersonaje()}</b> sintió un dolor inmenso que le atravesaba el pecho. Se arrodilló junto a su padre y lo abrazó, llorando desconsoladamente.</p>
            <p>Cerca del cuerpo de su padre, había un pequeño trozo de ropa que era de uno de los hombres que habían matado a sus padres. En ella, había un logo entrecortado que parecía una serpiente enrollada. <b>${mostrarNombrePersonaje()}</b> lo miró con odio y lo tomó con fuerza, apretándolo en su puño.</p>
            
            <p>Pero <b>mostrarNombrePersonaje()</b>no sabía que no podía hacer. Estaba solo, sin familia, sin amigos.
            <p>Desde afuera de la casa de los Rodriguez, unos minutos más tarde el lider de los hombres toma
            un teléfono y marca unos numeros en el, activando así la bomba. La casa de los Rodriguez exploto quedando en un infierno de fuego y humo.</p>            
            <p>El líder y su mafia se subieron a un auto negro y brillante, con las ventanas tintadas. El líder se sentó en el asiento del conductor, sonriendo con satisfacción mientras arrancaba el motor. Los otros hombres se sentaron en el asiento trasero, riendo y hablando entre sí mientras se alejaban de la casa de los Rodríguez.</p>
            <p>La calle estaba vacía y silenciosa, excepto por el sonido de las llamas que consumían la casa de los Rodríguez. </p>
            
            
            <button id="continuar-historia" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continuar</button>
        </div>
    `;

    const continuar = document.getElementById('continuar-historia');
    continuar.addEventListener('click', () => {
        mostrarPagina4();
        localStorage.setItem('pagina', '4');
    });
}

// Función para mostrar la cuarta página
function mostrarPagina4() {

    const caracteristicaPersonaje = localStorage.getItem('caracteristicaPersonaje');

    let descripcionPersonaje;

    switch (caracteristicaPersonaje) {
        case 'fuerte':
            descripcionPersonaje = `<p><b>${mostrarNombrePersonaje()}</b> había desarrollado una personalidad fuerte y decidida. Había aprendido a defenderse solo y a confiar en sus propias habilidades. Pero a pesar de su fortaleza, todavía sentía un vacío en su corazón, un vacío que solo podría ser llenado con la venganza.</p>`;
            break;
        case 'sigiloso':
            descripcionPersonaje = `<p><b>${mostrarNombrePersonaje()}</b> había desarrollado una personalidad sigilosa y temorosa. Había aprendido a mantener un perfil bajo y a evitar conflictos, pero a pesar de su cautela, todavía sentía un fuego interior que lo impulsaba a buscar justicia.</p>`;
            break;
        case 'despiadado':
            descripcionPersonaje = `<p><b>${mostrarNombrePersonaje()}</b> había desarrollado una personalidad despiadada y sangrienta. Había aprendido a no tener remordimientos ni compasión, y a hacer lo que fuera necesario para lograr sus objetivos. Pero a pesar de su dureza, todavía sentía un vacío en su corazón que solo podría ser llenado con la venganza.</p>`;
            break;
        case 'inteligente':
            descripcionPersonaje = `<p><b>${mostrarNombrePersonaje()}</b> había desarrollado una personalidad inteligente y audaz. Había aprendido a utilizar su astucia y su estrategia para superar obstáculos y alcanzar sus metas. Pero a pesar de su inteligencia, todavía sentía un deseo ardiente de justicia que lo impulsaba a seguir adelante.</p>`;
            break;
        default:
            descripcionPersonaje = `<p><b>${mostrarNombrePersonaje()}</b> había desarrollado una personalidad única y compleja. Había aprendido a adaptarse a las situaciones y a utilizar sus habilidades para superar obstáculos. Pero a pesar de su fortaleza, todavía sentía un vacío en su corazón que solo podría ser llenado con la venganza.</p>`;
            break;
    }

    //document.getElementById('descripcion-personaje').innerHTML = descripcionPersonaje;

    historia.innerHTML = `
        <nav id="navbar">
            <div id="pagina-numero">Página 4</div>
            <div id="libro-titulo">The Ascension of The Shadows</div>
            <button onclick="recargarPagina()">Salir</button>
        </nav>
        <div class="container mx-auto mt-4 p-4 pt-6 md:p-6 lg:p-12 xl:p-24 bg-white bg-opacity-50 rounded shadow-md">
            <h2>La Ascensión</h2>
            <p>Años después de la tragedia que le arrebató a sus padres, <b>${mostrarNombrePersonaje()}</b> había crecido en un entorno de orfanatos y casas de acogida. Había sido separado de todo lo que conocía y amaba, y se había visto obligado a adaptarse a una nueva realidad.</p>
            <p>En los orfanatos, <b>${mostrarNombrePersonaje()}</b> había encontrado una mezcla de solidaridad y crueldad. Algunos de los otros niños habían sido amables y comprensivos, pero otros habían sido crueles y despiadados. Los cuidadores habían sido, en su mayoría, impersonales y desinteresados, más preocupados por cumplir con sus deberes que por brindar amor y apoyo a los niños a su cargo.</p>
            <p>A pesar de la dureza de su vida, <b>${mostrarNombrePersonaje()}</b> había logrado mantener viva la llama de la venganza en su corazón. Había crecido con la sensación de que le habían arrebatado algo que le pertenecía, y que debía hacer algo para recuperarlo. La venganza se había convertido en su razón de ser, su motivación para seguir adelante en una vida que, de otro modo, habría sido vacía y sin propósito.</p>
            <p>Pero la venganza también había sido una carga pesada para <b>${mostrarNombrePersonaje()}</b>. Había pasado noches enteras despierto, pensando en los hombres que habían matado a sus padres, y planeando cómo podría hacerles pagar. Había sentido una rabia y una ira que no podía controlar, y que a veces lo habían llevado a cometer actos de violencia y destrucción.</p>
            <p>A pesar de todo, <b>${mostrarNombrePersonaje()}</b> había logrado mantener su determinación y su propósito. Sabía que la venganza no sería fácil, pero estaba dispuesto a hacer lo que fuera necesario para lograrla. Y ahora, con 20 años, estaba listo para comenzar su búsqueda de justicia.</p>
            ${descripcionPersonaje}
                        
            <p>Un día, mientras caminaba por las afueras de la ciudad con su perro, <b>${mostrarNombrePersonaje()}</b> descubrió un lugar abandonado que parecía haber sido olvidado por el tiempo. La casa era vieja y deteriorada, con ventanas rotas y una puerta que colgaba de sus goznes. El jardín estaba lleno de malezas y escombros, y un gran árbol seco se erguía en el centro del patio.</p>
            <p>Pero a pesar de la apariencia desolada del lugar, <b>${mostrarNombrePersonaje()}</b> vio algo en él que lo atraía. Tal vez fue la sensación de que el lugar había sido abandonado, pero no olvidado. O tal vez fue la idea de que él podría ser el que lo restaurara a su antigua gloria.</p>
            <p>Sea lo que sea, <b>${mostrarNombrePersonaje()}</b> se sintió atraído por el lugar, y se acercó a la casa con curiosidad. Su perro lo siguió, moviendo la cola con entusiasmo. Juntos, exploraron el lugar, descubriendo secretos y sorpresas en cada rincón.</p>
            <p>La casa parecía haber sido abandonada de repente, como si sus antiguos ocupantes hubieran salido una mañana y nunca hubieran regresado. Había objetos personales esparcidos por todas partes, como si la gente hubiera estado viviendo allí hasta el día anterior.</p>
            <p><b>${mostrarNombrePersonaje()}</b> se sintió como si estuviera caminando por un museo de la memoria, donde cada objeto y cada rincón contaban una historia. Y él estaba allí, en el centro de todo, listo para escribir su propia historia en ese lugar abandonado.</p>
            <p>Después de explorar la casa abandonada, <b>${mostrarNombrePersonaje()}</b> se dio cuenta de que había encontrado un lugar perfecto para comenzar su búsqueda de venganza. La casa estaba alejada de la ciudad y no había nadie cerca que pudiera interferir con sus planes.</p>

            <p>Pero antes de que <b>${mostrarNombrePersonaje()}</b> pudiera comenzar a planificar su próximo movimiento, se dio cuenta de que necesitaba reunir a su equipo. Había dos personas que había conocido en el orfanato que podrían ser de gran ayuda en su búsqueda de venganza.</b>
            <p>La primera persona era Alex, un amigo de la infancia del protagonista, con quien compartió momentos en el orfanato. Es un joven inteligente y astuto, con una gran habilidad para la tecnología y el hacking. Alex es una persona leal y confiable, siempre dispuesto a ayudar a sus amigos.</p>
            <p>Sin embargo, Alex también tiene sus debilidades. Puede ser un poco impulsivo y tomar decisiones sin pensar, lo que puede llevar a situaciones peligrosas. Además, no tiene experiencia en combate o situaciones de peligro, lo que puede ser un problema en la búsqueda de venganza del protagonista.</p>
            <p>Por otro lado, Maya es una joven que conoció al protagonista en uno de los orfanatos en los que estuvo. Es una persona intensa y apasionada, con una gran habilidad para las artes marciales y el combate. Maya tiene una personalidad más oscura y peligrosa que Alex, y puede ser más propensa a tomar decisiones riesgosas.</p>
            <p>Aunque Maya puede ser una aliada valiosa en la búsqueda de venganza del protagonista, también tiene sus riesgos. Su personalidad más oscura y peligrosa puede llevar a situaciones peligrosas y difíciles de controlar. Además, su tendencia a tomar decisiones riesgosas puede poner en peligro la seguridad del protagonista y de sus seres queridos.</p>
            <p>Ahora, <b>${mostrarNombrePersonaje()}</b> se enfrenta a una decisión difícil. ¿A quién debería contactar primero, a Alex o a Maya?</p>
            <p>*<b>La suerte de tu destino está en tus manos. Cada decisión cuenta, toma tu tiempo y elige sabiamente.</b></p>

            
            <div id="eleccion-personaje">
                <button id="elegir-alex" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Elegir a Alex</button>
                <button id="elegir-maya" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Elegir a Maya</button>
            </div>
        </div>
    `;

    // eleccion
    const elegirAlex = document.getElementById('elegir-alex');
    elegirAlex.addEventListener('click', () => {
        import('./capitulo_2_ruta_alex.js').then(module => {
            module.mostrarCapitulo2RutaAlex();
            localStorage.setItem('pagina', '5');
            localStorage.setItem('ruta', 'alex');
            localStorage.setItem('puntoFinalBueno', 1);
            localStorage.setItem('puntoFinalMalo', 0);
            localStorage.setItem('puntoFinalSecreto', 0);
        });
    });

    const elegirMaya = document.getElementById('elegir-maya');
    elegirMaya.addEventListener('click', () => {
        import('./capitulo_2_ruta_maya.js').then(module => {
            module.mostrarCapitulo2RutaMaya();
            localStorage.setItem('pagina', '11');
            localStorage.setItem('ruta', 'maya');
            localStorage.setItem('puntoFinalBueno', 0);
            localStorage.setItem('puntoFinalMalo', 1);
            localStorage.setItem('puntoFinalSecreto', 0);
        });
    });
}