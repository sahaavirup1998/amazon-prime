import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else setCurrentSlide(0);
  };

  const next = () => {
    setCurrentSlide(0);
  };

  const restart = () => {
    currentSlide < props.slides.length - 1 && setCurrentSlide(currentSlide + 1);
  };

  return (
    <>
      <div className="App">
        <div>
          <h1 data-testid="title">{props.slides[currentSlide].title}</h1>
          <p data-testid="text">{props.slides[currentSlide].text}</p>
        </div>
        <button
          data-testid="button-prev"
          disabled={currentSlide === 0 ? true : false}
          onClick={prev}
        >
          Previous
        </button>
        <button
          data-testid="button-restart"
          disabled={currentSlide === 0 ? true : false}
          onClick={restart}
        >
          Restart
        </button>
        <button
          data-testid="button-next"
          disabled={currentSlide === props.slides.length-1 ? true : false}
          onClick={next}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default App;