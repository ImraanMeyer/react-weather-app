import React, { Component } from 'react';
import { Alert, Container, Fade } from 'reactstrap';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

import * as lottie from '../helpers/weather.lottie.json'

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
        visible: true,
        hasData: undefined
    }

    onDismiss() {
        this.setState({
            visible: !this.state.visible
        })
    }

    componentDidMount() {
        this.props.loading ? (this.setState({
            hasData: true
        })) : (this.setState({
            hasData: !this.state.hasData
        }))
    }

    render() {

        // Deconstructing state 
        const { temprature, city, country, humidity, description, error, loading, hasData } = this.props;

        return (
            <Container className="output">
                {
                    error &&
                    <Alert color="danger"
                        isOpen={this.state.visible}
                        toggle={this.onDismiss.bind(this)}
                        style={alertStyles}
                    >{error}
                    </Alert>
                }
                {!loading ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Lottie options={defaultOptions} height={400} width={400} />
                    </div>
                ) : (
                        <FadeIn >
                            {city && country && <h3>{city}, {country}</h3>}

                            {temprature && <div><p>Temprature:</p> <p>{temprature}C</p></div>}

                            {humidity && <p>Humidy: {humidity}</p>}

                            {description && <p style={{ textTransform: 'capitalize' }}>Description: {description}</p>}
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