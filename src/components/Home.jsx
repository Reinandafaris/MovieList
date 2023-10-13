import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getMovieList, searchMovieList } from '../api/Api';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MovieDetail from './MovieDetail';
import CarouselSlider from './CarouselSlider';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [carouselActive, setCarouselActive] = useState(true);
  const [showAllMovies, setShowAllMovies] = useState(false);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = ({ showDetail }) => {
    const limitedPopularMovies = showAllMovies ? popularMovies : popularMovies.slice(0, 4);

    return limitedPopularMovies.map((movie) => {
      return (
        <div className="Movie-wrapper" key={movie.id}>
          <Link to={`/MovieDetail/${movie.id}`}>
            <img className="Movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} onClick={() => showDetail(movie)} />
          </Link>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 1) {
      const query = await searchMovieList(q);
      setPopularMovies(query.results);
    }
  };

  const showMovieDetail = (movie) => {
    setSelectedMovie(movie);
    setCarouselActive(false);
  };

  const handleSeeAllClick = (e) => {
    e.preventDefault();
    setShowAllMovies(!false);
  };

  const handleRegisterClick = () => {
    const register = document.querySelector('.wrapper-register');
    register.classList.toggle('active');
  };

  const handleLoginClick = () => {
    const login = document.querySelector('.wrapper-login');
    login.classList.toggle('active');
  };

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: 'transparent', position: 'absolute', width: '100%', zIndex: '1' }}>
        <a href="#" className="navbar-brand" style={{ color: 'rgb(241, 1, 9)', fontWeight: 'bold', fontSize: '40px', marginLeft: '20px', marginTop: '-70px', marginRight: '-100px' }}>
          MovieList
        </a>
        <div className="container">
          <form className="form-inline" style={{ marginLeft: '400px' }}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="What do you want to watch?"
              aria-label="Search"
              onChange={({ target }) => search(target.value)}
              style={{ color: 'white', backgroundColor: 'transparent', border: '2px solid rgb(241, 1, 9)', borderRadius: '20px', borderBlockColor: 'rgb(241, 1, 9)' }}
            />
          </form>
          <div className="ml-auto">
            <button onClick={handleLoginClick} className="Movie-login" type="button">
              Login
            </button>
            <button onClick={handleRegisterClick} id="register-button" className="Movie-register" type="button">
              Register
            </button>
          </div>
        </div>
      </nav>

      <div className="App">
        {carouselActive && <CarouselSlider />}
        <header className="App-header">
          {!selectedMovie && (
            <>
              <h2 className="Movie-pupular" style={{ marginLeft: '5px' }}>
                Popular Movie
              </h2>
              {!showAllMovies && (
                <a href="#" className="Movie-more" style={{ float: 'right' }} onClick={handleSeeAllClick}>
                  See All Movie
                  <FaArrowRight className="Movie-arrowRight" />
                </a>
              )}
            </>
          )}
          <div className="Movie-container">
            {selectedMovie ? (
              <div>
                <MovieDetail movie={selectedMovie} />
              </div>
            ) : (
              <PopularMovieList showDetail={showMovieDetail} />
            )}
          </div>
        </header>
      </div>
      <footer className="footer">MovieList &copy;2023.</footer>
    </>
  );
};

export default Home;
