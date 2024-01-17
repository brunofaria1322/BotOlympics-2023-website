import React from "react";

import { 
  MapContainer, 
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../../images/logos/map_marker.svg";
import {Icon} from 'leaflet'

import {
  LocationContainer,
  TextWrapper,
  Heading,
  MapWrapper,
} from "./LocationElements";

const LocationSection = () => {

  const deec_coords = [40.18651,-8.41675];
  const alma_coords = [40.20457,-8.40763];
  const center_coor = [
    (deec_coords[0] + alma_coords[0])/2,
    (deec_coords[1] + alma_coords[1])/2];
  const icon = new Icon({
    iconUrl: markerIcon, 
    iconSize: [35, 45], 
    iconAnchor: [17, 45],
    popupAnchor: [0, -45]
  });

  return (
    <LocationContainer id="Location">
      <TextWrapper>
        <Heading>Localização</Heading>
      </TextWrapper>
      <MapWrapper>
        <MapContainer
          center={center_coor}
          zoom={14}
          style={{ height: "500px", width: "100vw" }}
          scrollWheelZoom={false}
          >
          <TileLayer
            url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=4GuNvwKqk4iK0oIct7Iv"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          <Marker 
            position={deec_coords}
            icon={icon}
            >
            <Popup>
              DEEC
            </Popup>
          </Marker>
          <Marker 
            position={alma_coords}
            icon={icon}
            >
            <Popup>
              Alma Shopping
            </Popup>
          </Marker>
        </MapContainer>
      </MapWrapper>
    </LocationContainer>
  );
};

export default LocationSection;
