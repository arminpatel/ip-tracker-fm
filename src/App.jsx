import { createRoot } from "react-dom/client"
import Head from "./Head";
import Results from "./Results";
import Map from "./Map"
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";

const App = () => {

    const [data, setData] = useState({});
    const [ip, setIp] = useState("");

    const reqData = (ip) => {
        setIp(ip);
    }

    useEffect(() => {
        fetchLocation(ip);
    }, [ip])

    const fetchLocation = async (ip) => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_tKTFzovuKJs1nSrPilDbGloBdPd6m&ipAddress=${ip}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }, 
        });

        setData(await res.json());
    }

    return (
        <div>
            <Head reqData={reqData}/>
            <Results data={ data }/>
            <Map data={data}/>
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)