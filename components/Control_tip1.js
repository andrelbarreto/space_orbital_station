import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text,
    Image,
    asset
} from 'react-vr'

export default class Control_tip1 extends Component {
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
                                <Text
                                    style={{
                                       // position: 'absolute',
                                        backgroundColor: '#FF0000',
                                        fontSize: 0.5,
                                        fontWeight: '100',
                                        layoutOrigin: [18.5, -0.6],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [32, 6, 10] }, { rotateY: 140 }],
                                    }}>
                                    I
                        </Text>
                           // </View>
                        )
                        : (
                            <Image
                                source={asset('control-button-tip.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 4,
                                    height: 2,
                                    layoutOrigin: [18.5, -0.6],
                                    transform: [{ translate: [32, 6, 10] }, { rotateY: 140 }],
                                }}
                            />
                        )
                    }

                </VrButton>
          //  </View>

        )
    }
}


module.exports = Control_tip1