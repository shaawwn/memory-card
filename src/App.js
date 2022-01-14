// import fs from 'fs';
// import fs from 'fs';
import React from 'react';
import Image from './components/images/75.png'; // Need to get all the images from the folder
import style from './styles/cards.css';
import Card from './components/card.js';
import getImages from './components/get-images.js';
import uniqid from 'uniqid';

// Reader stack overflow https://stackoverflow.com/questions/57161839/module-not-found-error-cant-resolve-fs-in
// const fs = require('fs')

function App() {
  const imageList = getImages()
  const images = require.context('./components/images', true)
  // const luigi = images('./1.png')
  // console.log("IMAGES", images)
  function listFiles() {
    for(let i = 0; i < 151; i++) {
      try {
        console.log(`./components/images/${i}.png`)
      } catch {
        console.log("No such file exists")
      }
    }
  }
  return (

    <div className="App">
      {/* <Card image={'./components/images/75.png'}/> */}
      {imageList.map((img, i) => {
        try {
          let newImage =  images(img)
          return <Card image={newImage} key={uniqid()} />
        } catch {
          console.log("No such image")
        }
        // newImage.src = img
        // return <Card image={newImage} key={uniqid()} />
        // <Card />
      })}
      {/* <div className="card">
        <img src={Image}/> */}
        {/* <Card /> */}
    </div>
  );
}

export default App;
