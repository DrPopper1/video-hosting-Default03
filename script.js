const videos = [
      { title: 'Видео 1', src: 'video1.mp4' },
      { title: 'Видео 2', src: 'video2.mp4' },
      { title: 'Видео 3', src: 'video3.mp4' }
    ];

    const videoPlayer = document.getElementById('videoPlayer');
    const videoList = document.getElementById('videoList');
    const favoritesList = document.getElementById('favoritesList');
    const ratingBlock = document.getElementById('ratingBlock');

    let currentVideo = null;
    const favorites = [];

    function loadVideos() {
      videos.forEach(video => {
        const div = document.createElement('div');
        div.className = 'video-item';
        div.textContent = video.title;
        div.onclick = () => playVideo(video);
        videoList.appendChild(div);
      });
    }

    function playVideo(video) {
      videoPlayer.src = video.src;
      currentVideo = video;
      generateRating();
    }

    function generateRating() {
      ratingBlock.innerHTML = '';
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.innerHTML = '☆';
        star.onclick = () => rateVideo(i);
        ratingBlock.appendChild(star);
      }
    }

    function rateVideo(score) {
      if (!currentVideo) return;
      alert(`Вы оценили '${currentVideo.title}' на ${score} из 5`);
      if (!favorites.includes(currentVideo)) {
        favorites.push(currentVideo);
        const div = document.createElement('div');
        div.className = 'video-item';
        div.textContent = currentVideo.title;
        div.onclick = () => playVideo(currentVideo);
        favoritesList.appendChild(div);
      }
    }

    generateRating()

    loadVideos();