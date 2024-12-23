const API_KEY = `e3ca287d8a371255ecad8c9babcdbf97`;

// Function to fetch movies based on a search term from TMDb
const fetchMovies = async (searchTerm) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
    );

    const data = await res.json();
    console.log(data); // Log the data for inspection
  } catch (error) {
    console.error(error);
  }
};

// Function to fetch different types of movie data from TMDb API
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
    ];

    // Fetch data from each genre API endpoint
    for (const genre of genres) {
      const res = await fetch(genre.url);
      const data = await res.json();

      console.log(`${genre.name} Movies:`, data); // Log the results for each genre
    }
  } catch (error) {
    console.error(error);
  }
};

// Call the appFunction to fetch movie data
appFunction();
