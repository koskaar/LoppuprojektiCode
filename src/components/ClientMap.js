import React, { Component } from 'react';
//import { render } from 'react-dom';
import { Map, TileLayer, Marker, Popup, } from 'react-leaflet';
import L from 'leaflet';
import Testi from './Testi';

class ClientMap extends Component {

  constructor(){
    super()
    this.state = {
      lat: 60.17131,
      lng: 24.94145,
      zoom: 17
      
      
    }
  }

componentDidMount(){
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
    
  function success(pos) {
    var crd = pos.coords;
    sessionStorage.setItem("latitude", pos.coords.latitude);
    sessionStorage.setItem("longitude", pos.coords.longitude);
   
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
  // this.setState({lat: sessionStorage.getItem("latitude"), lng: sessionStorage.getItem("longitude")});

}
   
    render() {
      const iconPerson = new L.Icon({
        iconUrl: require('./vessa.jpg'),
        iconSize: new L.Point(20, 20),
        className: 'leaflet-div-icon'
    });
        return (
            <div>
                <Map
                    center={[this.state.lat, this.state.lng] }
                    zoom={this.state.zoom}>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={[this.state.lat, this.state.lng]} icon={iconPerson}  >
      <Popup><Testi/>
        
      </Popup>
    </Marker>
  
  



                </Map>
            </div>
            
        );
    }
}


export default ClientMap;
