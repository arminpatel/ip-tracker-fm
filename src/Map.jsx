import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"

const Recenter = ({position}) => {
    const map = useMap();
    useEffect(() => {
        map.setView(position);
    }, [position])
}

const Map = ({data}) => {
        var position = [data.isp ? data.location.lat : 0,
            data.isp ? data.location.lng : 0,
        ]

    return (
        <div className="map">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} />
            <Recenter position={position} />
            </MapContainer>
        </div>
    )
}

export default Map;