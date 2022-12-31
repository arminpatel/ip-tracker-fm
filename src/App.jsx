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

    const isIp = (ipOrDom) => {
        for(let i = 0; i < ipOrDom.length; i++) {
            if(ipOrDom[i] != '.' && !Number.isInteger(ipOrDom)) return false;
        }

        return true;
    }

    useEffect(() => {
        fetchLocation(ip);
    }, [ip])

    const fetchLocation = async (ipOrDom) => {
        const endpoint = isIp(ipOrDom) ? `https://geo.ipify.org/api/v2/country,city?apiKey=at_tKTFzovuKJs1nSrPilDbGloBdPd6m&ipAddress=${ipOrDom}`
         : `https://geo.ipify.org/api/v2/country,city?apiKey=at_tKTFzovuKJs1nSrPilDbGloBdPd6m&domain=${ipOrDom}`
        const res = await fetch(endpoint, {
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