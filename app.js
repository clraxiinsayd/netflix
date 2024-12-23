const API_KEY = `e3ca287d8a371255ecad8c9babcdbf97`;
const heroEL = document.querySelector(".heroImg");
const movieTitle = document.querySelector(".heroMovieTitle");
const movieDescEl = document.querySelector(".heroDescEl");
const moreInfoEl = document.querySelector(".moreInfo");
const moreInfoBtn = document.querySelector(".infoBtn");
const appFunction = async () => {
  try {
    const genres = [
      {
        name: "Romance",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      },
      {
        name: "Action",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
      },
      {
        name: "Horror",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
      },
      {
        name: "Comedy",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
      },
      {
        name: "Trending",
        url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
      },
      {
        name: "Upcoming",
        url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
      },
      {
        name: "Upsmooth",
        url: `https://youtube-data8.p.rapidapi.com/auto-complete/?q=cartoon&hl=en&gl=US?api_key=${API_KEY}`,
      },
    ];

    for (const genre of genres) {
      const res = await fetch(genre.url);
      const data = await res.json();
      console.log(`${genre.name}:`, data.results);
    }
  } catch (error) {
    console.error("Failed to fetch genres:", error);
  }
};

const setHeroBanner = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    );
    const data = await res.json();
    if (!data.results || data.results.length === 0) {
      console.error("No movies found.");
      return;
    }
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results.length)];
    const heroImg = document.createElement("div");
    const heroImgEl = document.createElement("img");
    heroImgEl.src = `https://image.tmdb.org/t/p/w1280${randomMovie.backdrop_path}`; // Remove extra parentheses
    heroImgEl.alt = randomMovie.original_title || "Movie image";
    heroImgEl.style.width = "100%";
    heroImgEl.style.height = "700px";
    heroImgEl.classList.add("object-cover", "h-[700px]");
    heroImg.appendChild(heroImgEl);
    heroEL.appendChild(heroImg);
    movieTitle.textContent = randomMovie.original_title;
    movieDescEl.textContent = randomMovie.overview;
  } catch (error) {
    console.error("Failed to fetch hero banner:", error);
  }
  const infoFunction = () => {
    const information = document.createElement("div");

    information.innerHTML = `<h4>${randomMovie.original_title}</h4>`;
    moreInfoEl.appendChild(information);
  };
  moreInfoBtn.addEventListener("click", infoFunction);
};

// events

appFunction();
setHeroBanner();
