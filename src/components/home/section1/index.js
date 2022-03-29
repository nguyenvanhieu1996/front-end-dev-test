import React, {useEffect, useCallback} from 'react';
import {Image} from 'react-bootstrap';
import {gsap} from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import useDevice from './platform';
import './styles.css';

const Section1 = () => {
  const {isMobile} = useDevice();

  const onLearnMore = useCallback(() => {
    open('https://www.google.com', true);
  }, []);

  useEffect(() => {
    gsap.from('svg line', { duration: 2.5, delay: 0.3, drawSVG: "0%" });
    gsap.from('svg path', { duration: 2.5, delay: 0.3, drawSVG: "0%" });
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
      <svg width="747" height="304" viewBox="0 0 747 304" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="66.9393" y1="125.939" x2="125.939" y2="66.9393" stroke="#1A9FFF" stroke-width="3"/>
<line x1="69.0228" y1="179.903" x2="128.023" y2="234.903" stroke="#1A9FFF" stroke-width="3"/>
<line x1="79" y1="153.5" x2="127" y2="153.5" stroke="#1A9FFF" stroke-width="3"/>
<line x1="206.939" y1="125.939" x2="265.939" y2="66.9393" stroke="#1A9FFF" stroke-width="3"/>
<line x1="219" y1="35.5" x2="267" y2="35.5" stroke="#1A9FFF" stroke-width="3"/>
<path d="M219 33.5L274.5 134" stroke="#1A9FFF" stroke-width="3"/>
<path d="M219 34L280 236" stroke="#1A9FFF" stroke-width="3"/>
<line y1="-1.5" x2="48" y2="-1.5" transform="matrix(1 0 0 -1 219 267)" stroke="#1A9FFF" stroke-width="3"/>
<path d="M219 270.5L274.5 170" stroke="#1A9FFF" stroke-width="3"/>
<path d="M219 270L280 68" stroke="#1A9FFF" stroke-width="3"/>
<line x1="209.023" y1="179.903" x2="268.023" y2="234.903" stroke="#1A9FFF" stroke-width="3"/>
<line x1="219" y1="153.5" x2="267" y2="153.5" stroke="#1A9FFF" stroke-width="3"/>
<line x1="346.939" y1="125.439" x2="405.939" y2="66.4393" stroke="#1A9FFF" stroke-width="3"/>
<line x1="359" y1="35" x2="407" y2="35" stroke="#1A9FFF" stroke-width="3"/>
<path d="M359 33L414.5 133.5" stroke="#1A9FFF" stroke-width="3"/>
<path d="M359 33.5L420 235.5" stroke="#1A9FFF" stroke-width="3"/>
<line y1="-1.5" x2="48" y2="-1.5" transform="matrix(1 0 0 -1 359 266.5)" stroke="#1A9FFF" stroke-width="3"/>
<path d="M359 270L414.5 169.5" stroke="#1A9FFF" stroke-width="3"/>
<path d="M359 269.5L420 67.5" stroke="#1A9FFF" stroke-width="3"/>
<line x1="349.023" y1="179.403" x2="408.023" y2="234.403" stroke="#1A9FFF" stroke-width="3"/>
<line x1="359" y1="153" x2="407" y2="153" stroke="#1A9FFF" stroke-width="3"/>
<line x1="486.939" y1="122.439" x2="545.939" y2="63.4393" stroke="#1A9FFF" stroke-width="3"/>
<line x1="499" y1="32" x2="547" y2="32" stroke="#1A9FFF" stroke-width="3"/>
<path d="M499 30L554.5 130.5" stroke="#1A9FFF" stroke-width="3"/>
<path d="M499 30.5L560 232.5" stroke="#1A9FFF" stroke-width="3"/>
<line y1="-1.5" x2="48" y2="-1.5" transform="matrix(1 0 0 -1 499 263.5)" stroke="#1A9FFF" stroke-width="3"/>
<path d="M499 267L554.5 166.5" stroke="#1A9FFF" stroke-width="3"/>
<path d="M499 266.5L560 64.5" stroke="#1A9FFF" stroke-width="3"/>
<line x1="489.023" y1="176.403" x2="548.023" y2="231.403" stroke="#1A9FFF" stroke-width="3"/>
<line x1="499" y1="150" x2="547" y2="150" stroke="#1A9FFF" stroke-width="3"/>
<line x1="635" y1="150.5" x2="683" y2="150.5" stroke="#1A9FFF" stroke-width="3"/>
</svg>
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
