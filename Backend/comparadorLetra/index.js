let videoPlayer; // Variable para almacenar el reproductor de video

document.addEventListener("DOMContentLoaded", () => {
    const videoId = getVideoIdFromUrl();
    if (videoId) {
        embedYouTubePlayer(videoId);
    } else {
        // Manejar el caso en el que el ID del video no esté disponible
        // Puedes redirigir al usuario a una página de error
    }
});

function getVideoIdFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("videoId");
}

function embedYouTubePlayer(videoId) {
    // Código para incrustar el reproductor de video de YouTube con el videoId
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = `
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0"
            allowfullscreen
        ></iframe>
    `;

    // Obtener el reproductor de video
    videoPlayer = videoContainer.querySelector("iframe");

    // Esperar 1 minuto y verificar la letra
    setTimeout(checkLyrics, 60000); // 60000 ms = 1 minuto
}

function checkLyrics() {
    const lyricsInput = document.getElementById("lyrics-input").value;
    const correctLyrics = "Aquí va la letra correcta del video"; // Reemplaza con la letra correcta

    if (lyricsInput === correctLyrics) {
        alert("¡La letra es correcta!");
    } else {
        alert("La letra no es correcta. Inténtalo de nuevo.");
    }

    // Detener la reproducción del video
    if (videoPlayer) {
        videoPlayer.src = "";
    }
}