import React, {useEffect, useCallback} from 'react';
import {Image} from 'react-bootstrap';
import {gsap} from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import useDevice from './platform';
import './section-1.css';

const Section1 = () => {
  const {isMobile} = useDevice();

  const onLearnMore = useCallback(() => {
    open('https://www.google.com', true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const heightSection1 = document.querySelector('.section1').offsetHeight;
      const heightSection2 = document.querySelector('.section2').offsetHeight;
      const img = gsap.timeline().to('.section1__wave', {
        duration: 1.5,
        ease: 'sine.inOut',
        duration: 3,
        y: heightSection1 + heightSection2 - 40,
        ease: 'linear',
        rotate: 360,
        // rotation: 180,
      });

      ScrollTrigger.create({
        trigger: '.section1__wave',
        start: 'top top',
        id: 'ScrollTrigger',
        end: 'bottom bottom',
        animation: img,
        markers: false,
      });
    }, 500);
  }, [isMobile]);

  return (
    <div className="section1" id="section1">
      <div className="section1__left">
        <img src="./images/wave.svg" className="section1__wave" id="svg" />
      </div>
      <div className="section1__right">
        <p className="title">Progressive Solutions</p>
        <p className="title">Competitive Performance</p>
        <p className="title-bold">
          Global Citizen with {isMobile && <br />} Asian DNA
        </p>
        <div className="line">
          <p className="note">We’re one of Asia’s largest asset managers.</p>
          <p className="learn-more" onClick={onLearnMore}>
            Learn more about who we are
            <Image src="./images/arrow.svg" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Section1);
