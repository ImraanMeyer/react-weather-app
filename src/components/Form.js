import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="Input City" />
                <input type="text" name="country" placeholder="Input Country" />
                <button>Get Weather</button>
            </form>
        )
    }
}
