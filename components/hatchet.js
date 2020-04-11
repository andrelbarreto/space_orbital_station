import React, { Component } from 'react'
import {
    VrButton,
    View,
    Image,
    Sound,
    Scene,
    asset
} from 'react-vr'

export default class Door extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            OpenHatch: false,
            PuzzlesSolved : false,
            background : 'space2.jpg',
            sound: 'spacesound.mp3',
            visible: true
        }
        this.toggleOpenHatch = this.toggleOpenHatch.bind(this)
    }


    changeScene() {
        this.setState({
            background: 'space1.jpg',
            sound: 'spacesound.mp3',
            visible: false,
        })
    }

    Timer() {
        setTimeout(() =>  //start the timer
        this.setState({timePassed: true, PuzzlesSolved: true}), 20000)
      }   

      
    toggleOpenHatch() {
        if (this.state.PuzzlesSolved)  {
            this.setState({ OpenHatch: true })

        } else {
            this.setState({ OpenHatch: false })
        }
    }

    render() {
        let that = this;
 
        return (
            <View>
                
                    {this.state.OpenHatch === true ?
                        (   
                            <VrButton
                                    onClickSound={{
                                                    mp3: asset('space_door.mp3'),
                                                 }}
                                                 style={{
                                                 transform: [
                                                 {translate: [-400, -200, -360]},
                                                 {rotateX: -90},
                                                 {rotateY: 15}
                                                 ]}} 
                                    onClick={this.changeScene.bind(this)}>
                                    <Image
                                    source={asset('Hatch-closed.png')}
                                    style={{
                                    position: 'absolute',
                                    width: 280,
                                    height: 280,
                                    layoutOrigin: [0, 0],
                                    transform: [
                                        {translate: [-400, -200, -360]},
                                        {rotateX: -90},
                                        {rotateY: 15}
                                    ]           
                                }}
                            />
                          
                         </VrButton>

                        )
                        : (
                            <VrButton  
                                     style={{
                                    position: 'absolute',
                                     width: 280,
                                    height: 280,
                                    layoutOrigin: [0, 0],
                                    transform: [
                                    {translate: [-400, -200, -360]},
                                    {rotateX: -90},
                                    {rotateY: 15}
                                     ]           
                                    }}
                                     onClick= {() =>
                                        this.Timer(),
                                        this.toggleOpenHatch()}>
                            
                            <Image
                                source={asset('Hatch-closed.png')}
                                style={{
                                    position: 'absolute',
                                    width: 280,
                                    height: 280,
                                    layoutOrigin: [0, 0],
                                    transform: [
                                        {translate: [-400, -200, -360]},
                                        {rotateX: -90},
                                        {rotateY: 15}
                                    ]           
                                }}
                            />
                            </VrButton>
                            )  
                                
                    }

                
            </View>

        )
    }
}


module.exports = Door