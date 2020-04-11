import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text,
    Image,
    Sound,
    asset
} from 'react-vr'

export default class Control extends Component {
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
            <View>
                <VrButton onClick={this.toggleDisplayText}
                
                onClickSound={{ wav: asset('mic.wav') }}
                
                >
                    {this.state.displayingControlText === true ?
                        (
                           // <View>
                                <Text
                                    style={{
                                       // position: 'absolute',
                                        backgroundColor: '#FF0000',
                                        fontSize: 1,
                                        fontWeight: '400',
                                        layoutOrigin: [9.5, -0.6],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [32, 6, 10] }, { rotateY: 140 }],
                                    }}>
                                    Use Control Button
                        </Text>
                           // </View>
                        )
                        : (
                            <Image
                                source={asset('control.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 5,
                                    height: 5,
                                    layoutOrigin: [8.5, -0.7],
                                    transform: [{ translate: [32, 6, 10] }, { rotateY: 140 }],
                                }}
                            />
                        )
                    }

                </VrButton>
            </View>

        )
    }
}


module.exports = Control