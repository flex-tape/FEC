/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext, useRef } from 'react';
import Overview from './Overview/Overview.jsx';
import QandA from './QandA/QandA.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import styled from 'styled-components';
const axios = require('axios');
export const IDContext = React.createContext()

const Container = styled.div`
  font-family: Arial, sans-serif;
`
const Logo = styled.h1`
// width: 85%;
// margin: auto;
margin-left: 120px;
margin-right: 120px;
padding-left: 168px;
background-image: linear-gradient(to right, #ffe6fe , #00fbff6b);
`

export default function App() {

  const [productID, setProductID] = useState(40344);
  const [styleID, setStyleID] = useState(240500);
  const [reviewAvg, setReviewAvg] = useState(0);

  // const [productID, setProductID] = useState(() => { return 40344; }); best practice but probably doesn't matter here
  // const [productStyles, setProductStyle] = useState([]); // might not need this here, because to get product styles, all you need is product_id
  //
  // pass setProductID as prop to related items

  useEffect(() => {
    axios.get(`/products/${productID}/styles`)
      .then((response) => {
        setStyleID(response.data.results[0].style_id);
      })
      .catch((err) => {
      })
  }, [productID])

  const setID = (id) => {
    setProductID(id);
  }

  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const el1 = useRef();
  const el2 = useRef();

  return (
    <IDContext.Provider value={productID}>
      <Logo>HEVANIS</Logo>
      <Container id="master-container">
        <Overview reference={el1} click={()=> scrollToDiv(el2)} styleID={styleID} setStyleID={setStyleID} setProductID={setProductID} productID={productID}/>
        <RelatedItems setID={setID} productID={productID}/>
        <QandA productID={productID}/>
        <RatingsAndReviews reference={el2} productID={productID} setReviewAvg={setReviewAvg} />
      </Container>
    </IDContext.Provider>
  )
}
