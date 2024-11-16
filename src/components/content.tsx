import React, { useState } from 'react';

const Content = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/image-1.jpg',
    '/image-2.jpg',
    '/image-3.jpg',
    '/image-4.jpg',
    '/image-5.jpg',
    '/image-6.jpg',
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
      <div className="rummy-carousel carousel mt-3 w-75">
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
        <div className="mt-3 available-gradiant d-flex justify-content-center align-items-center py-4">
          <h3 className='available-txt fs-1'>
            Available Here
          </h3>
        </div>
      </a>

      <div className="mt-3 container">
        <div className="image-scroll-container">
          <img className="three-img img-fluid mx-2" src="/Thampi Book.png" alt="Image 1" />
          <img className="three-img img-fluid mx-2" src="/table.png" alt="Image 2" />
          <img className="three-img img-fluid mx-2" src="/The most trustworthy.png" alt="Image 3" />
        </div>
      </div>


      <div className="raw mt-3 content-gradiant d-flex align-items-center">
        <div className="container d-flex flex-column flex-lg-row align-items-center py-1">
          <div className="col-lg-8">
            <p>
              A popular online card game with a unique twist is called Teen Patti. The game involves strategy, quick thinking, and a bit of luck, making it exciting and engaging. Through online platforms, players can join games anytime and compete against friends and other players around the world. With user-friendly interface, secure transactions, and exciting gameplay, online Teen Patti offers an authentic experience that keeps players coming back, blends tradition with the convenience of modern technology.
              The traditional version of Teen Patti involves each player receiving three cards and a bet on who has the strongest hand. Similar to poker, the aim is to hold a better hand than the other players. The game can be played with or without a villain, adding suspense as players bet or fold depending on their confidence in their cards.
            </p>
          </div>
          <div className="col-lg-4">
            <img className="content-img img-fluid" src="/three card.png" alt="Teen Patti Image" />
          </div>
        </div>
      </div>


      <div className="mt-3 container">
        <div className="image-scroll-container">
          <img className="three-img img-fluid mx-2" src="/Thampi Book.png" alt="Image 1" />
          <img className="three-img img-fluid mx-2" src="/table.png" alt="Image 2" />
          <img className="three-img img-fluid mx-2" src="/The most trustworthy.png" alt="Image 3" />
        </div>
      </div>


      <div className="raw mt-3 content-gradiant d-flex align-items-center">
        <div className="container d-flex flex-column flex-lg-row align-items-center py-1">
          <div className='col-lg-4'>
            <img className='content-img img-fluid' src="/Be a master.png" alt="" />
          </div>
          <div className='col-lg-8'>
            <p>
              A few cards are designated as "Jokers," allowing players to use them as any card they wish to form a stronger hand. The variation adds an extra layer of excitement and strategy, as players can change the course of the game with their Jokers. The game can be unpredictable and even weak hands can become winning ones.
              Muflis Teen Patti, also known as "Lowball," flips the sport’s ordinary guidelines, wherein the weakest hand wins as opposed to the most powerful. Here, the goal is to preserve the bottom-ranking mixture, developing a distinct and refreshing venture. Players should cautiously examine their fingers, aiming to have decrease card values. Muflis changes the way players guess, bringing a brand new strategic detail and including to the game’s range.
            </p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Content;
