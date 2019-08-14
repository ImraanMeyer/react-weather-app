import React, { Component } from 'react'
import { Button, Input, Alert } from 'reactstrap';

export default class Form extends Component {
    state = {
        visible: false
    }

    // Dismiss alerts
    onDismiss() {
        this.setState({
            visible: !this.state.visible
        })
    }

    onChange = () => {
        this.setState({
            visible: true
        })
    }

    render() {
        return (
            <form onSubmit={this.props.getWeather} className="form">
                <Alert color="info" isOpen={this.state.visible} fade={true} toggle={this.onDismiss.bind(this)} style={alertStyles}>
                    Select Country Code! (ZA, UK)
                </Alert>

                <Input type="text" name="city" placeholder="Type in your city..." />
                <Input type="text" name="country" placeholder="Type in your country..." onClick={this.onChange} />
                <Button color="light" className="sbt-btn">Get Weather</Button>
            </form>
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