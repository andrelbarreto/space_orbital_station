import React, { Component } from 'react'
import {
    VrButton,
    View,
    Image,
    asset
} from 'react-vr'

export default class Wrench extends Component {
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
                           // <View>
                           <Image
                           source={asset('wrench.png')}
                           style={{
                               position: 'absolute',
                               width: 5,
                               height:11,
                               layoutOrigin: [ -15, 0],
                               transform: [{ translate: [-45, 25, 10] }, { rotateY: -120}],
                           }}
                       />
                           // </View>
                        )
                        : (
                            <Image
                                source={asset('MIR-tip1.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 5,
                                    height: 3,
                                    layoutOrigin: [ -15, 0],
                                    transform: [{ translate: [-45, 25, 10] }, { rotateY: -120 }],
                                }}
                            />
                        )
                    }

                </VrButton>
          //  </View>

        )
    }
}


module.exports = Wrench