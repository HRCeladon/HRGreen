import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import './Testimonials.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Card from './Card.jsx';




var fakeTestimonials = [
 {
  name: 'fakeuser',
  trip: 'fakeLocationName',
  testimonial: 'thisisafaketestimonialthisisafaketestimonialthisisafaketestimonialthisisafaketestimonial',
  media: ['https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285']
 },
 {
  name: 'fakeuser',
  trip: 'fakeLocationName',
  testimonial: 'thisisafaketestimonialthisisafaketestimonialthisisafaketestimonialthisisafaketestimonial',
  media: ['https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285']
 },
 {
  name: 'fakeuser',
  trip: 'fakeLocationName',
  testimonial: 'thisisafaketestimonialthisisafaketestimonialthisisafaketestimonialthisisafaketestimonial',
  media: ['https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285']
 },
 {
  name: 'fakeuser',
  trip: 'fakeLocationName',
  testimonial: 'thisisafaketestimonialthisisafaketestimonialthisisafaketestimonialthisisafaketestimonial',
  media: ['https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285']
 },
 {
  name: 'fakeuser',
  trip: 'fakeLocationName',
  testimonial: 'thisisafaketestimonialthisisafaketestimonialthisisafaketestimonialthisisafaketestimonial',
  media: ['https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285']
 },
 {
  name: 'fakeuser',
  trip: 'fakeLocationName',
  testimonial: 'thisisafaketestimonialthisisafaketestimonialthisisafaketestimonialthisisafaketestimonial',
  media: ['https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285', 'https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_8n2YGFZ_a.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666815679285']
 }

]

var count = 0;
export default function Testimonial (props) {


  const slideLeft = () => {
    var sliding = document.getElementById('sliding');
    sliding.scrollLeft = sliding.scrollLeft - 500;
  }
  const slideRight = () => {
    var sliding = document.getElementById('sliding');
    sliding.scrollLeft = sliding.scrollLeft + 500;
  }

  return (
    <div>
      <div className="testimonialContainer">
        <MdChevronLeft className='ArrowCard' onClick={slideLeft} size={40} />
        <div id="sliding">
          {fakeTestimonials.map((testimonial) => {
            count++
            return <Card
            name={testimonial.name}
            trip={testimonial.trip}
            testimonial={testimonial.testimonial}
            media={testimonial.media}
            key={Math.random()}
            slideRight={slideRight}
            slideLeft={slideLeft}
            IdName={'slidingPhotos' + count}
            />
          })}
        </div>
        <MdChevronRight className='ArrowCard' onClick={slideRight} size={40} />
      </div>
    </div>
  )
}