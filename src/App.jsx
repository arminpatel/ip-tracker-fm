import { createRoot } from "react-dom/client"
import Head from "./Head";
import Results from "./Results";
import Map from "./Map"
import 'leaflet/dist/leaflet.css';

const App = () => {
    return (
        <div>
            <Head />
            <Results />
            <Map />
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)