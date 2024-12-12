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

export function mostrarCapitulo3RutaCasso() {
    // Establece la nueva imagen de fondo
    fondo.style.backgroundImage = "url('images//fondo-capitulo-2.jpg')";

    console.log('eligiste a casso');
    // Lógica para mostrar la historia
    historia.innerHTML = `
    <p>Historia de Casso</p>
    `;
    const continuarButton = document.getElementById('continuar-historia');
    continuarButton.addEventListener('click', () => {
        mostrarParte2();
        localStorage.setItem('pagina', '17');
    });
}