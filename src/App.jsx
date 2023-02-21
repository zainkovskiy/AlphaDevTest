import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSpeakers } from 'actions/speakers';
import { Header } from 'components/Header';
import { Description } from 'components/Description';
import { Speakers } from 'components/Speakers';
import { Footer } from 'components/Footer';
import face from 'image/face.png';
import ellipse from 'image/ellipse.png';
import ellipse_top from 'image/ellipse_top.png';
import ellipse_face_bottom from 'image/ellipse_face_bottom.png';
import ellipse_center from 'image/ellipse_center.png';
import ellipse_bottom from 'image/ellipse_bottom.png';
import './App.scss';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setSpeakers();
  }, [])
  const setSpeakers = () => {
    dispatch(getSpeakers());
  }
  return (
    <div className="wrapper"
      style={{
        backgroundImage:
          `url(${ellipse_top}), 
        url(${ellipse}), 
        url(${ellipse_face_bottom}),
        url(${face}),
        url(${ellipse_center}),
        url(${ellipse_bottom})`,
      }}
    >
      <div className="container">
        <Header />
        <Description />
        <Speakers />
        <Footer />
      </div>
    </div>
  )
}