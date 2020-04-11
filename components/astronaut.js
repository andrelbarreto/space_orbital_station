import React, { Component } from 'react'
import {
    VrButton,
    View,
    Image,
    asset
} from 'react-vr'

export default class Astronaut extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
            displayingControlText: true
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingControlText) {
            this.setState({ displayingControlText: true })
            this.props.solved=true;
            console.log(this.props.solved)
        } else {
            this.setState({ displayingControlText: false })
        }
    }

    render() {
        return (
           // <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingControlText === true ?
                        (
                           <View>
                           <Image 
                           source={asset('astronaut.png')}
                           style={{
                               position: 'absolute',
                               width: 66.5577,
                               height: 84.7827,
                               layoutOrigin: [ 0, 0],
                               transform: [
                                   { translate: [-20, 110, -600]}, 
                                   { rotateY: 180},
                                   { rotateX: 45},
                                   { rotateX: -50},
                                
                            ]
                           }}
                       />
                           </View>
                        )
                        : (

                            <Image
                                source={asset('PathPuzzle.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 507.625,
                                    height: 677.25,
                                    layoutOrigin: [ 0, 0],
                                    transform: [{ translate: [ 200, 200, -600] }, { rotateY: -40 }],
                                }}
                            />
                        )
                    }

                </VrButton>
          //  </View>

        )
    }
}


module.exports = Astronaut