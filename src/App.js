import React, {useRef} from 'react';
//import logo from './logo.svg';
import './App.css';
import * as tf from "@tensorflow/tfjs";
import * as facemash from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";

function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  return (
    <div className="App">
      <header className="App-header"> 
      <Webcam ref={webcamRef} style={
        {
          position:"absolute",
          marginLeft:"auto",
          marginRight:"auto",
          left:0,
          right:0,
          textAlign:"center",
          zindex:9,
          width:640,
          height:480
        }
      } />
      <canvas ref={canvasRef}
      style= {{
          position:"absolute",
          marginLeft:"auto",
          marginRight:"auto",
          left:0,
          right:0,
          textAlign:"center",
          zindex:9,
          width:640,
          height:480
        }}
      />
      </header>
    </div>
  );
}

export default App;
