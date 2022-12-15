import Title from "./Title"
import Search from "./Search";

const Head = ({reqData}) => {
    return (
        <div className="head">
            <Title text="IP Address Tracker" />
            <Search reqData={reqData}/>
        </div>
    )
}

export default Head;