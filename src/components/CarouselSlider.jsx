import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaPlayCircle } from 'react-icons/fa';
import Register from './Register';
import Login from './Login';

const CarouselSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const overlay = {
    content: '',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <>
      <Register />
      <Login />
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
        <Carousel.Item>
          <img src={`https://image.tmdb.org/t/p/original/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg`} className="img" />
          <div style={overlay} />
          <Carousel.Caption className="Movie-caption" style={{ textAlign: 'left', marginLeft: '-180px', width: '50%' }}>
            <h1 className="Movie-judul">Doctor Strange in the Multiverse of Madness</h1>
            <p className="Movie-deskripsi">Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.</p>
            <a href="#" className="Movie-btn" style={{ maxWidth: '200px' }}>
              {' '}
              <FaPlayCircle style={{ marginRight: '5px', marginBottom: '2px' }} />
              WATCH TRAILER
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={`https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg`} className="img" />
          <div style={overlay} />
          <Carousel.Caption className="Movie-caption" style={{ textAlign: 'left', marginLeft: '-180px', width: '50%' }}>
            <h1 className="Movie-judul">Fast X</h1>
            <p className="Movie-deskripsi">
              Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent theyve ever faced: A terrifying threat
              emerging from the shadows of the past whos fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.
            </p>
            <a href="#" className="Movie-btn" style={{ maxWidth: '200px' }}>
              {' '}
              <FaPlayCircle style={{ marginRight: '5px', marginBottom: '2px' }} />
              WATCH TRAILER
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={`https://image.tmdb.org/t/p/original/1syW9SNna38rSl9fnXwc9fP7POW.jpg`} className="img" />
          <div style={overlay} />
          <Carousel.Caption className="Movie-caption" style={{ textAlign: 'left', marginLeft: '-180px', width: '40%' }}>
            <h1 className="Movie-judul">Blue Beetle</h1>
            <p className="Movie-deskripsi">
              Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds
              himself in possession of an ancient relic of alien biotechnology: the Scarab.
            </p>
            <a href="#" className="Movie-btn" style={{ maxWidth: '200px' }}>
              {' '}
              <FaPlayCircle style={{ marginRight: '5px', marginBottom: '2px' }} />
              WATCH TRAILER
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselSlider;
