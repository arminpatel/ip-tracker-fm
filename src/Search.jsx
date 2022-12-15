import { useState } from "react";

const Search = ({reqData}) => {
    const [ip, setIp] = useState("8.8.8.8")
    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                reqData(ip);
            }}
            className="search-form">
            <input type="search" 
                placeholder="Search for any IP address or domain" 
                onChange={(e) => setIp(e.target.value)}
            />
            <button type="submit"/> 
        </form>
    )
}

export default Search;