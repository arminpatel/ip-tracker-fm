import { MapContainer, TileLayer, Marker } from "react-leaflet"

const position = [51.505, -0.09]
const Map = () => {
    return (
        <div className="map">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} />
            </MapContainer>
        </div>
    )
}

export default Map;