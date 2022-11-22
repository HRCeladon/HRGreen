import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import './Testimonials.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';




export default function Card ({name,media,testimonial,trip, IdName}) {
  const slideRight = () => {
    var sliding = document.getElementById(IdName);
    sliding.scrollLeft = sliding.scrollLeft + 150;
  }

  const slideLeft = () => {
    var sliding = document.getElementById(IdName);
    sliding.scrollLeft = sliding.scrollLeft - 150;
  }

  return (
    <div>

      <div className="cardContainer">
        <MdChevronLeft className='ArrowCard' onClick={slideLeft} size={20} />
        <div className="bodyDiv">
          <div className="nameContainer">
            <div>{name}</div>
          </div>
          <div className="tripContainer">
            <div>{trip}</div>
          </div>
          <div className="testimonialTextContainer">
            <div>{testimonial}</div>
          </div>
          <div id={IdName} className="slidingPhotos">

            {media.map((testimonial) => {
              return <img
                className="carouselImage"
                key={Math.random()}
                src={testimonial}
              />
            })}

          </div>
        </div>
        <MdChevronRight className='ArrowCard' onClick={slideRight} size={20} />
      </div>

    </div>
  )
}