let videoPlayer; 

document.addEventListener("DOMContentLoaded", () => {
    const videoId = getVideoIdFromUrl();
    if (videoId) {
        embedYouTubePlayer(videoId);
    } else {
    }
});

function getVideoIdFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("videoId");
}

function embedYouTubePlayer(videoId) {
    
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


function goBackToSearch() {
    
    window.location.href = "index.html"; 
}