const Results = ({ data }) => {
    return (
        <div className="results-container">
            <div className="section not-last">
                <p className="variable">IP ADDRESS</p>
                <p className="value">{ data.ip ? data.ip : "" }</p>
            </div>
            <div className="section not-last">
                <p className="variable">LOCATION</p>
                <p className="value">{data.isp ? data.location.city : "" }, <br /> { data.isp ? data.location.region : ""}, {data.isp ? data.location.country : ""}</p>
            </div>
            <div className="section not-last">
                <p className="variable">TIMEZONE</p>
                <p className="value">UTC {data.isp ? data.location.timezone : ""}</p>
            </div>
            <div className="section">
                <p className="variable">ISP</p>
                <p className="value"> {data.isp ? data.isp : ""}</p>
            </div>
        </div>
    )
}

export default Results;