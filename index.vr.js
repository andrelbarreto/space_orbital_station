
import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';

import Appvr from './Appvr';


export default class space_orbital_station extends React.Component {
  
  render() {
   
    return (
      
      <View>
        <Appvr />
  
      </View>
      
    );
  }
};

AppRegistry.registerComponent('space_orbital_station', () => space_orbital_station);
