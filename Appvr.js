
import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  NativeModules,
  Pano,
  Stylesheet,
  AmbientLight,
  Text,
  VrButton,
  Sound,
  Model,
  Video,
  View,
} from 'react-vr';

import Control from './components/control-button';
import Safety from './components/space_safety';
import Astronaut from './components/astronaut';
import Wrench from './components/wrench';
import ControlTip from './components/Controltip';
import Door from './components/hatchet';
//import LoadingSpinner from './components/loadingspinner';
//import VideoToolTip from '/components/VideoTool';
//import Button from './button.js';
//import EarthMoonVR from '/EarthVR.js';

// Web VR is only able to support a maxiumum texture resolution of 4096 px
const MAX_TEXTURE_WIDTH = 4096;
//const MAX_TEXTURE_HEIGHT = 720;
// Cylinder is a 2D surface a fixed distance from the camera.
// It uses pixes instead of meters for positioning components.//// pixels = degrees/360 * density, negative to rotate in expected direction.
const degreesToPixels = degrees => -(degrees / 360) * MAX_TEXTURE_WIDTH;
// PPM = 1/(2*PI*Radius) * density. Radius of cylinder is 3 meters.
//const PPM = 1 / (2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;
//const DEFAULT_ANIMATION_BUTTON_RADIUS = 50;
//const DEFAULT_ANIMATION_BUTTON_SIZE = 0.05;
//const {AudioModule} = NativeModules;



export default class space_orbital_station extends React.Component {

   constructor(props){
       super(props);
       this.state = {
           background: 'space2.jpg',
           sound: 'spacesound.mp3',
           visible: true,
           solved: false,
           playerState: true,
           video : 'alert.mp4',
           tooltip :[
            {
               "type": "video",
               "rotationY": 90,
               "width": 1.560,
               "height": 1.0,
               "source":"alert.mp4",
               "muted":false
            }

         ],
           componentsRender : [<Safety/>, <Control/>, <Astronaut solved={this.solved}/>, <Wrench/>, <ControlTip/> ]
       };
   }
  
   changeScene() {
       this.setState({
           background: 'space1.jpg',
           sound: 'escape_pod.mp3',
           visible: false,
           componentsRender : [ ]
       });
   }

   renderItems(){
       if (this.state.visible === true) {
           return  <Door />
       }
   }
  render() {
    
    return (
      
      <View>
        {/* // Place pano in world, and by using position absolute it does not
            // contribute to the layout of other views.
             */}
        <Pano  source={asset(this.state.background)}/>
          {/* onLoad={() =>
            const playerState = this.state.playerState;
            <Video
          style={{
            height: 3,
            width: 2,
          }}
          source={asset(this.state.video)}
          playerState={this.state.playerState}
        /> 
          }}
        */}

        {/* <View>
          <VrButton onClick={
          <VideoToolTip  tooltip={tooltip} pixelsPerMeter={PPM} />}
          ></VrButton> */}
          
        {/* <Video
          style={{
            height: 8,
            width: 6,
          }}
          source={asset('alert.mp4')}
          playerState={this.state.playerState}
        /> */}
      
      {/* </View> */}

            
        <Sound
            loop={false}
            volume={0.1}
            source={{ mp3: asset(this.state.sound) }}
        />
        
       

            {this.renderItems()}

         {this.state.componentsRender.map(component=>component)}
        
         {/* <EarthMoonVR/> */}
          
      </View>
      

);
};
};

AppRegistry.registerComponent('space_orbital_station', () => space_orbital_station);

