import React, { Component } from 'react'

export default class Weather extends Component {
    render() {

        return (
            <div>
                {this.props.city && this.props.country && <p>City: {this.props.city}, Country: {this.props.country}</p>}
                {this.props.temprature && <p>Temprature: {this.props.temprature}</p>}
                {this.props.humidity && <p>Humidy: {this.props.humidity}</p>}
                {this.props.description && <p style={{ textTransform: 'capitalize' }}>Description: {this.props.description}</p>}

                {this.props.error && <p style={{ textTransform: 'capitalize' }}>{this.props.error}</p>}
            </div>
        )
    }
}
