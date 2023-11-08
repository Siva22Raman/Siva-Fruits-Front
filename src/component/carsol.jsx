import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carsol.css'; // Correct the import statement for your CSS file

const carouselStyle = {
  marginRight: '15px',
  borderRadius: '15px',
  marginLeft: '15px',
};

const im = {
  maxWidth: '100%',
  maxHeight: '70vh',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopRightRadius: '30px',
  borderTopLeftRadius: '30px',
  borderBottomLeftRadius: '30px',
  borderBottomRightRadius: '30px',
};

const Carsl = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  // Define an array of image URLs for the carousel
  const images = [
    'https://fruitboxco.com/cdn/shop/files/WTF-1_1000x.jpg?v=1614787924',
    'https://wallpapercave.com/wp/wp8682908.jpg',
    'https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2022/06/2-1024x538.jpg',
    'https://w0.peakpx.com/wallpaper/721/350/HD-wallpaper-life-is-always-sweeter-with-good-food-inspirational.jpg', // Replace with the URL of your fourth image
  ];

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }, 5000); // Change the duration as needed (5 seconds in this example)

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, images]);

  return (
    <div className="carousel-container" style={carouselStyle}>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {images.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img src={imageUrl} className="d-block w-100" alt={`Slide ${index + 1}`} style={im} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{`Slide ${index + 1} label`}</h5>
              <p>Some representative placeholder content for this slide.</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carsl;
