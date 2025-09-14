const tracks = document.querySelectorAll(".carousel-track");

tracks.forEach(track => {
  const slides = track.querySelectorAll("img[src]:not([src=''])");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);
});
