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

export function mostrarCapitulo3RutaCapellini() {
    // Establece la nueva imagen de fondo
    fondo.style.backgroundImage = "url('images//fondo-capitulo-2.jpg')";

    console.log('eligiste a capellini');
    // Lógica para mostrar la historia
    historia.innerHTML = `
        <nav id="navbar">
            <div id="pagina-numero">Página 12</div>
            <div id="libro-titulo">The Ascension of The Shadows</div>
            <button onclick="recargarPagina()">Salir</button>
        </nav>
        <div class="container mx-auto mt-4 p-4 pt-6 md:p-6 lg:p-12 xl:p-24 bg-white bg-opacity-50 rounded shadow-md">
            <p>Historia de Capellini</p>
        </div>
    `;
    const continuarButton = document.getElementById('continuar-historia');
    continuarButton.addEventListener('click', () => {
        mostrarParte2();
        localStorage.setItem('pagina', '14');
    });
}