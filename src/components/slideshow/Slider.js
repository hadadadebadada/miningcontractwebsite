import { React, useContext } from 'react'
import { Slide } from 'react-slideshow-image'
import "./SlideStyle.css"
import { Context } from '../Wrapper'
import { FormattedMessage } from 'react-intl'

import 'react-slideshow-image/dist/styles.css'
function Slider() {
  const context = useContext(Context)

  const slideImages = [
    "./images/1.JPG",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",

  ];
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
            <span> {String.fromCharCode(9773)}</span>
            <h1 style={{

              color: 'white'
            }}
            >
              <FormattedMessage
                id="slider.title">

              </FormattedMessage>

            </h1>
            <span>{String.fromCharCode(9773)}</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
            <span>{String.fromCharCode(9829)}</span>
            <h1 style={{

              color: 'white'
            }}
            ><FormattedMessage
              id="slider.title">

              </FormattedMessage></h1>
            <span>{String.fromCharCode(9829)}</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
            <span>{String.fromCharCode(9885)}</span>
            <h1 style={{

              color: 'white'
            }}
            ><FormattedMessage
              id="slider.title">

              </FormattedMessage></h1>
            <span>{String.fromCharCode(9885)}</span>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slider

