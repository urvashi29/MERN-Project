import React, { Component } from 'react'
import './location.css'
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export default class Location extends Component {
    render() {
        return (
            <div className='location'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751345800094!2d76.65837626445992!3d30.516086492501394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara+University!5e0!3m2!1sen!2sin!4v1553532961735" title="location" width="600" height="450" frameborder="0" allowfullscreen></iframe>
                {/* <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map> */}
            </div>
        )
    }
}

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyCzxyLNd45fypJomi5-aYEPaZOzhik7Io8")
// })(Location)