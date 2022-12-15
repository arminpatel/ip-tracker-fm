const Results = () => {
    return (
        <div className="results-container">
            <div className="section not-last">
                <p className="variable">IP ADDRESS</p>
                <p className="value">192.212.174.101</p>
            </div>
            <div className="section not-last">
                <p className="variable">LOCATION</p>
                <p className="value">Brooklyn, NY 10001</p>
            </div>
            <div className="section not-last">
                <p className="variable">TIMEZONE</p>
                <p className="value">UTC -05:00</p>
            </div>
            <div className="section">
                <p className="variable">ISP</p>
                <p className="value">SpaceX <br/> Starlink</p>
            </div>
        </div>
    )
}

export default Results;