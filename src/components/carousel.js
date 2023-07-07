
//a Carousel component that thakes in an array of images and automatically scrolls through them

//default color of the caption is black



import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import stockphoto1 from '../assets/imgs/stock photo 1.jpg';
import stockphoto2 from '../assets/imgs/stock photo 2.jpg';
import stockphoto3 from '../assets/imgs/stock photo 3.jpg';
import stockphoto4 from '../assets/imgs/stock photo 4.jpg';

const items = [
  {
    src: stockphoto2,
    altText: 'repair photo 2',
    caption: 'we use Flux to reflow the motherboard unlike our competitors',
    header: 'We use Flux',
  },
  {
    src: stockphoto3,
    altText: 'repair photo 3',
    caption: 'There is a 90-day Manufacturer Warranty on all parts',
    header: '90 Day Warranty',
  },
  {
    src: stockphoto4,
    altText: 'repair photo 4',
    caption: 'We have a 99.99% success rate on the YLOD (yellow light of death) repair',
    header: 'YLOD Repair',
  },
  {
    src: stockphoto1,
    altText: 'repair photo 1',
    caption: 'We have been repairing consoles since 2009',
    header: 'Over 10 Years of Experience',
  },
];

const CarouselComponent = () => (
  <Carousel>
    {items.map((item, index) => (
      <div key={index}>
        <img src={item.src} alt={item.altText} />
        <p className="legend">{item.caption}</p>
        <h3 className="header">{item.header}</h3>
      </div>
    ))}
  </Carousel>
);

export default CarouselComponent;


