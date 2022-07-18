import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ExpandedCarousel from './ExpandedCarousel.jsx';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`
const Content = styled.div`
  width: 1200px;
  background-color: #fff;
  object-fit: contain;
`
const Header = styled.div`

`
const Body = styled.img`
  max-height: 750px;
`

export default function ExpandedModal (props) {

  return (
    <>
      {props.hasLoaded && <Container>
        <Content>
          <Header>
            <button onClick={()=> props.setShowModal(false)}>x</button>
          </Header>
          <Body src={props.productStyle.photos[props.currentIndex].url}/>
          <ExpandedCarousel currentIndex={props.currentIndex} setCurrentIndex={props.setCurrentIndex} productStyle={props.productStyle}/>
        </Content>
      </Container>}
    </>
  )
}