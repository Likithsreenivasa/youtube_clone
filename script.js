// Fetch 20 videos for the empty search string on page load
window.addEventListener('load', function() {
    fetchVideos('');
});

// Search button click event handler
document.getElementById('search-button').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input').value;
    fetchVideos(searchInput);
});

// Function to fetch videos from the YouTube API
function fetchVideos(searchQuery) {
    // Make API call to fetch videos based on searchQuery
    // Use the YouTube API Search endpoint with the correct parameters

    // Once the response is received, call the renderVideos function
    var videoData = []; // Replace with actual response data
    renderVideos(videoData);
}

// Function to render the videos onto the UI
function renderVideos(videoData) {
    var videoList = document.getElementById('video-list');
    videoList.innerHTML = '';

    videoData.forEach(function(video) {
        var videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            <img src="${video.thumbnail}" alt="Video Thumbnail">
            <h2>${video.title}</h2>
            <p>${video.description}</p>
        `;

        // Add click event listener to navigate to video details page
       // Add click event listener to navigate to video details page
        videoItem.addEventListener('click', function() {
            storeVideoId(video.id);
            window.location.href = 'videoDetails.html';
        });

        videoList.appendChild(videoItem);
    });
}

// Function to store video_id in local storage
function storeVideoId(videoId) {
    localStorage.setItem('videoId', videoId);
}


