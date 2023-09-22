

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const resultsContainer = document.getElementById("results");

    searchButton.addEventListener("click", () => {
        const video = searchInput.value.trim();
        console.log(video);
        if (video !== "") {
            searchYouTubeVideos(video);
        }
    });

    function displaySearchResults(videos) {
        resultsContainer.innerHTML = ""; 
    
        videos.forEach((video) => {
            const videoItem = document.createElement("div");
            videoItem.className = "video-item";
            videoItem.innerHTML = `
                <img src="${video.snippet.thumbnails.medium.url}" alt="Miniatura del Video">
                <h3>${video.snippet.title}</h3>
                <p>${video.snippet.description}</p>
                <a href="player.html?videoId=${video.id.videoId}" >Ver Video</a>
            `;
    
            resultsContainer.appendChild(videoItem);
        });
    }

 
    function searchYouTubeVideos(searchTerm) {
        const apiKey='AIzaSyCn1ricGDNeG_io14FQ6kHSovZ6JtFsOEA'
        const apiUrl = 'https://www.googleapis.com/youtube/v3/search';
    
        const requestUrl = `${apiUrl}?part=snippet&q=${searchTerm}&key=${apiKey}`;
    
        fetch(requestUrl)
            .then((response) => response.json())
            .then((data) => {
                displaySearchResults(data.items);
            })
            .catch((error) => {
                console.error("Error al buscar videos:", error);
            });
    }


});



