import React, { Component } from 'react';
import { Alert, Container } from 'reactstrap';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

import * as lottie from '../helpers/weather.lottie.json'

// Options for Lottie
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}
export default class Weather extends Component {
    state = {
        visible: true
    }

    // Dismiss alerts
    onDismiss() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        // Deconstructing state 
        const { temprature, city, country, humidity, description, error, loading } = this.props;

        return (
            <Container className="output">
                {!loading ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {error && <Alert color="danger" isOpen={this.state.visible} fade={true} toggle={this.onDismiss.bind(this)} style={alertStyles}>{error}</Alert>}
                        <Lottie options={defaultOptions} height={400} width={400} />
                    </div>
                ) : (
                        <FadeIn >
                            <h3>{city}, {country}</h3>

                            <div className="Faded">
                                <div>
                                    <p>Temprature:</p>
                                    <p>{temprature}C</p>
                                </div>

                                <div>
                                    <p>Humidity:</p>
                                    <p>{humidity}</p>
                                </div>

                                <div>
                                    <p>Description: </p>
                                    <p style={{ textTransform: 'capitalize' }}>{description}</p>
                                </div>
                            </div>
                        </FadeIn>
                    )}
            </Container >
        )
    }
}

const alertStyles = {
    textTransform: 'capitalize',
    zIndex: 99,
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, 50%)'
}