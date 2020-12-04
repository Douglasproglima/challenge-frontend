import React from 'react';
import './style.css';
import Image from '../../assets/walter_white.jpg';
import { TiStarFullOutline } from 'react-icons/ti';

export default class CardImage extends React.Component {

  render() {
    return (
      <div className="container">
        <span className="tag tag-status__alive">Alive</span>
        <img src={Image} />
        <div className="content">
          <h2>Walter White</h2>
          <div className="birth">
            <TiStarFullOutline className="iconBirth" />
            <span>09-07-1958</span>
          </div>
          <p className="desc">High School Chemistry Teacher, Meth King Pin</p>
        </div>
      </div>
    );
  }
}