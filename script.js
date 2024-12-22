// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el elemento <audio>
    const audioElement = document.querySelector("audio");

    // Configurar el volumen al 50%
    audioElement.volume = 0.5;

    // Función para iniciar la reproducción al hacer scroll
    const startMusicOnScroll = () => {
        // Reproducir la música
        audioElement.play().catch(error => {
            console.warn("No se pudo reproducir automáticamente. El usuario debe interactuar primero:", error);
        });

        // Remover el event listener después de que se inicie la reproducción
        window.removeEventListener("scroll", startMusicOnScroll);
    };

    // Agregar el event listener para el evento scroll
    window.addEventListener("scroll", startMusicOnScroll);
});
