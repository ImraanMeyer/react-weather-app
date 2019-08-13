import React, { Component } from 'react'
import { Button, Input } from 'reactstrap';

export default class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather} className="form">
                <Input type="text" name="city" placeholder="Select your city..." />
                <Input type="text" name="country" placeholder="Select your country..." />
                <Button color="light" className="sbt-btn">Get Weather</Button>
            </form>
        )
    }
}
