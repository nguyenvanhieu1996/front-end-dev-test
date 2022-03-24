import React, {useCallback, useEffect} from 'react';
import {Image, Container} from 'react-bootstrap';
import {gsap} from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import useDevice from './platform';
import './section-2.css';

const Section2 = () => {
  const {isMobile} = useDevice();

  const onLearnMore = useCallback(() => {
    open('https://www.google.com', true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const img = gsap.timeline().to('.section2__container .left', {
        duration: 1.5,
        ease: 'sine.inOut',
        rotate: 360,
        duration: 2.5,
        ease: 'linear',
      });

      ScrollTrigger.create({
        trigger: '.section2',
        start: 'top top',
        id: 'ScrollTrigger',
        end: 'bottom bottom',
        animation: img,
        markers: false,
      });
    }, 500);
  }, [isMobile]);

  return (
    <div className="section2" id="section2">
      <Container className="section2__container">
        <div className="left">
          <Image src="./images/globe.svg" className="globe" />
        </div>
        <div className="right">
          <p className="title-small">Team of unique combination</p>
          <p className="title">Global {isMobile && <br />} Intelligence</p>
          <p className="title">Asian Insights</p>
          <p className="title">Local Experience</p>
          <div className="line">
            <p className="note">
              We transform intelligent insights into innovative, relevant
              investment opportunities for our clients. Leveraging our unique
              combination of a global perspective complemented by our Asian DNA,
              we aspire to create sophisticated and diverse solutions that set
              new standards in the asset management industry.
            </p>
            <p className="learn-more" onClick={onLearnMore}>
              Learn more about what makes us unique
              <Image src="./images/arrow-white.svg" />
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Section2);
