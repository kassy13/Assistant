import {MapContainer, TileLayer, useMap, Marker, Popup} from "react-leaflet";
import mapImage from "../assets/images/map.png";
import mapImg from "../assets/images/map main.svg";

const MapElement = () => {
  const position = [51.505, -0.09];

  return (
    <div className="lg:h-[524px] h-[330px] overflow-hidden my-4 rounded-3xl border-[#253860] border-[4px] w-full ">
      {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer> */}
      <img
        src={mapImg}
        alt="map"
        className="object-cover h-full w-full rounded-3xl scale-x-105"
      />
    </div>
  );
};

export default MapElement;
