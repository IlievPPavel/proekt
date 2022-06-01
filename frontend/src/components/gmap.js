
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Component} from "react";

const Gmap = ({ title }) => {
        return (
            <Map google={this.props.google}
                         zoom={14}
                         style={{width: "100%", height: "25%"}}
                 bootstrapURLKeys={{ key: 'AIzaSyDKyiK9x_L35txqtNRXICkR10nu8cyb934' }}
                         initialCenter={
                             {
                                 lat: 28.704060,
                                 lng: 77.102493
                             }

                         }/>




        )

}


export default Gmap
