const startButton = document.getElementById('start');
const continuarButton = document.getElementById('continuar');
const menu = document.getElementById('menu');
const historia = document.getElementById('historia');

function mostrarNombrePersonaje() {
    const nombrePersonaje = localStorage.getItem('nombrePersonaje');
    return `<b>${nombrePersonaje}</b>`;
}

function recargarPagina() {
    window.location.reload();
}

export function mostrarCapitulo2RutaMaya() {
    // Establece la nueva imagen de fondo
    fondo.style.backgroundImage = "url('images//fondo-capitulo-2.jpg')";

    console.log('eligiste a maya');
    // Lógica para mostrar la historia de Alex
    historia.innerHTML = `
        <nav id="navbar">
            <div id="pagina-numero">Página 9</div>
            <div id="libro-titulo">The Ascension of The Shadows</div>
            <button onclick="recargarPagina()">Salir</button>
        </nav>

        <div class="container mx-auto mt-4 p-4 pt-6 md:p-6 lg:p-12 xl:p-24 bg-white bg-opacity-50 rounded shadow-md">
            <h2>La elección de Maya</h2>

            <p>El lugar abandonado parecía más un esqueleto de lo que alguna vez fue un hogar. Paredes desconchadas, vidrios rotos y un eco perpetuo de soledad que resonaba con cada paso. Nuestro protagonista estaba concentrado. Con su perro rondando curioso, empezó a ordenar el lugar, moviendo escombros y trazando en su mente cómo convertir este caos en su base de operaciones.</p>
            
            <p>Mientras caminaba hacia el lugar donde sabía que podría encontrar a Maya, nuestro protagonista repasaba en su mente los recuerdos compartidos. Maya había sido una presencia poderosa en su vida desde los días del orfanato. Siempre había sido alguien en quien podía confiar, pero también alguien cuya intensidad podía ser abrumadora. Si iba a construir un equipo, sabía que necesitaba fuerza tanto como inteligencia, y Maya era la personificación de ambas cosas.</p>
            <p>El callejón donde ella solía entrenar tenía un aire opresivo. Era un espacio estrecho y lleno de grafitis, con el sonido constante de metal chocando contra metal. El protagonista la encontró en plena acción: desarmando a un hombre dos veces su tamaño en una fracción de segundo, con movimientos fluidos y precisos. Sus puños y piernas eran un borrón de velocidad, y en el suelo yacían otros dos hombres jadeando de dolor.</p>
            <p>—Siempre dejando una buena primera impresión, ¿eh? —dijo el protagonista, apoyándose contra la pared con una ligera sonrisa.</p>
            <p>Maya se giró hacia él, su respiración apenas acelerada. Tenía el cabello recogido en una coleta alta, y sus ojos brillaban con intensidad.</p>
            <p>—¿Te has perdido o finalmente te has decidido a buscarme? —respondió, limpiándose el sudor de la frente con el dorso de la mano.</p>
            <p>—Vengo a ofrecerte algo —dijo ${mostrarNombrePersonaje()}, entrando al espacio.</p>
            <p>—¿Es trabajo? Porque, como ves, ya estoy ocupada —respondió, señalando con la cabeza a los hombres que aún intentaban levantarse del suelo.</p>
            <p>—Más que un trabajo, es una guerra —replicó ${mostrarNombrePersonaje()}, directo.</p>
            <p>Eso captó su atención. Maya se cruzó de brazos, inclinando ligeramente la cabeza con una mezcla de curiosidad y cautela.</p>
            <p>—Sigue hablando.</p>
            <p>El protagonista no perdió tiempo. Le explicó su plan: formar un equipo, enfrentarse a Capellini y recuperar Santos City de sus garras. Cuando terminó, Maya lo miró fijamente, evaluándolo, como si intentara determinar cuánto de su propuesta era locura y cuánto era determinación.</p>
            <p>—Así que necesitas músculo, ¿no? —dijo finalmente, con un tono burlón, pero su sonrisa era peligrosa</p>
            <p>—. ¿Qué te hace pensar que estoy interesada?</p>
            <p>—Porque sé quién eres, Maya. Sé lo que eres capaz de hacer, y sé que odias a esta ciudad tanto como yo. Esto no es solo por venganza, es por cambiar las reglas.</p>
            <p>Maya dejó escapar una risa breve, casi sin humor. Dio un paso hacia él, sus ojos clavados en los suyos.</p>
            <p>—No soy de las que siguen reglas, ni siquiera las mías. Pero te voy a decir algo: si entras en este juego conmigo, más vale que estés dispuesto a ensuciarte las manos. Porque yo no juego a lo seguro.</p>
            <p>${mostrarNombrePersonaje()} asintió lentamente. —No te estaría buscando si quisiera algo seguro.</p>
            <p>Ella lo miró por un largo momento, y luego una sonrisa se extendió por sus labios.</p>
            <p>—Bien, entonces estoy dentro. Pero que quede claro: si esto fracasa, no será mi culpa.</p>
            <p>Ambos compartieron una mirada de entendimiento antes de que Maya recogiera su chaqueta de cuero y la colocara sobre su hombro.</p>
            <p>—Ahora, dime, ¿dónde está este equipo que estás formando? Porque no voy a ser la única que ponga el cuerpo aquí.</p>
            <p>El protagonista soltó una risa breve y comenzó a caminar, con Maya siguiéndolo.</p>
            <p>—Primero necesitamos un plan. Luego el equipo. Pero con tu ayuda, esto será diferente.</p>

            <p>A varias cuadras de allí, las sirenas que rompían la calma de Santos City se apagaron al llegar al cuartel de policía. Dentro, en una sala de reuniones desgastada por años de uso, tres agentes se encontraban en una tensa discusión. En el centro de la mesa había un tablero lleno de fotografías, diagramas y notas conectadas con líneas rojas: todo giraba en torno a un nombre que dominaba la escena como una sombra amenazante: Capellini.</p>
            <p>Jeff, el líder de la brigada antidrogas, se apoyó en la mesa con ambas manos, mirando a sus compañeros con una mezcla de frustración y determinación. Era un hombre de mirada severa y cabello corto, siempre impecable, pero las ojeras bajo sus ojos traicionaban las largas noches que había pasado estudiando cada movimiento de la mafia.</p>
            <p>—Esto no puede seguir así —dijo Jeff, su voz cortante—. Capellini no solo controla el tráfico de drogas en esta ciudad, controla a la maldita ciudad.</p>
            <p>—¿Y qué sugieres, Jeff? —intervino Gabo, un hombre robusto y de tono relajado que equilibraba el temperamento explosivo de su líder—. Hemos estado siguiéndolos durante meses y cada vez que nos acercamos, se nos escapan como humo.</p>
            <p>Kathy, la tercera integrante, estaba sentada al fondo, con los brazos cruzados y una expresión pensativa. Era la más joven del equipo, pero su instinto era impecable. Miró a Jeff antes de hablar.</p>
            <p>—Tal vez no estamos buscando en el lugar correcto —dijo, con un tono que exigía atención.</p>
            <p>Jeff giró hacia ella, su mirada inquisitiva. —¿Qué quieres decir?</p>
            <p>Kathy señaló el tablero. —Siempre estamos tras las entregas, los puntos de venta, los movimientos grandes. ¿Y si esta vez pensamos más pequeño? Cada operación grande tiene un eslabón débil, alguien que no encaja o que sabe más de lo que debería.</p>
            <p>Jeff la miró fijamente por un momento, procesando sus palabras. Luego, asintió con un leve movimiento de cabeza.</p>
            <p>—Un eslabón débil... —repitió en voz baja, como si la idea estuviera tomando forma en su mente—. Si encontramos a esa persona, podríamos desmoronar todo el imperio de Capellini desde dentro.</p>
            <p>—Eso suena bien, pero también suena como algo que va a cabrearlos aún más —dijo Gabo, soltando un suspiro—. Y ya sabes lo que pasa cuando Capellini se siente acorralado.</p>
            <p>Jeff dio un golpe en la mesa con la palma abierta, haciendo que Gabo y Kathy se sobresaltaran.</p>
            <p>—No me importa cuánto los cabree. Es nuestro trabajo, y no pienso quedarme sentado mientras esta ciudad se hunde más en la corrupción. Si eso significa arriesgarnos, que así sea.</p>
            <p>En ese momento, la puerta de la sala se abrió de golpe. Un agente joven y visiblemente nervioso entró con un sobre en la mano.</p>
            <p>—Señor, acaba de llegar esto —dijo, entregándoselo a Jeff.</p>
            <p>Jeff tomó el sobre y lo abrió con cuidado. Dentro había una nota escrita a mano. Sus ojos se entrecerraron al leerla, y su mandíbula se tensó.</p>
            <p>—¿Qué dice? —preguntó Kathy, inquieta.</p>
            <p>Jeff levantó la vista, su expresión ahora más oscura que nunca.</p>
            <p>—Dice: “Sabemos que están detrás de nosotros. Están jugando con fuego. Nos vemos pronto”.</p>
            <p>El silencio llenó la sala como un peso insoportable. Gabo dejó escapar un silbido bajo, mientras Kathy se inclinaba hacia adelante, tratando de leer la nota por encima del hombro de Jeff.</p>
            <p>—Entonces, están listos para el juego —murmuró Jeff, arrugando el papel entre sus dedos—. Bien. Nosotros también lo estamos.</p>
            
            <button id="continuar-historia" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continuar</button>
        </div>
    `;
    const continuarButton = document.getElementById('continuar-historia');
    continuarButton.addEventListener('click', () => {
        mostrarParte2();
        localStorage.setItem('pagina', '6');
    });
}


// Función para mostrar la parte 2
function mostrarParte2() {
    historia.innerHTML = `
        <nav id="navbar">
            <div id="pagina-numero">Página 10</div>
            <div id="libro-titulo">The Ascension of The Shadows</div>
            <button onclick="recargarPagina()">Salir</button>
        </nav>
        <div class="container mx-auto mt-4 p-4 pt-6 md:p-6 lg:p-12 xl:p-24 bg-white bg-opacity-50 rounded shadow-md">
            <h2>La Redada</h2>

            <p>El edificio era una ruina convertida en un nido de actividad criminal. Cuando las puertas se abrieron de golpe, las luces rojas y azules de los patrulleros pintaron las paredes descuidadas.</p>
            <p>—¡Policía! ¡Manos arriba! —gritaron los agentes mientras irrumpían en el lugar.</p>
            <p>La escena estalló en caos. Personas corrían en todas direcciones, derribando mesas y volcando cajas en su desesperación por escapar. Algunos intentaron resistirse, pero los golpes precisos de las porras y las miradas amenazantes de las armas levantadas los convencieron rápidamente de rendirse.</p>
            <p>En el centro del desorden estaba Jeff, con su chaqueta desgastada y su rostro inmutable. Dirigía a su equipo con precisión militar, su voz cortando el ruido como un cuchillo.</p>
            <p>—¡Gabo, revisa las habitaciones traseras! Kathy, asegúrate de que no haya salidas ocultas. ¡No quiero que nadie escape! —ordenó, con los dientes apretados.</p>
            <p>—Entendido —respondió Kathy, ya moviéndose ágilmente entre el caos, su linterna explorando cada rincón.</p>
            <p>—Esto parece un hormiguero, jefe —dijo Gabo mientras inmovilizaba a un hombre que intentaba trepar por una ventana—. Pero la reina no está aquí.</p>
            <p>Jeff apretó la mandíbula, mirando la mesa en el centro de la sala, llena de billetes y paquetes de droga sin procesar. No era lo que buscaban.</p>
            <p>—Capellini no va a cometer el error de mostrarse tan fácil. Pero tarde o temprano, lo vamos a atrapar —murmuró Jeff mientras arrugaba un billete en su mano.</p>
            <p>Mientras la redada continuaba, el equipo antidrogas sabía que esto no era más que un pequeño paso en una guerra mucho más grande.</p>

            <br>

            <p>En la casa abandonada, alejada del bullicio de las sirenas, Maya y ${mostrarNombrePersonaje()} estaban inclinados sobre una mesa improvisada, con un mapa de la ciudad extendido frente a ellos. Maya tamborileaba los dedos contra la madera, con una mirada fija en el mapa, como si pudiera verlo todo a través de él.</p>
            <p>—Mira, sé que estamos armando algo grande —dijo Maya, señalando un punto clave en el mapa—, pero hasta ahora, lo que tenemos es solo un montón de piezas dispersas. Si queremos ir contra Capellini, necesitamos a alguien que sepa jugar. No podemos seguir jugando al ajedrez cuando él está en el tablero como un toro.</p>
            <p>${mostrarNombrePersonaje()} asintió, trazando líneas con un marcador.</p>
            <p>—Lo sé. Y sé exactamente a quién necesitamos: Alex.</p>
            <p>Maya resopló, dejando escapar una risa burlona mientras rodaba los ojos.</p>
            <p>—¿Alex? ¿El genio de la computadora? Porque nada dice "plan imbatible" como reclutar a alguien que pasa más tiempo frente a una pantalla que en el campo de batalla.</p>
            <p>${mostrarNombrePersonaje()} la miró con una leve sonrisa, sabiendo lo que estaba a punto de decir.</p>
            <p>—Bueno, la ultima vez le rompiste la nariz, no creo que se alegre de verte.</p>
            <p>Maya frunció el ceño, recordando la última vez que las cosas no terminaron bien entre ellos.</p>
            <p>—¡Eso fue un accidente! —respondió con un tono serio, aunque aún ligeramente sarcástico—. Además, la última vez que lo vi, estaba revisando mis redes sociales, parecia un acosador.</p>
            <p>${mostrarNombrePersonaje()} rio.</p>
            <p>—Bueno, Alex solo estaba revisando una foto en la que salíamos nosotros, no le diste tiempo de explicarse.</p>
            <p>Maya suspiró, cruzando los brazos, con una expresión que mezclaba cansancio y resignación.</p>
            <p>—Eso ya lo sé. Pero de todos modos, si lo vamos a reclutar, mejor que traiga algo más que solo su habilidad para hackear. Este tipo de juego no es solo de computadoras.</p>
            <p>${mostrarNombrePersonaje()} asintió, la sonrisa desvaneciéndose mientras pensaba en lo que Maya acababa de decir. Necesitaban más que un cerebro, necesitaban a alguien que pudiera soportar la presión del juego sucio que Capellini estaba a punto de traer.</p>
            <p>—Lo sé. Y por eso lo vamos a buscar. Vamos a asegurarnos de que esta vez se involucre en algo más que en sus códigos.</p>

            <br>

            <p>El pequeño apartamento de Alex estaba repleto de cables y pantallas, el ambiente estaba cargado con la luz de las pantallas parpadeando como si la tecnología estuviera viva. En la esquina, un montón de latas vacías de refrescos y papeles dispersos indicaban el caos ordenado en el que Alex vivía.</p>
            <p>Allí estaba Alex, reclinado en su silla frente a una computadora, sus dedos moviéndose rápidamente sobre el teclado. Estaba tan concentrado que ni siquiera notó la entrada del protagonista y Maya.</p>
            <p>—¿Todo bien, genio? —preguntó Maya, con una sonrisa torcida, interrumpiendo su concentración.</p>
            <p>Alex levantó la vista, con cara de sorpresa. Cuando vio a Maya, dejó escapar un suspiro y sonrió.</p>
            <p>—Maya. No me digas que vienes a romperme la nariz otra vez.</p>
            <p>—No, hoy no —respondió Maya con tono divertido—. Pero sí vengo por algo más importante.</p>
            <p>${mostrarNombrePersonaje()} se acercó y colocó una mano en el hombro de Alex.</p>
            <p>—Tenemos un trabajo. Y necesitamos tus habilidades.</p>
            <p>Alex frunció el ceño, sospechando algo más grande que un simple encargo.</p>
            <p>—¿Un trabajo? ¿De qué estás hablando?</p>
            <p>—Vamos tras Capellini. Y necesitamos toda la ayuda posible.</p>
            <p>Alex se quedó en silencio por un momento, mirando a ${mostrarNombrePersonaje()} y luego a Maya. Finalmente, sonrió con una chispa de emoción.</p>
            <p>—¿Capellini? ¿Así que finalmente nos metemos en eso? Estaba esperando algo como esto. Pero no espero que ustedes dos me lleven al borde del abismo sin saber lo que estamos haciendo.</p>
            <p>—Maya lo miró con una expresión decidida.</p>
            <p>—No hay marcha atrás, hacker. Si entramos en esto, no podemos dar un paso atrás.</p>
            <p>—Exacto —respondió ${mostrarNombrePersonaje()}, con una mirada fija—. Es todo o nada.</p>
            <p>Alex levantó las manos, como si aceptara el desafío.</p>
            <p>—Bueno, ¿quién soy yo para decir que no? Pero asegúrense de que no sea solo un juego de niños. Necesito datos, y necesito saber que no vamos a estar jugando a la ruleta rusa.</p>
            <p>Maya lanzó una mirada desafiante hacia ${mostrarNombrePersonaje()}.</p>
            <p>—Él es el cerebro. Asegúrate de que todo funcione, porque yo no pienso fallar.</p>
            <p>Alex sonrió ante el comentario, mientras Maya lo miraba con una leve advertencia en los ojos.</p>
            <p>—Genial. Parece que la tormenta ya está en marcha.</p>
            <p>El protagonista asintió y, con la habitación sumida en la calma antes de la tormenta, la puerta se cerró con firmeza. El primer movimiento estaba en marcha, y las sombras de su misión empezaban a materializarse.</p>
            
            <br>

            <p>De vuelta en la base, la mesa improvisada estaba cubierta de mapas, papeles garabateados y un par de tazas de café frío. La luz tenue de una bombilla colgante iluminaba la habitación con un parpadeo intermitente, añadiendo una sensación de fragilidad al ambiente. Los tres estaban reunidos alrededor de la mesa: Alex con los codos apoyados, tamborileando los dedos en la madera; Maya, recostada en la silla con los brazos cruzados, y ${mostrarNombrePersonaje()}, inclinado sobre el mapa con una mirada fija, casi obsesiva.</p>
            <p>El silencio era pesado, solo interrumpido por el leve zumbido de la electricidad y el distante sonido de las gotas de lluvia golpeando el techo.</p>
            <p>Alex rompió el silencio, enderezándose de repente, como si acabara de tener una revelación.</p>
            <p>—Ya tengo el nombre. —Su voz cargaba un entusiasmo que pocas veces mostraba—. "Las Sombras". Porque nadie nos verá venir.</p>
            <p>Maya arqueó una ceja, dejando escapar una breve risa entre dientes.</p>
            <p>El perro ladro, como si le gustara el nombre.</p>
            <p>—¿"Las Sombras"? Suena como el nombre de un grupo de teatro de secundaria, dijo Maya.</p>
            <p>—¿Ah, sí? —respondió Alex, fingiendo indignación mientras se inclinaba hacia ella—. ¿Y cuál es tu brillante sugerencia, oh maestra del sarcasmo?</p>
            <p>Maya levantó las manos, sonriendo con suficiencia.</p>
            <p>—Tranquilo, hacker. No dije que fuera malo. Es cursi, pero tiene algo. Algo... peligroso.</p>
            <p>${mostrarNombrePersonaje()}, que hasta ahora había permanecido en silencio, levantó la vista del mapa y miró a ambos. Sus ojos brillaban con una intensidad que hacía que sus palabras parecieran más definitivas, más pesadas.</p>
            <p>—"Las Sombras"... Es perfecto. Es lo que somos. Invisibles, impredecibles. Es el comienzo de algo grande.</p>
            <p>El peso de esa declaración cayó sobre la habitación como un martillo. Por un momento, ninguno de los tres habló. Era como si el aire se hubiera cargado de electricidad, el tipo de tensión que precede a una tormenta.</p>
            <p>La bombilla parpadeó otra vez, esta vez con más insistencia, arrojando sombras inquietas sobre las paredes. Alex y Maya intercambiaron miradas, un destello de complicidad en sus ojos. Aunque sus métodos y personalidades eran completamente opuestos, había un entendimiento tácito: estaban entrando en algo que los cambiaría para siempre.</p>
            <p>Maya rompió el silencio, esta vez en un tono más serio.</p>
            <p>—Si vamos a hacer esto, lo hacemos bien. Nada de improvisar, nada de errores. Una sombra no deja huellas.</p>
            <p>Alex sonrió, su habitual chispa de humor apareciendo incluso en momentos de gravedad.</p>
            <p>—Lo tomaré como un cumplido hacia mi brillantez técnica. Aunque tú, Maya, puedes ser tan ruidosa como una tormenta.</p>
            <p>Ella le lanzó una mirada fulminante que habría hecho retroceder a cualquiera, pero Alex simplemente levantó las manos en señal de rendición, sin perder su sonrisa.</p>
            <p>${mostrarNombrePersonaje()} intervino antes de que la conversación degenerara en un intercambio de puyas.</p>
            <p>—Esto no es solo un nombre. Es un símbolo. Representa lo que somos, lo que vamos a construir.</p>
            <p>Se inclinó hacia adelante, mirando a cada uno de ellos directamente a los ojos.</p>
            <p>—Nadie nos verá venir. Y cuando lo hagan, será demasiado tarde.</p>
            <p>La bombilla osciló levemente con un nuevo parpadeo, y luego la luz se estabilizó, como si incluso la casa abandonada entendiera la gravedad del momento.</p>
            <p>Maya se levantó de la silla y se acercó al mapa, sus dedos trazando suavemente las líneas que marcaban las rutas de tráfico de Capellini.</p>
            <p>—Entonces, "Las Sombras"... ¿Cuál es el primer movimiento? —preguntó, su voz baja pero cargada de determinación.</p>
            <p>Alex se inclinó hacia su computadora portátil, que descansaba en un rincón de la mesa. Abrió la pantalla y comenzó a teclear con rapidez.</p>
            <p>—Primero, necesitamos información. Yo puedo infiltrarme en su red, averiguar sus movimientos, sus puntos débiles. Luego... —miró a Maya con una sonrisa pícara—. Tú haces lo tuyo: causar caos.</p>
            <p>Maya no pudo evitar sonreír, pero su mirada estaba fija en ${mostrarNombrePersonaje()}.</p>
            <p>Los tres intercambiaron miradas, una mezcla de camaradería y desafío. Habían cruzado un umbral, y lo sabían. Ya no eran solo tres personas enfrentándose a un gigante; eran "Las Sombras", un equipo.</p>
            <p>La bombilla parpadeó una vez más antes de apagarse brevemente, sumiendo la habitación en la oscuridad. Solo entonces, en el silencio absoluto, el eco de esa última palabra pareció grabarse en las paredes como una promesa inquebrantable.</p>
            
            <button id="opcion-1" class="bg-green-500 text-white font-medium text-lg px-6 py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300 transition duration-300">
                continuar
            </button>

        </div>
    `;

    const continuarButton = document.getElementById('continuar-historia');
    continuarButton.addEventListener('click', () => {
        mostrarParte3();
        localStorage.setItem('pagina', '7');
    });
}

// Función para mostrar la parte 3
function mostrarParte3() {
    historia.innerHTML = `
        <nav id="navbar">
            <div id="pagina-numero">Página 11</div>
            <div id="libro-titulo">The Ascension of The Shadows</div>
            <button onclick="recargarPagina()">Salir</button>
        </nav>
        <div class="container mx-auto mt-4 p-4 pt-6 md:p-6 lg:p-12 xl:p-24 bg-white bg-opacity-50 rounded shadow-md">
           <h2>Convergencia</h2>
            <p>El despacho de Capellini estaba en completo silencio, sumido en la oscuridad de las sombras que se proyectaban por las ventanas cerradas. Solo el sonido bajo del viento y los ecos distantes de la ciudad se colaban en la habitación, como una amenaza de lo que estaba por venir. En el centro de la sala, el señor Capellini, un hombre cuya mirada helada cortaba como un cuchillo, se encontraba de pie frente a su mesa de roble. Su rostro, marcado por años de crueldad y poder, no mostraba emoción alguna.</p>
            <p>A su lado, Osvald, uno de sus líderes más despiadados, mantenía la postura rígida, esperando órdenes. El aire estaba cargado de tensión. Capellini no toleraba la debilidad, y Osvald sabía que un solo movimiento en falso podría significar su final.</p>
            <p>Capellini rompió el silencio con su voz grave y profunda, una voz que había comandado respeto y temor por toda la ciudad.</p>
            <p>—Tenemos una misión para ustedes —dijo, su tono bajo y penetrante—. Un centro del cartel de los hermanos Casso, donde tiene un acopio de drogas y armas está causando problemas cerca de nuestras zonas. Necesito que vayan allí y lo destruyan todo. No quiero que quede nada en pie. Todo debe desaparecer. Y Osvald... asegúrate de que no quede rastro de lo que hiciste.</p>
            <p>Osvald permaneció inmóvil frente a Capellini, su mirada fija y su postura desafiante. Sabía que el señor Capellini no toleraba debilidad, pero Osvald tampoco era alguien que se dejara intimidar fácilmente. A pesar de que respetaba la autoridad del líder, no se achicaba ante él.</p>
            <p>La relación entre ellos era más bien de conveniencia; Capellini necesitaba a alguien como Osvald, alguien con agallas y astucia, pero Osvald también entendía que el poder de Capellini podía ser más una carga que una ventaja si no se manejaba con cuidado.</p>
            <p>Cuando Capellini habló, su voz era baja, cargada de amenaza y poder.</p>
            <p>—Hazlo bien, y serás recompensado. Hazlo mal, y no verás la luz de otro día —dijo, con una sonrisa fría que no alcanzaba a llegar a sus ojos.</p>
            <p>Osvald no reaccionó, pero dentro de su mente, las palabras de Capellini resonaron como un recordatorio de lo que estaba en juego. A pesar de su exterior implacable, un escalofrío recorrió su espalda, un pequeño recordatorio de la misión pasada, la que involucraba la muerte de los padres del joven que aún no sabía que se convertiría en su peor enemigo.</p>
            <p>Justo en ese momento, un sonido irrumpió en la tensión de la sala. El hijo de Capellini, un joven de actitud arrogante y sonrisa socarrona, irrumpió en el despacho, como si ya estuviera acostumbrado a entrar sin ser invitado. No tenía el peso de su padre, pero sí una lengua afilada y un humor negro que se sentía como una puñalada en el aire.</p>
            <p>—¿Qué pasa, viejo? —dijo el hijo de Capellini, sin preocuparse por las formalidades—. ¿Otra misión para el perro guardián?</p>
            <p>Osvald lo miró, su rostro sin cambiar. No era la primera vez que el hijo de Capellini hacía ese tipo de comentarios. Un tipo sin moral y sin filtro, que encontraba diversión en las desgracias ajenas.</p>
            <p>Capellini, aunque no mostraba simpatía por su hijo, no lo reprendió. Simplemente lo miró con desaprobación.</p>
            <p>—Cállate, hijo —dijo sin emoción, antes de volver a centrar su atención en Osvald—. Te dije que esto no es negociable. La misión es clara: destruir ese centro de drogas y borrar todo rastro de lo que hicimos. Nadie puede saber que fuimos nosotros.</p>
            <p>El hijo de Capellini soltó una carcajada, acercándose a la mesa y observando los papeles que Osvald había colocado sobre ella.</p>
            <p>—¿Estás seguro de que no quieres que dejemos un mensaje más grande? —bromeó el hijo, sacando una pistola de su chaqueta y girándola entre sus dedos. — ¿Qué tal si dejamos un par de cadáveres con los nombres de los que nos deben, ya sabes, como una especie de recordatorio? Me encanta hacer... "arte".</p>
            <p>Osvald lo miró sin inmutarse, pero por dentro se preguntaba hasta qué punto el hijo de Capellini comprendería la gravedad de lo que estaban haciendo.</p>
            <p>—Mantén esa lengua afilada para otro momento —dijo Osvald, y por primera vez en mucho tiempo, su tono denotó algo más que indiferencia. En sus ojos brilló un destello de amenaza, como si supiera exactamente hasta dónde podía llegar el hijo de Capellini sin cruzar la línea.</p>
            <p>El joven Capellini no replicó, pero su mirada desafiante no desapareció. La tensión entre ellos creció, pero finalmente, el hijo de Capellini dio media vuelta y salió de la sala, dejando a los dos hombres con la misión sobre la mesa.</p>
            <p>Los hombres de Capellini asintieron en silencio, listos para cumplir con la misión. Osvald caminó hacia la salida, su sombra alargándose en la oscuridad del pasillo, sabiendo que esa sombra lo perseguiría hasta el final.</p>

            <br>

            <p>La casa abandonada, ahora convertida en el cuartel de Las Sombras. A pesar de su aspecto deteriorado, había un aire de determinación en el ambiente. El perro de ${mostrarNombrePersonaje()} corría de un lado a otro, saltando y ladrando con una energía que parecía comprender la magnitud de lo que estaba en juego. El sonido de sus patas golpeando el suelo resonaba por la casa vacía, pero nadie le prestaba mucha atención. La reunión estaba en marcha.</p>
            <p>En el centro de la sala, alrededor de una mesa improvisada llena de papeles, mapas y algunos objetos dispersos, Alex estaba completamente concentrado. Su mente trabajaba a toda velocidad, intentando encontrar el primer paso para poner en marcha el plan. Estaba buscando el lugar adecuado, el punto de inicio donde Las Sombras podían comenzar a construir su poder. Sin apartar la vista del mapa de la ciudad, comenzó a hablar.</p>
            <p>—Primero, necesitamos encontrar a alguien que nos ayude a conseguir los autos —dijo, señalando un par de puntos en el mapa—. Necesitamos vehículos rápidos, algo que no llame la atención, pero que sea funcional. Además, nos serán útiles para huir cuando robemos las drogas del cartel de la zona este.</p>
            <p>El grupo sabía que robarle a un cartel no iba a ser fácil. No solo se trataba de destruir un centro de operaciones, como les había encargado Capellini, sino que el objetivo era más grande: apoderarse de un cargamento de drogas que se encontraba bajo la vigilancia de uno de los carteles más temidos en Santos City. La operación necesitaba precisión, y los autos eran el primer paso para asegurarse de que no hubiera sorpresas..</p>
            <p>Maya, que había estado observando en silencio hasta ese momento, sonrió con suficiencia. Tenía la calma de quien ya ha jugado esta partida antes.</p>
            <p>—Ya tengo a alguien en mente —dijo, señalando la esquina de la habitación, donde el perro había dejado de saltar y ahora mordía uno de los zapatos de Alex—. Un mecánico que conozco. Él puede conseguirnos los autos y algunas armas. Es... confiable.</p>
            <p>Alex levantó la vista del mapa, un poco sorprendido por la seguridad en la voz de Maya.</p>
            <p>—¿Confiable? —preguntó, escéptico—. ¿Cómo sabes que podemos confiar en él? No podemos arriesgarnos a que alguien nos traicione.</p>
            <p>Maya no dudó ni un segundo.</p>
            <p>—Lo conozco desde hace años. Me ha ayudado antes. Y... —hizo una pausa antes de sonreír—. No le gusta meterse en problemas, pero si le haces una oferta que no puede rechazar, te consigue lo que quieras.</p>
            <p>${mostrarNombrePersonaje()}, se levantó de su asiento, mirando fijamente el mapa.</p>
            <p>—Genial —dijo, con una mirada decidida, como si ya pudiera ver la operación desarrollándose en su mente—. Vamos a ir a buscarlo.</p>
            <p>Antes de que pudieran reaccionar, el perro dio un salto y corrió hacia la mesa, derrapando por el suelo. Con la misma alegría que lo caracterizaba, saltó encima de los papeles de Alex, dejando caer un cuaderno lleno de planes y notas que habían estado revisando. Maya estalló en carcajadas al ver a Alex luchar por recuperar los papeles mientras el perro, feliz de su travesura, se escapaba hacia una esquina.</p>
            <p>—¡Maldito perro! —se quejó Alex, tratando de sujetar el cuaderno mientras el perro corría alrededor de Maya, como si supiera que todo ese alboroto era culpa suya.</p>
            <p>La escena se tornó cómica por un momento, pero la seriedad volvió a llenar el aire rápidamente. Aunque el perro causara caos, todos sabían que la misión seguía siendo lo más importante. El protagonismo de las risas pasó y la tensión volvió a la sala.</p>
            <p>Alex guardó el cuaderno, asegurándose de que no hubiera más interrupciones, y todos se dirigieron camino en busqueda del nuevo integrante.</p>

            <br>

            <p>El taller de Nike era un lugar rudo, con paredes cubiertas de grasa y herramientas esparcidas por doquier. El aire olía a gasolina y metal, y el sonido de un motor rugiendo llenaba el espacio, creando una atmósfera caótica pero organizada, como el propio Nike. Su taller reflejaba la personalidad de su dueño: un lugar que se manejaba con precisión, aunque rodeado de un desorden controlado.</p>
            <p>Cuando el grupo de Las Sombras entró, el mecánico levantó la vista desde debajo de un coche, donde estaba trabajando con precisión. Era un hombre flaco, con la mirada cautelosa de alguien que ha visto y hecho cosas que no se cuentan fácilmente. La barba que cubría su rostro apenas ocultaba su expresión tranquila, casi tímida, pero los ojos, atentos a todo lo que sucedía a su alrededor, traicionaban una astucia que pocos podían igualar.</p>
            <p>—Hola, ¿en que les puedo ayudar? —saludó Nike, su voz grave resonando sobre el ruido del taller. Con una leve sonrisa en los labios, dejó la llave inglesa sobre el banco de trabajo y se acercó al grupo.</p>
            <p>Maya, al verlo, mostró una ligera sorpresa que rápidamente disimuló, pero su expresión delató que lo conocía. Se acercó un paso más y, con voz firme, se presentó.</p>
            <p>—Hola Nike, Soy Maya —dijo, manteniendo la mirada fija en Nike.</p>
            <p>Nike frunció el ceño por un segundo y luego soltó una risa baja, reconociendo su rostro.</p>
            <p>—¿Maya? —dijo con una mezcla de sorpresa y desconfianza—. No te esperaba por aquí.</p>
            <p>Alex, al escuchar el nombre, no pudo evitar soltar una carcajada.</p>
            <p>—¿En serio? Maya… ¿como la marca de zapatillas? —dijo, con tono burlón.</p>
            <p>${mostrarNombrePersonaje()} también se unió en la broma, riendo junto a Alex.</p>
            <p>—¡Parece que la tenemos a la Nike de las mafias! —comentó, sin poder evitar un toque de humor en su voz.</p>
            <p>Maya los miró, arqueando una ceja, y sin perder la compostura, lanzó una mirada desafiante a ambos.</p>
            <p>—Ríanse todo lo que quieran, pero no olviden quién conoce a quién aquí. —Se giró hacia Nike y continuó con una sonrisa algo más tensa—. Nos conocemos de hace un tiempo. Hace unos años, durante un trabajo... digamos que te ayudé a salir de un pequeño lío con unos tipos que no sabían cómo manejar un buen robo. ¿Recuerdas?</p>
            <p>Nike la observó por un momento, recordando aquella situación en la que Maya había jugado un papel crucial. La tensión se disipó un poco, pero no se relajó por completo.</p>
            <p>—¿Y qué quieres ahora? —preguntó, cruzando los brazos.</p>
            <p>El perro de ${mostrarNombrePersonaje()}, que había estado correteando por el taller, se acercó de repente a Nike, moviendo la cola con entusiasmo. Sin pensarlo, Nike se agachó para acariciarlo, el perro saltó a su lado como si lo conociera de toda la vida.</p>
            <p>—Parece que ya tienes un nuevo amigo —comentó Maya, con una ligera sonrisa.</p>
            <p>—Me gustan los perros —respondió Nike, mientras continuaba acariciando al perro.</p>
            <p>Maya, tomando aire, decidió ir directo al grano.</p>
            <p>—Necesitamos que nos consigas dos autos y algunas armas. Estamos empezando una... empresa, y queremos tu ayuda para conseguir los recursos que necesitamos.</p>
            <p>Nike la miró fijamente, su expresión se tornó seria y distante.</p>
            <p>—Ya no hago ese tipo de trabajo —dijo, con una firmeza que resonó en sus palabras—. Es peligroso y no quiero involucrarme más en esos líos.</p>
            <p>Maya, al escuchar la negativa, trató de suavizar la situación.</p>
            <p>—Vamos, Nike, sabes que eres el mejor en esto —dijo con una sonrisa, aunque su tono mostraba que estaba evaluando la situación—. Y nadie más puede conseguirnos lo que necesitamos sin levantar sospechas en toda la ciudad.</p>
            <p>Nike no pareció convencido, y su mirada se desvió hacia el perro que todavía lo miraba con cariño.</p>
            <p>${mostrarNombrePersonaje()}, recordando las palabras de Maya sobre los detalles técnicos que podrían interesarle, intervino:</p>
            <p>—Lo que necesitamos son dos autos deportivos, de alto rendimiento. Uno debe tener tracción en las cuatro ruedas y suspensión reforzada para operaciones rápidas. El otro debe ser discreto, pero con capacidad para maniobras agresivas. Lo que nos importa es velocidad y capacidad de reacción.</p>
            <p>Nike levantó una ceja, claramente interesado por la precisión de la descripción.</p>
            <p>—¿De verdad sabes de lo que hablas? —preguntó, algo sorprendido. La forma en que el protagonista mencionó las especificaciones hizo que su atención se centrara en él.</p>
            <p>El protagonista asintió, explicando más detalles técnicos sobre las modificaciones que necesitaban en los autos. A medida que hablaba, Nike se fue acercando más, escuchando con atención y, por primera vez, mostrando un ligero interés en la propuesta.</p>
            <p>—Podría conseguirte esos autos... —dijo finalmente, mirando al grupo con una mezcla de incredulidad y diversión—. Pero, ¿qué me asegura que no terminaré en otro lío con la policía o con gente que no puedo manejar?</p>
            <p>Maya, viendo que Nike finalmente estaba tomando en cuenta la propuesta, lo miró con determinación.</p>
            <p>—Lo que te aseguro es que si te metes en esto, no será como las veces anteriores. Esta vez tenemos un plan. Y sabes que si trabajas con nosotros, nada será como antes.</p>
            <p>Después de un momento de reflexión, Nike asintió con resignación.</p>
            <p>—Está bien —dijo finalmente, rascándose la barba—. Conseguiré lo que necesitan. Pero no me pongan en más problemas de los que ya tengo.</p>
            <p>Con el trato sellado, Nike volvió a su trabajo, sin perder el ritmo mientras el grupo de Las Sombras se preparaba para dar su primer paso en la misión.</p>
                                    
                                   
            <button id="opcion-1" class="bg-green-500 text-white font-medium text-lg px-6 py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300 transition duration-300">
                continuar
            </button>

        </div>
    `;

    const continuarButton = document.getElementById('continuar-historia');
    continuarButton.addEventListener('click', () => {
        mostrarParte4();
        localStorage.setItem('pagina', '8');
    });
}

// Función para mostrar la parte 2
function mostrarParte4() {
    historia.innerHTML = `
        <nav id="navbar">
            <div id="pagina-numero">Página 12</div>
            <div id="libro-titulo">The Ascension of The Shadows</div>
            <button onclick="recargarPagina()">Salir</button>
        </nav>
        <div class="container mx-auto mt-4 p-4 pt-6 md:p-6 lg:p-12 xl:p-24 bg-white bg-opacity-50 rounded shadow-md">
            <h2>Preparados</h2>
            <p>La ciudad estaba sumida en la oscuridad de la noche, pero Las Sombras se deslizaban con agilidad por las calles, el rugir de los motores de los autos resonando en las avenidas. Los dos vehículos, modificados por Nike, cortaban el viento como cuchillos afilados, y la adrenalina se disparaba en cada curva.</p>
            <p>${mostrarNombrePersonaje()}, al volante de uno de los autos, sentía cómo el asfalto bajo él se desvanecía rápidamente mientras zigzagueaba entre los coches estacionados. A su lado, Maya miraba hacia atrás, y en su rostro se reflejaba la determinación y el foco que la definían.</p>
            <p>—¡¡Están detrás de nosotros!! —gritó Alex, desde el asiento trasero, observando por la ventana cómo las luces de las patrullas se acercaban rápidamente.</p>
            <p>El sonido de las sirenas de la policía llenaba el aire, pero eso no detuvo a nuestros protagonistas. Sabían que esta persecución era solo el principio. Nike, con su aguda mente técnica, le dio un consejo a ${mostrarNombrePersonaje()} mientras mantenía la calma.</p>
            <p>—Recuerda, las calles estrechas son nuestras amigas. Mantén la calma y aprovecha las curvas. Si te encierras en esos callejones, perderán velocidad.</p>
            <p>${mostrarNombrePersonaje()} asentó con firmeza, aplicando el consejo mientras ejecutaba maniobras audaces. Las patrullas, incapaces de seguirlos a esa velocidad, se veían desbordadas por la habilidad de los conductores. En un giro brusco, el grupo se adentró en un laberinto de calles angostas, perdiendo a los policías de vista. El silencio tras la persecución fue momentáneamente tenso, pero pronto se disolvió en risas nerviosas. El perro, en el asiento trasero, ladró de emoción, como si entendiera que acababan de ganar la primera batalla.</p>
            <p>—¡Lo logramos! —exclamó el protagonista, sonriendo mientras los autos disminuían la velocidad y se detuvieron en un rincón aislado de la ciudad.</p>

            <br>

            <p>La tensión en la comisaría era palpable. Los policías, reunidos alrededor de la mesa de trabajo, discutían en voz baja mientras un testigo les narraba lo poco que había podido ver durante el robo.</p>
            <p>—Esos chicos… no parecían cualquier banda —dijo el testigo, nervioso, con la voz temblorosa—. Parecían organizados. Y uno de ellos… ¡el tipo del volante! Tenía los ojos llenos de furia. No eran unos simples ladrones.</p>
            <p>El jefe de policía, un hombre de rostro severo y mirada calculadora, se levantó de su silla y, con una voz grave, dio la orden.</p>
            <p>—Estos no son amateurs. Esto huele a algo más grande. Vamos a ir al lugar del robo. Alistence!!</p>
            <p>La escena en el lugar del robo de los autos estaba cargada de tensión. Las luces azules y rojas de las patrullas iluminaban el pavimento agrietado mientras los oficiales se movían rápidamente, recopilando evidencia. Jeff, un veterano de rostro cansado y marcado por años de servicio, se agachó para examinar unas marcas de neumáticos frescas que se extendían en un arco irregular. A su lado, Gabo, más joven y siempre buscando impresionar, tomaba notas frenéticamente en su libreta.</p>
            <p>—Son huellas de neumáticos deportivos —dijo Jeff, pasando los dedos por el borde de una marca—. Estos no son autos comunes. Están modificados.</p>
            <p>Kathy, la única mujer del equipo y conocida por su mirada aguda y atención a los detalles, se acercó sosteniendo un pequeño objeto que acababa de recoger del suelo.</p>
            <p>—Encontré esto cerca de las marcas de frenado —dijo, mostrando un fragmento de pintura metálica desgastada—. Parece que los autos chocaron ligeramente al salir.</p>
            <p>Jeff asintió, sus ojos estudiando el área con precisión.</p>
            <p>—Hicieron esto rápido, pero no perfecto. Probablemente estaban apurados, o incluso nerviosos. —Se levantó lentamente, mirando a Gabo—. ¿Qué tenemos de los testigos?</p>
            <p>Gabo revisó su libreta y señaló hacia un hombre nervioso que estaba siendo interrogado cerca de una patrulla.</p>
            <p>—Dijo que vio a cuatro personas. Un hombre al volante de uno de los autos, que parecia ser el lider, que iba con otro hombre que hablaba mucho, en el otro auto una chica conducia y un hombre la acompañaba. No pudo ver mucho más, ah... y... un perro.</p>
            <p>Jeff soltó un suspiro pesado mientras se pasaba una mano por el rostro.</p>
            <p>—¿Un perro? ¿Qué clase de criminal lleva un perro a un robo de autos? —murmuró con incredulidad, aunque su tono no ocultaba la frustración.</p>
            <p>—Los testigos también mencionaron que parecían jóvenes, pero organizados. —Kathy lo interrumpió con tono firme—. Esto no es el trabajo de alguna banda que conoscamos</p>
            <p>—Jovenes o no, han cruzado una línea. Están jugando un juego peligroso esos muchachos, al parecer no tiene que ver con Capellini, pero de todos modos, los atraparemos, y no pienso dejar que tomen ventaja. —Se volvió hacia el equipo, su tono grave y autoritario—. Gabo, Kathy, asegúrense de que este caso no quede como otro robo de autos cualquiera. Investiguemos cada pista, cada testimonio. No quiero sorpresas.</p>
            <p>—Si, Señor, asintieron Ambos.</p>
            
            <br>

            <p>En una fábrica escondida en las afueras de Santos City, el cartel de los hermanos Casso operaba con precisión y eficiencia. El lugar, una vieja bodega oxidada y semiabandonada por fuera, era en realidad un centro de producción de heroína altamente equipado. En su interior, un grupo de hombres trabajaba en silencio, mezclando, empacando y preparando la mercancía. Cada movimiento estaba calculado, y los hermanos Casso, conocidos por su crueldad y ambición desmedida, supervisaban cada paso del proceso.</p>
            <p>Marco Casso, el mayor de los hermanos, era un hombre fornido y brutal, con una cicatriz que le cruzaba el rostro como un recordatorio de las traiciones de su pasado. Su presencia imponía respeto y miedo entre sus hombres. Mientras tanto, Luca Casso, más joven pero igual de despiadado, prefería mantenerse en las sombras, organizando la logística y asegurándose de que los negocios marcharan sin problemas.</p>
            <p>—La próxima entrega será nuestra más grande —dijo Marco, mientras observaba los paquetes apilados en una mesa—. La demanda está creciendo, y con esto podremos consolidar nuestro territorio.</p>
            <p>—Siempre y cuando nadie intervenga —respondió Luca, con tono frío, revisando una lista en su tablet.</p>
            <p>Por la parte trasera de la fábrica, un grupo de hombres avanzaba en silencio, cubiertos por las sombras. Eran los hombres de Capellini, liderados por Osvald, su mejor ejecutor. Equipados con armas silenciadas y moviéndose con precisión militar, sabían que no podían fallar. Esta no era solo una incursión; era un mensaje.</p>
            <p>Osvald levantó una mano para detener al grupo. Frente a ellos había un guardia del cartel, fumando despreocupado en la entrada trasera. En un movimiento rápido y letal, uno de los hombres de Capellini lo neutralizó con un cuchillo, arrastrando el cuerpo hacia las sombras antes de que alguien notara su ausencia.</p>
            <p>—Silencio. Nadie dispara hasta que sea necesario —ordenó Osvald, con un susurro que cortó el aire como una cuchilla.</p>
            <p>El grupo continuó avanzando, eliminando a los guardias uno por uno. Entraron en la fábrica como fantasmas, cada paso calculado, cada disparo silenciado encontrando su objetivo.</p>
            <p>Dentro de la fábrica, los trabajadores del cartel no tuvieron tiempo de reaccionar. Uno de los hombres de Capellini cortó la electricidad, sumiendo el lugar en penumbra. Los Casso y sus hombres intentaron reorganizarse, pero los intrusos ya estaban entre ellos.</p>
            <p>—¿Qué demonios está pasando? —gritó Marco, agarrando un arma y mirando alrededor, intentando ver a través de la oscuridad.</p>
            <p>Luca, más calculador, encendió la linterna de su teléfono, iluminando brevemente una figura que se movía entre las sombras antes de que una bala silenciada lo alcanzara en el pecho. Cayó al suelo, jadeando mientras la vida se le escapaba.</p>
            
            <br>
            
            <p>Mientras la masacre continuaba en el centro de producción de heroína, Las Sombras se acercaron sigilosamente por un costado de la bodega. ${mostrarNombrePersonaje()} lideraba el grupo, con Maya siguiendo de cerca y Alex cerrando la marcha, cada uno armado con herramientas improvisadas y un plan que pendía de un hilo. Habían dejado al perro junto a Nike en uno de los autos, el motor en marcha por si necesitaban una retirada rápida.</p>
            <p>—No veo a nadie ¿Creen que habran salido? —preguntó Alex en un susurro, revisando su mochila para asegurarse de que llevaba todo.</p>
            <p>${mostrarNombrePersonaje()}, con los dientes apretados, cree que es extraño, caminaron sigilosamente para luego colarse por una ventana rota en el costado de la bodega. Dentro, el aire era denso, cargado del olor metálico de las drogas en proceso y el eco de voces lejanas.</p>
            <p>El grupo avanzó con cuidado, moviéndose entre los pasillos llenos de estantes repletos de químicos y cajas marcadas con los emblemas del cartel de los hermanos Casso. Alex no tardó en encontrar una pequeña caja con armas de fuego.</p>
            <p>—Aquí hay algo útil —dijo, levantando una pistola y algunos cartuchos.</p>
            <p>—Busca las bolsas de droga —ordenó Maya mientras metía un cuchillo en su cinturón—. Y recuerda, necesitamos suficiente para comenzar a distribuir.</p>
            <p>${mostrarNombrePersonaje()} se quedó vigilando la entrada trasera de la sala mientras Alex y Maya trabajaban con rapidez, revisando cajas y maletines. Mientras lo hacían, discutían sobre los autos.</p>
            <p>—Nike puede modifico los compartimientos traseros de los autos para ocultar la droga —comentó Alex, respirando con dificultad mientras levantaba una bolsa de polvo blanco.</p>
            <p>—Claro, porque nadie va a sospechar de un mecánico llamado Nike que trabaja en un auto que parece salido de una película de acción —replicó Maya con una sonrisa irónica, aunque su mirada seguía concentrada.</p>
            <p>${mostrarNombrePersonaje()} no respondió. Estaba demasiado ocupado observando el entorno, con una sensación extraña en el pecho, como si algo estuviera por suceder.</p>
            <p>—Apresuremosnos, algo no esta bién.</p>
            <p>Justo cuando estaban cargando las armas y las drogas en una bolsa, un ruido ensordecedor llenó el aire. Era el sonido de disparos, pero esta vez más cercano. Las luces parpadeaban, y el eco de gritos y órdenes resonaba entre las paredes de la bodega.</p>
            <p>—¡Nos están rodeando! —exclamó Maya, alzando la vista.</p>
            <p>Alex corrió hacia la puerta por la que habían entrado, pero cuando intentó abrirla, esta estaba bloqueada. Alguien la había asegurado desde fuera.</p>
            <p>—¡Estamos atrapados! —gritó Alex, su voz cargada de pánico.</p>
            <p>${mostrarNombrePersonaje()} miró a su alrededor, tratando de encontrar una salida, pero lo único que veía era caos. Fue entonces cuando lo vio: un hombre alto y de complexión robusta, caminando con calma en medio del caos. Era Osvald. Aunque los años lo habían cambiado, sus ojos seguían siendo los mismos, fríos y vacíos, como los recordaba. La sangre en sus manos y el eco de sus palabras aún estaban frescos en la memoria de ${mostrarNombrePersonaje()}.</p>
            <p>El tiempo pareció detenerse. Todo lo demás —los disparos, los gritos, el rugir de los motores al fondo— desapareció en un instante. Era él. El hombre que había arrebatado a sus padres.</p>
            <p>Osvald giró ligeramente la cabeza, como si sintiera la mirada de ${mostrarNombrePersonaje()} sobre él. Sus ojos se encontraron, y el asesino, sin saber quién era ese joven que lo miraba con tanto odio, frunció el ceño.</p>
            <p>Pero para ${mostrarNombrePersonaje()}, ese momento era todo. Los recuerdos de aquella noche, el miedo, la pérdida, la rabia... todo se fundió en un torrente de emociones que lo dejaron inmóvil, como si su cuerpo no pudiera decidir si atacar o retroceder.</p>
            <p>—¡Tenemos que salir de aquí! —gritó Maya, agarrándolo del brazo y sacándolo de su trance.</p>
            <p>—Es... él —murmuró ${mostrarNombrePersonaje()}, pero antes de que pudiera decir algo más, una bala pasó rozando su cabeza, recordándole que ese no era el momento para venganzas personales. No aún.</p>
            <p>La tensión en la bodega era palpable. Las balas seguían volando, rebotando contra las paredes de metal y enviando chispas al aire. ${mostrarNombrePersonaje()}, aún con el corazón acelerado por haber visto a Osvald, trataba de recuperar la concentración mientras Maya revisaba las posibles salidas.</p>
            <p>—¡No hay forma de desbloquear la puerta! —gritó Alex desde el costado, forcejeando inútilmente con la entrada por donde habían entrado.</p>
            <p>Maya, agachada detrás de una pila de cajas, escaneaba el lugar con rapidez. Respiraba con dificultad, pero su mente seguía trabajando como un reloj. Finalmente, señaló dos direcciones:</p>
            <p>—Escuchen, tenemos dos opciones —dijo, su voz firme pero apurada—. Si salimos por la izquierda, llegaremos al grupo de Capellini. Son más organizados, pero también más despiadados. Si nos ven, no dudarán en disparar.</p>
            <p>Hizo una pausa, señalando la derecha.</p>
            <p>—Por el otro lado están los hombres del cartel de los Casso. Están descontrolados, pero son impredecibles. Pueden atacarnos sin pensarlo dos veces... o no. Es un volado.</p>
            <p>—No importa a dónde vayamos, estaremos en el centro del fuego —dijo Alex—. Pero si Capellini nos atrapa... no hay forma de que salgamos con vida.</p>
            <p>El protagonista observó ambas salidas, su mirada fija pero distante. Las palabras de Maya parecían resonar en un eco, como si el peso de la decisión estuviera destinado a recaer únicamente en él. Osvald seguía en su mente, su figura grabada como una sombra imposible de ignorar. Si iban hacia la mafia de Capellini, podría enfrentarlo cara a cara... pero el riesgo de que todo terminara allí mismo era demasiado alto.</p>
            <p>Maya lo miró directamente, con esa mirada decidida que siempre parecía estar un paso por delante.</p>
            <p>—Tú decides ${mostrarNombrePersonaje()}. Pero hazlo rápido.</p>
            <p>El perro ladró desde el auto al otro lado de la bodega, como si también sintiera la urgencia de la situación, Nike a su lado, sintio todo y trataba de acercarse con cuidado.</p>
            <p>Las balas seguían cayendo como una tormenta de metal, y el tiempo se estaba agotando. Alex apretaba los puños, esperando una orden. Maya sostenía su cuchillo, lista para moverse en cualquier dirección. Todo dependía de ${mostrarNombrePersonaje()}.</p>
            <p>¿Salir por la izquierda y enfrentar a la mafia de Capellini, con el peligro de enfrentarse a Osvald directamente? ¿O arriesgarse con los hombres del cartel de los Casso, confiando en la posibilidad de que el caos les diera una oportunidad?</p>
            <p>Era una elección que definiría no solo la misión, sino el curso de su venganza.</p>
            
            
            <div id="eleccion-personaje">
                <button id="elegir-capellini" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ir por los Capellini</button>
                <button id="elegir-casso" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ir por los Casso</button>
            </div>

        </div>
    `;

    // eleccion
    const elegirCapellini = document.getElementById('elegir-capellini');
    elegirCapellini.addEventListener('click', () => {
        import('./capitulo_3_ruta_capellini.js').then(module => {
            module.mostrarCapitulo3RutaCapellini();
            localStorage.setItem('pagina', '13');
            localStorage.setItem('ruta', 'capellini');
            localStorage.setItem('puntoFinalBueno', 0);
            localStorage.setItem('puntoFinalMalo', 2);
            localStorage.setItem('puntoFinalSecreto', 0);
        });
    });

    const elegirCasso = document.getElementById('elegir-casso');
    elegirCasso.addEventListener('click', () => {
        import('./capitulo_3_ruta_casso.js').then(module => {
            module.mostrarCapitulo3RutaCasso();
            localStorage.setItem('pagina', '16');
            localStorage.setItem('ruta', 'casso');
            localStorage.setItem('puntoFinalBueno', 1);
            localStorage.setItem('puntoFinalMalo', 1);
            localStorage.setItem('puntoFinalSecreto', 0);
        });
    });
}