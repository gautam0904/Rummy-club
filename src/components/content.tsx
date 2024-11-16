import React, { useState } from 'react';

const Content = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'public/image-1.jpg',
    'public/image-2.jpg',
    'public/image-3.jpg',
    'public/image-4.jpg',
    'public/image-5.jpg',
    'public/image-6.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const jumpToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div >
      <div className="carousel w-75">
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevSlide}>
            &lt;
          </button>
          <div className="carousel-image-container">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="carousel-image img-fluid"
            />
          </div>
          <button className="carousel-button next" onClick={nextSlide}>
            &gt;
          </button>
        </div>
        <div className="carousel-controls">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => jumpToSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      <a
        href="https://teenpattigames.xyz/teen-patti-master-download/"
        className='text-decoration-none'
      >
        <div className="mt-3 available-gradiant d-flex justify-content-center align-items-center">
          <h3 className='available-txt'>
            Available Here
          </h3>
        </div>
      </a>

      <div className="mt-3 container  d-flex justify-content-between align-items-center">
        <img className='three-img img-fluid mx-2 col-lg-4' src="/Thampi Book.png" alt="" />
        <img className='three-img img-fluid mx-2 col-lg-4' src="/table.png" alt="" />
        <img className='three-img img-fluid mx-2 col-lg-4' src="/The most trustworthy.png" alt="" />
      </div>

      <div className="raw mt-3 content-gradiant d-flex align-items-center">
        <div className="raw d-flex container align-items-center">
          <div className='col-lg-8'>
            <p>
              A popular online card game with a unique twist is called Teen Patti. The game involves strategy, quick thinking, and a bit of luck, making it exciting and engaging. Through online platforms, players can join games anytime and compete against friends and other players around the world. With user-friendly interface, secure transactions, and exciting gameplay, online Teen Patti offers an authentic experience that keeps players coming back, blends tradition with the convenience of modern technology.
            </p>
          </div>
          <div className='col-lg-4'>
            <img className='content-img img-fluid' src="../../public/three card.png" alt="" />
          </div>
        </div>

      </div>

      <div className="mt-3 container  d-flex justify-content-between align-items-center">
        <img className='three-img img-fluid mx-2 col-lg-4' src="../../public/Thampi Book.png" alt="" />
        <img className='three-img img-fluid mx-2 col-lg-4' src="../../public/table.png" alt="" />
        <img className='three-img img-fluid mx-2 col-lg-4' src="../../public/The most trustworthy.png" alt="" />
      </div>


      <div className="raw mt-3 content-gradiant d-flex align-items-center">
        <div className="raw d-flex container align-items-center">
          <div className='col-lg-4'>
            <img className='content-img img-fluid' src="../../public/Be a master.png" alt="" />
          </div>
          <div className='col-lg-8'></div>
          <p>
            The traditional version of Teen Patti involves each player receiving three cards and a bet on who has the strongest hand. Similar to poker, the aim is to hold a better hand than the other players. The game can be played with or without a villain, adding suspense as …
          </p>
        </div>
      </div>
    </div>


  );
};

export default Content;
