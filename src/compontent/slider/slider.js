import React from 'react';
import { Zoom } from 'react-slideshow-image';
// import './slider.css';
 
const images = [
  'https://www.keejob.com/media/recruiter/recruiter_12069/logo-12069-20171012-141239.jpg',
  'https://www.keejob.com/media/recruiter/recruiter_12069/logo-12069-20171012-141239.jpg',
  'https://www.keejob.com/media/recruiter/recruiter_12069/logo-12069-20171012-141239.jpg',
  'https://www.keejob.com/media/recruiter/recruiter_12069/logo-12069-20171012-141239.jpg',
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    )
}

export default Slideshow