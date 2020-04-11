import React, { Component } from 'react'
import {
    VrButton,
    View,
    Image,
    asset
} from 'react-vr'

export default class Safety extends Component {
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
                           source={asset('space-safety.jpg')}
                           style={{
                               position: 'absolute',
                               width: 5,
                               height:11,
                               layoutOrigin: [ -5.7, 2.2],
                               transform: [{ translate: [23, -10, 10] }, { rotateY: -220}],
                           }}
                       />
                           // </View>
                        )
                        : (
                            <Image
                                source={asset('MIR_tip2.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 5,
                                    height: 3,
                                    layoutOrigin: [ -1.5, 0],
                                    transform: [{ translate: [22, -10, 10] }, { rotateY: -120 }],
                                }}
                            />
                        )
                    }

                </VrButton>
          //  </View>

        )
    }
}


module.exports = Safety