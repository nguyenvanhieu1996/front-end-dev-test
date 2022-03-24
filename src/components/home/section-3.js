import React, {useCallback, useState} from 'react';
import {Image, Container} from 'react-bootstrap';
import './section-3.css';
import useDevice from './platform';

const Section3 = () => {
  const {isMobile} = useDevice();
  const [numberActive, setNumberActive] = useState(1);
  const onClickNumber = useCallback(number => {
    setNumberActive(number);
  }, []);

  const onLearnMore = useCallback(() => {
    open('https://www.google.com', true);
  }, []);

  return (
    <div className="section3">
      <Container>
        <div className="section1__left">
          <span className="test" />
          {/* <img src="./images/wave.svg" className="section1__wave svg-green-sock" id="svg" /> */}
        </div>
        <div className="section3__container">
          {isMobile && (
            <p className="title-mobile">
              Our Featured <br />
              Funds
            </p>
          )}
          <div className="left">
            <p
              className={numberActive === 1 ? 'active number' : 'number'}
              onClick={() => onClickNumber(1)}
            >
              01
            </p>
            <p
              className={numberActive === 2 ? 'active number' : 'number'}
              onClick={() => onClickNumber(2)}
            >
              02
            </p>
            <p
              className={numberActive === 3 ? 'active number' : 'number'}
              onClick={() => onClickNumber(3)}
            >
              03
            </p>
            <p
              className={numberActive === 4 ? 'active number' : 'number'}
              onClick={() => onClickNumber(4)}
            >
              04
            </p>
          </div>
          <div className="right">
            {!isMobile && (
              <p className="title">
                Our Featured <br />
                Funds
              </p>
            )}

            <p className="title-green">
              Nikko AM ARK Disruptive <br /> Innovation Fund
            </p>
            <div className="swapper-order">
              <Image src="./images/chart.svg" />
              <div className="table-detail">
                <p className="item">
                  <span className="name">NAV (per 100 shares)</span>
                  <span className="value">¥196,977</span>
                </p>
                <p className="item">
                  <span className="name">Net Assets</span>
                  <span className="value">7,309,193 million</span>
                </p>
                <p className="item">
                  <span className="name">Day Change</span>
                  <span className="value">- ¥1,094</span>
                </p>
                <p className="item">
                  <span className="name">Issued</span>
                  <span className="value">3,710,686,634 shares</span>
                </p>
              </div>
            </div>
            <p className="learn-more" onClick={onLearnMore}>
              Explore more funds
              <Image src="./images/arrow.svg" />
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(Section3);
