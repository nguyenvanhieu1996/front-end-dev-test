import React from 'react';
import {Image} from 'react-bootstrap';
import './styles.css';

const Section4 = () => {
  return (
    <div className="section4">
      <div className="section4__container">
        <div className="left">
          <Image src="./images/wave-footer.svg" />
          <p className="wrapper-text">
            <span className="text-1">Invest with</span>
            <br />
            <span className="text-2">Nikko AM</span>
          </p>
        </div>
        <div className="right">
          <div className="table-detail">
            <p className="item">
              <span className="name">Equity</span>
              <Image src="./images/icon-footer.svg" />
            </p>
            <p className="item">
              <span className="name">Bond</span>
              <Image src="./images/icon-footer.svg" />
            </p>
            <p className="item">
              <span className="name">Multi-Assets</span>
              <Image src="./images/icon-footer.svg" />
            </p>
            <p className="item">
              <span className="name">ETFs</span>
              <Image src="./images/icon-footer.svg" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Section4);
